; Next step - reimplementing with core.async

(ns breakout.core
  (:require [clojure.set :as set]
            [cljs.core.async :refer [>! <! chan put! take! timeout close!]]
            [goog.dom :as dom])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(def block-width 500)

(def block-height 20)

(def brick-space 3)

(def brick-width 20)

(def brick-height 10)

(def ball-radius 15)

(def block-movement 20)

(def channel (chan))

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

(defn log-list
  [items]
  (dorun
    (for [[x y dx dy] items]
      (do
        (log x)
        (log y)))))

(defn draw-ball
  [[ball-x ball-y dx dy] [canvas context c-width c-height :as c]]
    (.beginPath context)
    (.arc context ball-x ball-y ball-radius 0 (* 2 Math/PI) true)
    (.fill context)
    (.closePath context))

(defn draw-everything
  [[canvas context c-width c-height :as c] state]
  (let [[block-x block-y] (state :block)
        balls (state :balls)
        bricks (state :bricks)]
    (.fillRect context block-x block-y block-width block-height)
   (dorun
    (for [[brick-x brick-y] bricks]
      (.fillRect context brick-x brick-y brick-width brick-height)))
   (dorun
    (for [ball balls]
      (draw-ball ball c)))))

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
    [[center-x center-y 0.5 1] [150 center-y -2 2] [350 center-y -1.2 1.3]]))

(defn init-round
  [state c]
  {:block (init-block c)
   :bricks (set (init-bricks c))
   :balls (init-balls c)})

(defn move-ball
  [state i]
  (let [old-balls (@state :balls)
        [ball-x ball-y dx dy :as ball] (nth old-balls i)
        new-balls (assoc old-balls i [(+ dx ball-x) (+ dy ball-y) dx dy])]
    (swap! state assoc :balls new-balls)))

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
  (let [block (@state :block)
        old-balls (@state :balls)
        [ball-x ball-y old-dx old-dy :as ball] (nth old-balls i)]
    (when (ball-rectangle-collision block block-width block-height ball)
      (swap! state assoc :balls (reverse-ball-direction old-balls ball i :dy)))))

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
  [state i]
    ; (check-ball-block-horizontal-collision state)
    (check-ball-block-vertical-collision state i))

(defn get-collided-bricks
  [ball bricks]
  (filter #(ball-rectangle-collision % brick-width brick-height ball) bricks))

(defn check-ball-brick-collision
  [state i]
  (let [old-balls (@state :balls)
        ball (nth old-balls i)
        all-bricks (@state :bricks)
        collided-bricks (get-collided-bricks ball all-bricks)]
    (when (not (empty? collided-bricks))
      (swap! state assoc :bricks (set/difference all-bricks (set collided-bricks)))
      (swap! state assoc :balls (reverse-ball-direction old-balls ball i :dy)))))

(defn hit-side-wall? 
  [[x y] c-width]
  (or (<= x 0) (>= x c-width)))

(defn check-side-wall-collision
  [state i c-width]
  (let [old-balls (@state :balls)
        ball (nth old-balls i)
        ball-four-points (get-four-points ball)]
    (when (some true? (map #(hit-side-wall? % c-width) ball-four-points))
      (swap! state assoc :balls (reverse-ball-direction old-balls ball i :dx)))))

(defn check-collisions
  [state i [canvas context c-width c-height :as c]]
  (check-ball-block-collision state i)
  (check-ball-brick-collision state i)
  (check-side-wall-collision state i c-width))

(defn tick-one-ball
  [state c i]
  (move-ball state i)
  (check-collisions state i c))
  
(defn game-loop
  [state [canvas context c-width c-height :as c]]
  (tick-one-ball state c 0)
  (.clearRect context 0 0 c-width c-height)
  (draw-everything c @state))

(defn ^:export init
  []
  (let [[canvas context c-width c-height :as c] (get-context)
      state (atom {})]
   (swap! state init-round c)
   (go 
     (while true 
       (<! (timeout 4)) 
       (game-loop state c))))) 

(init)
 