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
    (vector context
     (. canvas -width)
     (. canvas -height))))

(defn get-context-only
  []
    (let [canvas (.getElementById js/document "canvas")]
      (.getContext canvas "2d")))

(defn draw-everything
  [[block-x block-y] bricks]
  (let [[context c-width c-height] (get-context)]
        ; context (get-context-only)]
    (.fillRect context block-x block-y block-width block-height)
   (dorun
    (for [[brick-x brick-y] bricks]
      (.fillRect context brick-x brick-y brick-width brick-height)))))

(defn init-bricks
  [[context c-width c-height]]
  (for [corner-x (range 0 c-width (+ brick-width brick-space))
        corner-y (range 0 (/ c-height 3) (+ brick-height brick-space))] 
    (vector corner-x corner-y)))

(defn init-block
  [[context c-width c-height]]
  (log (- c-height block-height))
  (vector (- (/ c-width 2) (/ block-width 2)) (- c-height block-height)))
  ;(vector (10 (- c-height block-height))))


(defn log-list
  [items]
  ;(log (first (nth item 0))))
  (dorun
    (for [[x y] items]
      (do
        (log x)
        (log y)))))

(log "Hello World")
; (let [[cntxt c-width c-height] (get-context)]
 ;  (log c-width)
  ; (log c-height))
 (let [
      block (init-block (get-context))
      bricks (init-bricks (get-context))]
  (draw-everything block bricks))