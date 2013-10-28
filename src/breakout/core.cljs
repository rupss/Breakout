; getting the application loop set up

(ns breakout.core
    (:require 
        [goog.dom :as dom]
        [goog.Timer :as timer]
        [goog.events :as events]
        [goog.events.EventType :as event-type]))

(def block-width 150)

(def block-height 20)

(def brick-space 3)

(def brick-width 20)

(def brick-height 10)

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
  (let [[block-x block-y] (state :block)
        bricks (state :bricks)]
    (.fillRect context block-x block-y block-width block-height)
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
  (swap! state assoc :block (get-new-block-coords (@state :block) c e)))
  
(defn init-round
  [state c]
  {:block (init-block c)
   :bricks (init-bricks c)})

(defn play-game
  [timer state c]
  (log "playing game")
  (draw-everything c @state))

(log "Hello World")
 (let [[canvas context c-width c-height :as c] (get-context)
      block (init-block c)
      bricks (init-bricks c)
      state (atom {})
      timer (goog.Timer. (/ 1000 60))]
   (swap! state init-round c)
 ; (draw-everything c @state)
  (.addEventListener js/window "keydown" #(move-block state c %) false)
  (events/listen timer goog.Timer/TICK #(play-game timer state c)))
 
 