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

(def channel (chan 1000)) ;; takes state atom

(def draw-mult (mult channel))
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
    [[center-x center-y 3 4.5] [150 center-y -5 5] [350 center-y -4 -3.1]]))

(defn init-round
  [c]
  {:block (init-block c)
   :bricks (set (init-bricks c))
   :balls (init-balls c)})

(defn get-curr-time
  []
  (.now js/Date))

(defn move-ball
  [i]
  (go
   (let [state (<! channel)
         old-balls (state :balls)
         [old-ball-x old-ball-y old-dx old-dy :as old-ball] (nth old-balls i)
         curr-time (get-curr-time)
         new-ball [(+ old-dx old-ball-x)
                   (+ old-dy old-ball-y)
                   old-dx
                   old-dy]
         new-balls (assoc old-balls i new-ball)]
     (let [new-state (assoc state :balls new-balls)]
        (go
        (>! channel new-state))))))

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
    (if (ball-rectangle-collision block block-width block-height ball)
      (do
        (go (>! channel (assoc state :balls (reverse-ball-direction old-balls ball i :dy)))))
      (go (>! channel state)))))

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
    (if (not (empty? collided-bricks))
      (do
        (dorun 
         (for [brick collided-bricks]
           (erase-brick brick c i)))
        (go
         (>! channel (assoc state :bricks (set/difference all-bricks (set collided-bricks))
                                 :balls (reverse-ball-direction old-balls ball i :dy)))))
      (do
        (go (>! channel state))))))

(defn hit-side-wall? 
  [[x y] c-width]
  (or (<= x 0) (>= x c-width)))

(defn check-side-wall-collision
  [state i c-width]
  (let [old-balls (state :balls)
        ball (nth old-balls i)
        ball-four-points (get-four-points ball)]
    (if (some true? (map #(hit-side-wall? % c-width) ball-four-points))
      (go
       (>! channel (assoc state :balls (reverse-ball-direction old-balls ball i :dx))))
      (go (>! channel state)))))

(defn hit-top-wall?
  [[x y]]
  (<= y 0))

(defn check-top-wall-collision
  [state i]
  (let [old-balls (state :balls)
        ball (nth old-balls i)
        ball-four-points (get-four-points ball)]
    (if (some true? (map #(hit-top-wall? %) ball-four-points))
      (go (>! channel (assoc state :balls (reverse-ball-direction old-balls ball i :dy))))
      (go (>! channel state)))))

(defn check-collisions
  [i [canvas context c-width c-height :as c]]
  (go
   (check-ball-block-collision (<! game-tap) i)
   (check-ball-brick-collision (<! game-tap) c i)
   (check-side-wall-collision (<! game-tap) i c-width)
   (check-top-wall-collision (<! game-tap) i)))

(defn tick-one-ball
  [c i]
  (move-ball i)
  (check-collisions i c))
  
(defn game
  [[canvas context c-width c-height :as c] num-balls]
    (dorun 
      (for [i (range num-balls)]
        (tick-one-ball c i))))

(defn draw-looper
  []
   (go
     (while true
       (draw-everything (<! draw-tap)))))

(draw-looper)
(let [[canvas context c-width c-height :as c] (get-context)
      init-state (init-round c)]
  (go
   (>! channel init-state)
   (while true
     (game c (count (:balls init-state)))
     (<! (timeout 4)))))
