goog.provide('breakout.core');
goog.require('cljs.core');
breakout.core.block_width = 150;
breakout.core.block_height = 20;
breakout.core.brick_space = 3;
breakout.core.brick_width = 20;
breakout.core.brick_height = 10;
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.vector.call(null,context,canvas.width,canvas.height);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.draw_everything = (function draw_everything(p__5664,bricks){var vec__5675 = p__5664;var block_x = cljs.core.nth.call(null,vec__5675,0,null);var block_y = cljs.core.nth.call(null,vec__5675,1,null);var vec__5676 = breakout.core.get_context.call(null);var context = cljs.core.nth.call(null,vec__5676,0,null);var c_width = cljs.core.nth.call(null,vec__5676,1,null);var c_height = cljs.core.nth.call(null,vec__5676,2,null);context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5677(s__5678){return (new cljs.core.LazySeq(null,(function (){var s__5678__$1 = s__5678;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5678__$1);if(temp__4092__auto__)
{var s__5678__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5678__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5678__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5680 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5679 = 0;while(true){
if((i__5679 < size__3638__auto__))
{var vec__5683 = cljs.core._nth.call(null,c__3637__auto__,i__5679);var brick_x = cljs.core.nth.call(null,vec__5683,0,null);var brick_y = cljs.core.nth.call(null,vec__5683,1,null);cljs.core.chunk_append.call(null,b__5680,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__5685 = (i__5679 + 1);
i__5679 = G__5685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5680),iter__5677.call(null,cljs.core.chunk_rest.call(null,s__5678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5680),null);
}
} else
{var vec__5684 = cljs.core.first.call(null,s__5678__$2);var brick_x = cljs.core.nth.call(null,vec__5684,0,null);var brick_y = cljs.core.nth.call(null,vec__5684,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__5677.call(null,cljs.core.rest.call(null,s__5678__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__5686){var vec__5694 = p__5686;var context = cljs.core.nth.call(null,vec__5694,0,null);var c_width = cljs.core.nth.call(null,vec__5694,1,null);var c_height = cljs.core.nth.call(null,vec__5694,2,null);var iter__3639__auto__ = (function iter__5695(s__5696){return (new cljs.core.LazySeq(null,(function (){var s__5696__$1 = s__5696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5696__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__5696__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__5697(s__5698){return (new cljs.core.LazySeq(null,((function (s__5696__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__5698__$1 = s__5698;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5698__$1);if(temp__4092__auto____$1)
{var s__5698__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5698__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5698__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5700 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5699 = 0;while(true){
if((i__5699 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__5699);cljs.core.chunk_append.call(null,b__5700,cljs.core.vector.call(null,corner_x,corner_y));
{
var G__5701 = (i__5699 + 1);
i__5699 = G__5701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5700),iter__5697.call(null,cljs.core.chunk_rest.call(null,s__5698__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5700),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__5698__$2);return cljs.core.cons.call(null,cljs.core.vector.call(null,corner_x,corner_y),iter__5697.call(null,cljs.core.rest.call(null,s__5698__$2)));
}
} else
{return null;
}
break;
}
});})(s__5696__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__5696__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__5695.call(null,cljs.core.rest.call(null,s__5696__$1)));
} else
{{
var G__5702 = cljs.core.rest.call(null,s__5696__$1);
s__5696__$1 = G__5702;
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
breakout.core.init_block = (function init_block(p__5703){var vec__5705 = p__5703;var context = cljs.core.nth.call(null,vec__5705,0,null);var c_width = cljs.core.nth.call(null,vec__5705,1,null);var c_height = cljs.core.nth.call(null,vec__5705,2,null);breakout.core.log.call(null,(c_height - breakout.core.block_height));
return cljs.core.vector.call(null,((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height));
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5714(s__5715){return (new cljs.core.LazySeq(null,(function (){var s__5715__$1 = s__5715;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5715__$1);if(temp__4092__auto__)
{var s__5715__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5715__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5715__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5717 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5716 = 0;while(true){
if((i__5716 < size__3638__auto__))
{var vec__5720 = cljs.core._nth.call(null,c__3637__auto__,i__5716);var x = cljs.core.nth.call(null,vec__5720,0,null);var y = cljs.core.nth.call(null,vec__5720,1,null);cljs.core.chunk_append.call(null,b__5717,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__5722 = (i__5716 + 1);
i__5716 = G__5722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5717),iter__5714.call(null,cljs.core.chunk_rest.call(null,s__5715__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5717),null);
}
} else
{var vec__5721 = cljs.core.first.call(null,s__5715__$2);var x = cljs.core.nth.call(null,vec__5721,0,null);var y = cljs.core.nth.call(null,vec__5721,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__5714.call(null,cljs.core.rest.call(null,s__5715__$2)));
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
breakout.core.log.call(null,"Hello World");
var block_5723 = breakout.core.init_block.call(null,breakout.core.get_context.call(null));var bricks_5724 = breakout.core.init_bricks.call(null,breakout.core.get_context.call(null));breakout.core.draw_everything.call(null,block_5723,bricks_5724);

//@ sourceMappingURL=core.js.map