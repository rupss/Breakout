(ns breakout.core)

(def block-width 150)

(def block-height 20)

(def brick-space 3)

(def brick-width 10)

(def brick-height 5)

;(defn get-block
 ; []
  ;(let [canvas (.getElementById js/document "canvas")]
   ; (.getContext canvas "2d")))
     ;(. canvas -width)
     ;(. canvas -height)]))

(defn draw-block
  []
  (let [canvas (.getElementById js/document "canvas")
        context (.getContext canvas "2d")]
  	(.fillRect context 100 100 block-width block-height)))

(defn init-bricks
  []
  (for [i (range 10)]
    ))

(. js/console (log "Hello world!"))
(draw-block)