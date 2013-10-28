(defproject breakout "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]]

  :plugins [[lein-cljsbuild "0.3.4"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "breakout"
              :source-paths ["src"]
              :compiler {
                :output-to "breakout.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
