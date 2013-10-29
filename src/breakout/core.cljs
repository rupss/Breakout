; getting the application loop set up
; setinterval

(ns breakout.core)

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
  (let [[curr-block-x curr-block-y] (state :curr-block)
        [old-block-x old-block-y] (state :old-block)
        bricks (state :bricks)]
    (when (and (not (nil? old-block-x)) (not (nil? old-block-y)))
      (.clearRect context old-block-x old-block-y block-width block-height))
    (.fillRect context curr-block-x curr-block-y block-width block-height)
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
        (get-new-block-coords (@state :curr-block) c e)
        old-block-coords (@state :curr-block)]
    (swap! state assoc :curr-block new-block-coords)
    (swap! state assoc :old-block old-block-coords)))
  
(defn init-round
  [state c]
  {:curr-block (init-block c)
   :old-block (vector nil nil)
   :bricks (init-bricks c)})

(defn game-loop
  [state c]
  (js/setTimeout (fn[] (game-loop state c)) 10)
  (draw-everything c @state))

(defn ^:export init
  []
  (let [[canvas context c-width c-height :as c] (get-context)
      state (atom {})]
   (swap! state init-round c)
   (.addEventListener js/window "keydown" #(move-block state c %) false)
   (game-loop state c))) 

(init)
 
 