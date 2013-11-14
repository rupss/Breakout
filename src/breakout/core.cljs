; Next step - reimplementing with core.async

(ns breakout.core
  (:require [clojure.set :as set]
            [cljs.core.async :refer [>! <! chan put! take! timeout close! tap mult]]
            [goog.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(def block-width 500)

(def block-height 20)

(def brick-space 3)

(def brick-width 20)

(def brick-height 10)

(def ball-radius 15)

(def block-movement 20)

(def tick-channel (chan)) ;; just for the purpose of knowing when an update has 
;; happened - content doesn't matter

(def draw-channel (chan 1000)) ;; takes state atom

(def draw-mult (mult draw-channel))
(def draw-tap (tap draw-mult (chan 1000)))
(def game-tap (tap draw-mult (chan 1000)))

(defn log
  [item]
  (. js/console (log item)))

(defn print-first-ball-coords
  [new-state]
  (log (first (first (new-state :balls))))
  (log (nth (first (new-state :balls)) 1))
)

(defn get-context
  []
  (let [canvas (.getElementById js/document "canvas")
        context (.getContext canvas "2d")]
    [canvas
      context
     (. canvas -width)
     (. canvas -height)]))

(defn get-context-only
  []
    (let [canvas (.getElementById js/document "canvas")]
      (.getContext canvas "2d")))

(defn log-list
  [items]
  (dorun
    (for [[x y dx dy] items]
      (do
        (log x)
        (log y)))))

(defn draw-sized-circle
  [[ball-x ball-y dx dy] [canvas context c-width c-height :as c] color radius]
    (.beginPath context)
    (.arc context ball-x ball-y radius 0 (* 2 Math/PI) true)
    (set! (.-fillStyle context) color)
    (.fill context)
    (.closePath context))

(defn draw-ball
  [ball c color]
    (cond
      (= color "white") (draw-sized-circle ball c color ball-radius);(+ ball-radius 0.8))
      (= color "black") (draw-sized-circle ball c color ball-radius)))

(defn draw-brick
  [[brick-x brick-y] [canvas context c-width c-height :as c] color]
  (set! (.-fillStyle context) color)
  (.fillRect context brick-x brick-y brick-width brick-height))

(defn erase-brick
  [[brick-x brick-y] [canvas context c-width c-height :as c] color]
  (.clearRect context brick-x brick-y brick-width brick-height))

(defn draw-everything
  [state]
  (let [[canvas context c-width c-height :as c] (get-context)
        [block-x block-y] (state :block)
        balls (state :balls)
        bricks (state :bricks)]
    (.clearRect context 0 0 c-width c-height)
    (.fillRect context block-x block-y block-width block-height)
   (dorun
    (for [[brick-x brick-y :as brick] bricks]
      (draw-brick brick c "black")))
   (dorun
    (for [ball balls]
      (draw-ball ball c "black")))))

(defn init-bricks
  [[canvas context c-width c-height]]
  (for [corner-x (range 0 c-width (+ brick-width brick-space))
        corner-y (range 0 (/ c-height 3) (+ brick-height brick-space))] 
    [corner-x corner-y]))

(defn init-block
  [[canvas context c-width c-height]]
  [0 (- c-height block-height)])

(defn init-balls
  [[canvas context c-width c-height]]
  (let [center-x (/ c-width 2)
        center-y (/ c-height 2)]
    ;[[center-x center-y 1.2 1.5] [150 center-y -3 3] [350 center-y -2 -2.2]]
    [[center-x center-y 1.2 1.5]]
    ))

(defn init-round
  [c]
  {:block (init-block c)
   :bricks (set (init-bricks c))
   :balls (init-balls c)})

(defn get-curr-time
  []
  (.now js/Date))

(defn move-ball
  [state i]
  (let [old-balls (state :balls)
        [old-ball-x old-ball-y old-dx old-dy :as old-ball] (nth old-balls i)
        curr-time (get-curr-time)
        new-ball [(+ old-dx old-ball-x)
                  (+ old-dy old-ball-y)
                  old-dx
                  old-dy]
        new-balls (assoc old-balls i new-ball)]
    (let [new-state (assoc state :balls new-balls)]
    
    ;; (if (== i 0) (do
    ;; ;  (log "OLD")
    ;;  ; (log old-ball-x)
    ;;   ;(log old-ball-y)
    ;;   (log "NEW")
    ;;   (log (first new-ball))
    ;;   (log (nth new-ball 1)))
    ;;   (log "new-state"))
    ;;  ; (log (first (first (new-state :balls))))
    ;;   ;(log (nth (first (new-state :balls)) 1)))
    ;;   (print-first-ball-coords new-state)
      (go
        (>! draw-channel new-state)
        (log "move ball - put state on channel")))))

(defn get-four-points
  [[ball-x ball-y dx dy]]
  [[(+ ball-x ball-radius) ball-y]
   [(- ball-x ball-radius) ball-y]
   [ball-x (+ ball-y ball-radius)]
   [ball-x (- ball-y ball-radius)]])

(defn in-bound? 
  [diff bound]
  (and (<= diff bound) (>= diff 0)))

(defn boundary-within-rect?
  [[x y] [rect-x rect-y] rect-width rect-height]
  (let [x-diff (- x rect-x)
        y-diff (- y rect-y)]
    (and (in-bound? x-diff rect-width) (in-bound? y-diff rect-height))))

(defn ball-rectangle-collision
  [rect rect-width rect-height ball]
  (let [ball-four-points (get-four-points ball)]
    (some true? (map #(boundary-within-rect? % rect rect-width rect-height) ball-four-points))))

(defn reverse-ball-direction
  "direction-to-reverse is either :dx or :dy"
  [old-balls [ball-x ball-y dx dy :as ball] i direction-to-reverse]
  (cond 
    (= direction-to-reverse :dy) (assoc old-balls i [ball-x ball-y dx (* -1 dy)])
    (= direction-to-reverse :dx) (assoc old-balls i [ball-x ball-y (* -1 dx) dy])))

(defn check-ball-block-vertical-collision
  [state i]
  (let [block (state :block)
        old-balls (state :balls)
        [ball-x ball-y old-dx old-dy :as ball] (nth old-balls i)]
    when (ball-rectangle-collision block block-width block-height ball)
    (go (>! draw-channel (assoc state :balls (reverse-ball-direction old-balls ball i :dy))))))

(defn check-ball-block-collision
  [state i]
    (check-ball-block-vertical-collision state i))

(defn get-collided-bricks
  [ball bricks]
  (filter #(ball-rectangle-collision % brick-width brick-height ball) bricks))

(defn check-ball-brick-collision
  [state c i]
  (let [old-balls (state :balls)
        ball (nth old-balls i)
        all-bricks (state :bricks)
        collided-bricks (get-collided-bricks ball all-bricks)]
    (when (not (empty? collided-bricks))
      (log "HIT")
      (dorun 
        (for [brick collided-bricks]
        (erase-brick brick c i)))
      (go
        (>! draw-channel (assoc state :bricks (set/difference all-bricks (set collided-bricks))
                                    :balls (reverse-ball-direction old-balls ball i :dy)))))))

(defn hit-side-wall? 
  [[x y] c-width]
  (or (<= x 0) (>= x c-width)))

(defn check-side-wall-collision
  [state i c-width]
  (let [old-balls (state :balls)
        ball (nth old-balls i)
        ball-four-points (get-four-points ball)]
    (when (some true? (map #(hit-side-wall? % c-width) ball-four-points))
      (go
        (>! draw-channel (assoc state :balls (reverse-ball-direction old-balls ball i :dx)))))))

(defn hit-top-wall?
  [[x y]]
  (<= y 0))

(defn check-top-wall-collision
  [state i]
  (let [old-balls (state :balls)
        ball (nth old-balls i)
        ball-four-points (get-four-points ball)]
    (when (some true? (map #(hit-top-wall? %) ball-four-points))
      (go (>! draw-channel (assoc state :balls (reverse-ball-direction old-balls ball i :dy)))))))

(defn check-collisions
  [state i [canvas context c-width c-height :as c]]
  (check-ball-block-collision state i)
  ;(check-ball-brick-collision state c i)
  ;(check-side-wall-collision state i c-width)
  ;(check-top-wall-collision state i)
  )

(defn tick-one-ball
  [c i]
  (go
   (let [state (<! game-tap)]
     (move-ball state i)
     (let [state (<! game-tap)]
       (check-collisions state i c)))))
  
(defn game
  [[canvas context c-width c-height :as c] num-balls]
    (dorun 
      (for [i (range num-balls)]
        (tick-one-ball c i))))

(defn draw-looper
  []
   (go
     (while true
       (draw-everything (<! draw-tap))
       (log "drew everything - fn"))))

(draw-looper)
(let [[canvas context c-width c-height :as c] (get-context)
      init-state (init-round c)]
  (go
   (>! draw-channel init-state)
   (loop [n 0]
     (if (< n 100)
       (do
         (game c (count (:balls init-state)))
         (<! (timeout 10))
         (recur (inc n)))))))















(comment
  (go 
   (log "testing error handling")
   (try 
     (<? jkdlfjaslfjafajf)
     (catch js/Error e
       (log (error e)))))
  )




























(comment
  (go
   (log "about to push")
   (>! draw-channel 2)
   (>! draw-channel 3)
   (log "pushed"))
  (go
   (<! (timeout 100))
                                        ;(log (<! draw-channel))
   (log (<! draw-channel))))

(comment
(go
  (<! (timeout 100))
  (let [draw-mult (mult draw-channel)
        draw1 (tap draw-mult (chan))
        draw2 (tap draw-mult (chan))]
     (log (<! draw1))
     (log (<! draw-channel))
     (log (<! draw2))
     (log "done")))
)

(comment (go
          (>! tick-channel "X")
          (>! tick-channel "Y")
          (>! tick-channel "Z")))

(comment  (go 
           (<! (timeout 100))
           (let [tick-mult (mult tick-channel)
                 tap1 (tap tick-mult (chan))
                 tap2 (tap tick-mult (chan))]
             (log (<! tap1))
                                        ; (log (<! tap2))
             (log (<! tap2))
             (log (<! tick-channel)))))

(comment
(log "before")
(go
  (log "inside go block")
  (>! draw-channel 1)
  (log "pushed the first")
  (>! draw-channel 2)
  (log "pushed the second"))
)
    ;(log (<! draw-channel))))
; (log (<! draw-copy))


 
