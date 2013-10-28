goog.provide('breakout.core');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.Timer');
goog.require('goog.Timer');
goog.require('goog.dom');
goog.require('goog.dom');
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
breakout.core.draw_everything = (function draw_everything(p__6631,state){var vec__6642 = p__6631;var canvas = cljs.core.nth.call(null,vec__6642,0,null);var context = cljs.core.nth.call(null,vec__6642,1,null);var c_width = cljs.core.nth.call(null,vec__6642,2,null);var c_height = cljs.core.nth.call(null,vec__6642,3,null);var c = vec__6642;var vec__6643 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__6643,0,null);var block_y = cljs.core.nth.call(null,vec__6643,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__6644(s__6645){return (new cljs.core.LazySeq(null,(function (){var s__6645__$1 = s__6645;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6645__$1);if(temp__4092__auto__)
{var s__6645__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6645__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6645__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6647 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6646 = 0;while(true){
if((i__6646 < size__3638__auto__))
{var vec__6650 = cljs.core._nth.call(null,c__3637__auto__,i__6646);var brick_x = cljs.core.nth.call(null,vec__6650,0,null);var brick_y = cljs.core.nth.call(null,vec__6650,1,null);cljs.core.chunk_append.call(null,b__6647,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__6652 = (i__6646 + 1);
i__6646 = G__6652;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6647),iter__6644.call(null,cljs.core.chunk_rest.call(null,s__6645__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6647),null);
}
} else
{var vec__6651 = cljs.core.first.call(null,s__6645__$2);var brick_x = cljs.core.nth.call(null,vec__6651,0,null);var brick_y = cljs.core.nth.call(null,vec__6651,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__6644.call(null,cljs.core.rest.call(null,s__6645__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__6653){var vec__6661 = p__6653;var canvas = cljs.core.nth.call(null,vec__6661,0,null);var context = cljs.core.nth.call(null,vec__6661,1,null);var c_width = cljs.core.nth.call(null,vec__6661,2,null);var c_height = cljs.core.nth.call(null,vec__6661,3,null);var iter__3639__auto__ = (function iter__6662(s__6663){return (new cljs.core.LazySeq(null,(function (){var s__6663__$1 = s__6663;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6663__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__6663__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__6664(s__6665){return (new cljs.core.LazySeq(null,((function (s__6663__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__6665__$1 = s__6665;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6665__$1);if(temp__4092__auto____$1)
{var s__6665__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6665__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6665__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6667 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6666 = 0;while(true){
if((i__6666 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__6666);cljs.core.chunk_append.call(null,b__6667,cljs.core.vector.call(null,corner_x,corner_y));
{
var G__6668 = (i__6666 + 1);
i__6666 = G__6668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6667),iter__6664.call(null,cljs.core.chunk_rest.call(null,s__6665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6667),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__6665__$2);return cljs.core.cons.call(null,cljs.core.vector.call(null,corner_x,corner_y),iter__6664.call(null,cljs.core.rest.call(null,s__6665__$2)));
}
} else
{return null;
}
break;
}
});})(s__6663__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__6663__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__6662.call(null,cljs.core.rest.call(null,s__6663__$1)));
} else
{{
var G__6669 = cljs.core.rest.call(null,s__6663__$1);
s__6663__$1 = G__6669;
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
breakout.core.init_block = (function init_block(p__6670){var vec__6672 = p__6670;var canvas = cljs.core.nth.call(null,vec__6672,0,null);var context = cljs.core.nth.call(null,vec__6672,1,null);var c_width = cljs.core.nth.call(null,vec__6672,2,null);var c_height = cljs.core.nth.call(null,vec__6672,3,null);return cljs.core.vector.call(null,((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height));
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__6681(s__6682){return (new cljs.core.LazySeq(null,(function (){var s__6682__$1 = s__6682;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6682__$1);if(temp__4092__auto__)
{var s__6682__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6682__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__6682__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__6684 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__6683 = 0;while(true){
if((i__6683 < size__3638__auto__))
{var vec__6687 = cljs.core._nth.call(null,c__3637__auto__,i__6683);var x = cljs.core.nth.call(null,vec__6687,0,null);var y = cljs.core.nth.call(null,vec__6687,1,null);cljs.core.chunk_append.call(null,b__6684,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__6689 = (i__6683 + 1);
i__6683 = G__6689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6684),iter__6681.call(null,cljs.core.chunk_rest.call(null,s__6682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6684),null);
}
} else
{var vec__6688 = cljs.core.first.call(null,s__6682__$2);var x = cljs.core.nth.call(null,vec__6688,0,null);var y = cljs.core.nth.call(null,vec__6688,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__6681.call(null,cljs.core.rest.call(null,s__6682__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__6690,p__6691){var vec__6694 = p__6690;var block_x = cljs.core.nth.call(null,vec__6694,0,null);var block_y = cljs.core.nth.call(null,vec__6694,1,null);var vec__6695 = p__6691;var canvas = cljs.core.nth.call(null,vec__6695,0,null);var context = cljs.core.nth.call(null,vec__6695,1,null);var c_width = cljs.core.nth.call(null,vec__6695,2,null);var c_height = cljs.core.nth.call(null,vec__6695,3,null);var new_block_x = (block_x - 4);if((new_block_x >= 0))
{return cljs.core.vector.call(null,new_block_x,block_y);
} else
{return cljs.core.vector.call(null,0,block_y);
}
});
breakout.core.move_block_right = (function move_block_right(p__6696,p__6697){var vec__6700 = p__6696;var block_x = cljs.core.nth.call(null,vec__6700,0,null);var block_y = cljs.core.nth.call(null,vec__6700,1,null);var vec__6701 = p__6697;var canvas = cljs.core.nth.call(null,vec__6701,0,null);var context = cljs.core.nth.call(null,vec__6701,1,null);var c_width = cljs.core.nth.call(null,vec__6701,2,null);var c_height = cljs.core.nth.call(null,vec__6701,3,null);var new_block_x = (block_x + 4);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
{return cljs.core.vector.call(null,new_block_x,block_y);
} else
{return cljs.core.vector.call(null,bound,block_y);
}
});
breakout.core.get_new_block_coords = (function get_new_block_coords(block,c,e){if((39 === e.keyCode))
{return breakout.core.move_block_right.call(null,block,c);
} else
{if((37 === e.keyCode))
{return breakout.core.move_block_left.call(null,block,c);
} else
{return null;
}
}
});
breakout.core.move_block = (function move_block(state,c,e){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575)),c,e));
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),breakout.core.init_bricks.call(null,c)], true);
});
breakout.core.play_game = (function play_game(timer,state,c){breakout.core.log.call(null,"playing game");
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.log.call(null,"Hello World");
var vec__6703_6704 = breakout.core.get_context.call(null);var canvas_6705 = cljs.core.nth.call(null,vec__6703_6704,0,null);var context_6706 = cljs.core.nth.call(null,vec__6703_6704,1,null);var c_width_6707 = cljs.core.nth.call(null,vec__6703_6704,2,null);var c_height_6708 = cljs.core.nth.call(null,vec__6703_6704,3,null);var c_6709 = vec__6703_6704;var block_6710 = breakout.core.init_block.call(null,c_6709);var bricks_6711 = breakout.core.init_bricks.call(null,c_6709);var state_6712 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var timer_6713 = (new goog.Timer((1000 / 60)));cljs.core.swap_BANG_.call(null,state_6712,breakout.core.init_round,c_6709);
window.addEventListener("keydown",(function (p1__6702_SHARP_){return breakout.core.move_block.call(null,state_6712,c_6709,p1__6702_SHARP_);
}),false);
goog.events.listen(timer_6713,goog.Timer.TICK,(function (){return breakout.core.play_game.call(null,timer_6713,state_6712,c_6709);
}));

//@ sourceMappingURL=core.js.map