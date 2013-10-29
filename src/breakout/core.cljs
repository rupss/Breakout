; getting the application loop set up
; setinterval

(ns breakout.core)

(def block-width 150)

(def block-height 20)

(def brick-space 3)

(def brick-width 20)

(def brick-height 10)

(def ball-radius 15)

(defn log
  [item]
  (. js/console (log item)))

(defn get-context
  []
  (let [canvas (.getElementById js/document "canvas")
        context (.getContext canvas "2d")]
    (vector
      canvas
      context
     (. canvas -width)
     (. canvas -height))))

(defn get-context-only
  []
    (let [canvas (.getElementById js/document "canvas")]
      (.getContext canvas "2d")))

(defn draw-everything
  [[canvas context c-width c-height :as c] state]
  (let [[curr-block-x curr-block-y] (state :curr-block)
        [ball-x ball-y] (state :ball)
        bricks (state :bricks)]
    (.fillRect context curr-block-x curr-block-y block-width block-height)
    (.beginPath context)
    (.arc context ball-x ball-y ball-radius 0 (* 2 Math/PI) true)
    (.fill context)
    (.closePath context)
   (dorun
    (for [[brick-x brick-y] bricks]
      (.fillRect context brick-x brick-y brick-width brick-height)))))

(defn init-bricks
  [[canvas context c-width c-height]]
  (for [corner-x (range 0 c-width (+ brick-width brick-space))
        corner-y (range 0 (/ c-height 3) (+ brick-height brick-space))] 
    (vector corner-x corner-y)))

(defn init-block
  [[canvas context c-width c-height]]
  (vector (- (/ c-width 2) (/ block-width 2)) (- c-height block-height)))

(defn log-list
  [items]
  (dorun
    (for [[x y] items]
      (do
        (log x)
        (log y)))))

(defn move-block-left
  [[block-x block-y] [canvas context c-width c-height]]
  (let [new-block-x (- block-x 4)]
    (if (>= new-block-x 0)
      (vector new-block-x block-y)
      (vector 0 block-y))))

(defn move-block-right
  [[block-x block-y] [canvas context c-width c-height]]
  (let [new-block-x (+ block-x 4)
        bound (- c-width block-width)]
    (if (<= new-block-x bound)
      (vector new-block-x block-y)
      (vector bound block-y))))

(defn get-new-block-coords
  [block c e]
   (cond
     (== 39 (. e -keyCode)) (move-block-right block c)
     (== 37 (. e -keyCode)) (move-block-left block c)))

(defn move-block
  [state c e]
  (let [[new-block-x new-block-y :as new-block-coords] 
        (get-new-block-coords (@state :curr-block) c e)]
    (swap! state assoc :curr-block new-block-coords)))

(defn init-ball
  [[canvas context c-width c-height]]
  (let [center-x (/ c-width 2)
        center-y (/ c-height 2)]
    (vector center-x center-y)))

(defn move-ball
  [state]
  (let [dx (@state :dx)
        dy (@state :dy)
        [ball-x ball-y] (@state :ball)]
    (swap! state assoc :ball (vector (+ dx ball-x) (+ dy ball-y)))))

(defn init-round
  [state c]
  {:curr-block (init-block c)
   :bricks (init-bricks c)
   :ball (init-ball c)
   :dx 0.5
   :dy 1})

(defn game-loop
  [state [canvas context c-width c-height :as c]]
  (js/setTimeout (fn[] (game-loop state c)) 10)
  (move-ball state)
  (.clearRect context 0 0 c-width c-height)
  (draw-everything c @state))

(defn ^:export init
  []
  (let [[canvas context c-width c-height :as c] (get-context)
      state (atom {})]
   (swap! state init-round c)
   (.addEventListener js/window "keydown" #(move-block state c %) false)
   (game-loop state c))) 

(init)
 
 