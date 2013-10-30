; Next step - reimplementing with core.async

(ns breakout.core
  (:require [clojure.set :as set]
            [cljs.core.async :refer [>! <! chan put! take! timeout close!]]
            [goog.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(def block-width 150)

(def block-height 20)

(def brick-space 3)

(def brick-width 20)

(def brick-height 10)

(def ball-radius 15)

(def block-movement 20)

(defn log
  [item]
  (. js/console (log item)))

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

(defn draw-everything
  [[canvas context c-width c-height :as c] state]
  (let [[block-x block-y] (state :block)
        [ball-x ball-y] (state :ball)
        bricks (state :bricks)]
    (.fillRect context block-x block-y block-width block-height)
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
    [corner-x corner-y]))

(defn init-block
  [[canvas context c-width c-height]]
  [(- (/ c-width 2) (/ block-width 2)) (- c-height block-height)])

(defn log-list
  [items]
  (dorun
    (for [[x y] items]
      (do
        (log x)
        (log y)))))

(defn move-block-left
  [[block-x block-y] [canvas context c-width c-height]]
  (let [new-block-x (- block-x block-movement)]
    (if (>= new-block-x 0)
      [new-block-x block-y]
      [0 block-y])))

(defn move-block-right
  [[block-x block-y] [canvas context c-width c-height]]
  (let [new-block-x (+ block-x block-movement)
        bound (- c-width block-width)]
    (if (<= new-block-x bound)
      [new-block-x block-y]
      [bound block-y])))

(defn get-new-block-coords
  [block c e]
   (cond
     (== 39 (. e -keyCode)) (move-block-right block c)
     (== 37 (. e -keyCode)) (move-block-left block c)
     :else block))

(defn move-block
  [state c e]
  (let [[new-block-x new-block-y :as new-block-coords] 
        (get-new-block-coords (@state :block) c e)]
    (swap! state assoc :block new-block-coords)))

(defn init-ball
  [[canvas context c-width c-height]]
  (let [center-x (/ c-width 2)
        center-y (/ c-height 2)]
    [center-x center-y]))

(defn move-ball
  [state]
  (let [dx (@state :dx)
        dy (@state :dy)
        [ball-x ball-y] (@state :ball)]
    (swap! state assoc :ball [(+ dx ball-x) (+ dy ball-y)])))

(defn init-round
  [state c]
  {:block (init-block c)
   :bricks (set (init-bricks c))
   :ball (init-ball c)
   :dx 0.5 ; TODO initialize randomly
   :dy 1}) ; TODO initialize randomly

(defn get-four-points
  [[ball-x ball-y]]
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

(defn check-ball-block-vertical-collision
  [state]
  (let [ball (@state :ball)
        block (@state :block)
        old-dx (@state :dx)
        old-dy (@state :dy)]
    (when (ball-rectangle-collision block block-width block-height ball)
      (swap! state assoc :dy (* -1 old-dy)))))

(defn block-horizontal-collision?
  [[x y] [block-x block-y]]
  (and (== x block-x) (in-bound? (- y block-y) block-height)))

(defn check-ball-block-horizontal-collision
  [state]
  (let [ball (@state :ball)
        block (@state :block)
        ball-four-points (get-four-points ball)]
    (when (some true? (map #(block-horizontal-collision? % block) ball-four-points))
      (swap! state assoc :dy (* (@state :dy) -1))
      (swap! state assoc :dx (* (@state :dx) -1)))))

(defn check-ball-block-collision
  [state]
    ; (check-ball-block-horizontal-collision state)
    (check-ball-block-vertical-collision state))

(defn get-collided-bricks
  [ball bricks]
  (filter #(ball-rectangle-collision % brick-width brick-height ball) bricks))

(defn check-ball-brick-collision
  [state]
  (let [ball (@state :ball)
        all-bricks (@state :bricks)
        collided-bricks (get-collided-bricks ball all-bricks)]
    (when (not (empty? collided-bricks))
      (swap! state assoc :bricks (set/difference all-bricks (set collided-bricks)))
      (swap! state assoc :dy (* -1 (@state :dy))))))

(defn hit-side-wall? 
  [[x y] c-width]
  (or (<= x 0) (>= x c-width)))

(defn check-side-wall-collision
  [state c-width]
  (let [ball (@state :ball)
        ball-four-points (get-four-points ball)]
    (when (some true? (map #(hit-side-wall? % c-width) ball-four-points))
      (swap! state assoc :dx (* (@state :dx) -1)))))

(defn check-collisions
  [state [canvas context c-width c-height :as c]]
  (check-ball-block-collision state)
  (check-ball-brick-collision state)
  (check-side-wall-collision state c-width))

(defn game-loop
  [state [canvas context c-width c-height :as c]]
  (move-ball state)
  (check-collisions state c)
  (.clearRect context 0 0 c-width c-height)
  (draw-everything c @state))

(defn ^:export init
  []
  (let [[canvas context c-width c-height :as c] (get-context)
      state (atom {})]
   (swap! state init-round c)
   (.addEventListener js/window "keydown" #(move-block state c %) false)
   (go 
     (while true 
       (<! (timeout 4)) 
       (game-loop state c))))) 

(init)
 
 