goog.provide('breakout.core');
goog.require('cljs.core');
breakout.core.block_width = 150;
breakout.core.block_height = 20;
breakout.core.brick_space = 3;
breakout.core.brick_width = 20;
breakout.core.brick_height = 10;
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.vector.call(null,canvas,context,canvas.width,canvas.height);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.draw_everything = (function draw_everything(p__6213,bricks){var vec__6224 = p__6213;var block_x = cljs.core.nth.call(null,vec__6224,0,null);var block_y = cljs.core.nth.call(null,vec__6224,1,null);var vec__6225 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__6225,0,null);var context = cljs.core.nth.call(null,vec__6225,1,null);var c_width = cljs.core.nth.call(null,vec__6225,2,null);var c_height = cljs.core.nth.call(null,vec__6225,3,null);context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__6226(s__6227){return (new cljs.core.LazySeq(null,(function (){var s__6227__$1 = s__6227;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6227__$1);if(temp__4092__auto__)
{var s__6227__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6227__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6227__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6229 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6228 = 0;while(true){
if((i__6228 < size__3638__auto__))
{var vec__6232 = cljs.core._nth.call(null,c__3637__auto__,i__6228);var brick_x = cljs.core.nth.call(null,vec__6232,0,null);var brick_y = cljs.core.nth.call(null,vec__6232,1,null);cljs.core.chunk_append.call(null,b__6229,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__6234 = (i__6228 + 1);
i__6228 = G__6234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6229),iter__6226.call(null,cljs.core.chunk_rest.call(null,s__6227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6229),null);
}
} else
{var vec__6233 = cljs.core.first.call(null,s__6227__$2);var brick_x = cljs.core.nth.call(null,vec__6233,0,null);var brick_y = cljs.core.nth.call(null,vec__6233,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__6226.call(null,cljs.core.rest.call(null,s__6227__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
});
breakout.core.init_bricks = (function init_bricks(p__6235){var vec__6243 = p__6235;var canvas = cljs.core.nth.call(null,vec__6243,0,null);var context = cljs.core.nth.call(null,vec__6243,1,null);var c_width = cljs.core.nth.call(null,vec__6243,2,null);var c_height = cljs.core.nth.call(null,vec__6243,3,null);var iter__3639__auto__ = (function iter__6244(s__6245){return (new cljs.core.LazySeq(null,(function (){var s__6245__$1 = s__6245;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6245__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__6245__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__6246(s__6247){return (new cljs.core.LazySeq(null,((function (s__6245__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__6247__$1 = s__6247;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6247__$1);if(temp__4092__auto____$1)
{var s__6247__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6247__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6247__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6249 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6248 = 0;while(true){
if((i__6248 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__6248);cljs.core.chunk_append.call(null,b__6249,cljs.core.vector.call(null,corner_x,corner_y));
{
var G__6250 = (i__6248 + 1);
i__6248 = G__6250;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6249),iter__6246.call(null,cljs.core.chunk_rest.call(null,s__6247__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6249),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__6247__$2);return cljs.core.cons.call(null,cljs.core.vector.call(null,corner_x,corner_y),iter__6246.call(null,cljs.core.rest.call(null,s__6247__$2)));
}
} else
{return null;
}
break;
}
});})(s__6245__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__6245__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__6244.call(null,cljs.core.rest.call(null,s__6245__$1)));
} else
{{
var G__6251 = cljs.core.rest.call(null,s__6245__$1);
s__6245__$1 = G__6251;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,cljs.core.range.call(null,0,c_width,(breakout.core.brick_width + breakout.core.brick_space)));
});
breakout.core.init_block = (function init_block(p__6252){var vec__6254 = p__6252;var canvas = cljs.core.nth.call(null,vec__6254,0,null);var context = cljs.core.nth.call(null,vec__6254,1,null);var c_width = cljs.core.nth.call(null,vec__6254,2,null);var c_height = cljs.core.nth.call(null,vec__6254,3,null);return cljs.core.vector.call(null,((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height));
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__6263(s__6264){return (new cljs.core.LazySeq(null,(function (){var s__6264__$1 = s__6264;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6264__$1);if(temp__4092__auto__)
{var s__6264__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6264__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6264__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6266 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6265 = 0;while(true){
if((i__6265 < size__3638__auto__))
{var vec__6269 = cljs.core._nth.call(null,c__3637__auto__,i__6265);var x = cljs.core.nth.call(null,vec__6269,0,null);var y = cljs.core.nth.call(null,vec__6269,1,null);cljs.core.chunk_append.call(null,b__6266,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__6271 = (i__6265 + 1);
i__6265 = G__6271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6266),iter__6263.call(null,cljs.core.chunk_rest.call(null,s__6264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6266),null);
}
} else
{var vec__6270 = cljs.core.first.call(null,s__6264__$2);var x = cljs.core.nth.call(null,vec__6270,0,null);var y = cljs.core.nth.call(null,vec__6270,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__6263.call(null,cljs.core.rest.call(null,s__6264__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,items);
})());
});
breakout.core.move_block = (function move_block(e,block){if((39 === e.keyCode))
{return breakout.core.log.call(null,"RIGHT");
} else
{if((37 === e.keyCode))
{return breakout.core.log.call(null,"LEFT");
} else
{return null;
}
}
});
breakout.core.log.call(null,"Hello World");
var vec__6273_6274 = breakout.core.get_context.call(null);var canvas_6275 = cljs.core.nth.call(null,vec__6273_6274,0,null);var context_6276 = cljs.core.nth.call(null,vec__6273_6274,1,null);var c_width_6277 = cljs.core.nth.call(null,vec__6273_6274,2,null);var c_height_6278 = cljs.core.nth.call(null,vec__6273_6274,3,null);var c_6279 = vec__6273_6274;var block_6280 = breakout.core.init_block.call(null,c_6279);var bricks_6281 = breakout.core.init_bricks.call(null,c_6279);breakout.core.draw_everything.call(null,block_6280,bricks_6281);
window.addEventListener("keydown",(function (p1__6272_SHARP_){return breakout.core.move_block.call(null,p1__6272_SHARP_,block_6280);
}),false);

//@ sourceMappingURL=core.js.map