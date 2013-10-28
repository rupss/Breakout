goog.provide('breakout.core');
goog.require('cljs.core');
breakout.core.block_width = 150;
breakout.core.block_height = 20;
breakout.core.draw_block = (function draw_block(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return context.fillRect(100,100,breakout.core.block_width,breakout.core.block_height);
});
