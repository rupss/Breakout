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
  [[block-x block-y] bricks]
  (let [[canvas context c-width c-height] (get-context)]
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

(defn move-block
  [e block]
   (cond 
     (== 39 (. e -keyCode)) (log "RIGHT")
     (== 37 (. e -keyCode)) (log "LEFT")))

(log "Hello World")
 (let [[canvas context c-width c-height :as c] (get-context)
      block (init-block c)
      bricks (init-bricks c)]
  (draw-everything block bricks)
  (.addEventListener js/window "keydown" #(move-block % block) false))
 
 
 ;document.getElementById('kinput').onkeypress = khandle
