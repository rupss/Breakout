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
breakout.core.draw_everything = (function draw_everything(p__7774,state){var vec__7786 = p__7774;var canvas = cljs.core.nth.call(null,vec__7786,0,null);var context = cljs.core.nth.call(null,vec__7786,1,null);var c_width = cljs.core.nth.call(null,vec__7786,2,null);var c_height = cljs.core.nth.call(null,vec__7786,3,null);var c = vec__7786;var vec__7787 = state.call(null,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292));var curr_block_x = cljs.core.nth.call(null,vec__7787,0,null);var curr_block_y = cljs.core.nth.call(null,vec__7787,1,null);var vec__7788 = state.call(null,new cljs.core.Keyword(null,"old-block","old-block",1433075929));var old_block_x = cljs.core.nth.call(null,vec__7788,0,null);var old_block_y = cljs.core.nth.call(null,vec__7788,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));if((!((old_block_x == null))) && (!((old_block_y == null))))
{context.clearRect(old_block_x,old_block_y,breakout.core.block_width,breakout.core.block_height);
} else
{}
context.fillRect(curr_block_x,curr_block_y,breakout.core.block_width,breakout.core.block_height);
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__7789(s__7790){return (new cljs.core.LazySeq(null,(function (){var s__7790__$1 = s__7790;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7790__$1);if(temp__4092__auto__)
{var s__7790__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7790__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__7790__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__7792 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__7791 = 0;while(true){
if((i__7791 < size__3638__auto__))
{var vec__7795 = cljs.core._nth.call(null,c__3637__auto__,i__7791);var brick_x = cljs.core.nth.call(null,vec__7795,0,null);var brick_y = cljs.core.nth.call(null,vec__7795,1,null);cljs.core.chunk_append.call(null,b__7792,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__7797 = (i__7791 + 1);
i__7791 = G__7797;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7792),iter__7789.call(null,cljs.core.chunk_rest.call(null,s__7790__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7792),null);
}
} else
{var vec__7796 = cljs.core.first.call(null,s__7790__$2);var brick_x = cljs.core.nth.call(null,vec__7796,0,null);var brick_y = cljs.core.nth.call(null,vec__7796,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__7789.call(null,cljs.core.rest.call(null,s__7790__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__7798){var vec__7806 = p__7798;var canvas = cljs.core.nth.call(null,vec__7806,0,null);var context = cljs.core.nth.call(null,vec__7806,1,null);var c_width = cljs.core.nth.call(null,vec__7806,2,null);var c_height = cljs.core.nth.call(null,vec__7806,3,null);var iter__3639__auto__ = (function iter__7807(s__7808){return (new cljs.core.LazySeq(null,(function (){var s__7808__$1 = s__7808;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7808__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__7808__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__7809(s__7810){return (new cljs.core.LazySeq(null,((function (s__7808__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7810__$1 = s__7810;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7810__$1);if(temp__4092__auto____$1)
{var s__7810__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7810__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__7810__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__7812 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__7811 = 0;while(true){
if((i__7811 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__7811);cljs.core.chunk_append.call(null,b__7812,cljs.core.vector.call(null,corner_x,corner_y));
{
var G__7813 = (i__7811 + 1);
i__7811 = G__7813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7812),iter__7809.call(null,cljs.core.chunk_rest.call(null,s__7810__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7812),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__7810__$2);return cljs.core.cons.call(null,cljs.core.vector.call(null,corner_x,corner_y),iter__7809.call(null,cljs.core.rest.call(null,s__7810__$2)));
}
} else
{return null;
}
break;
}
});})(s__7808__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7808__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__7807.call(null,cljs.core.rest.call(null,s__7808__$1)));
} else
{{
var G__7814 = cljs.core.rest.call(null,s__7808__$1);
s__7808__$1 = G__7814;
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
breakout.core.init_block = (function init_block(p__7815){var vec__7817 = p__7815;var canvas = cljs.core.nth.call(null,vec__7817,0,null);var context = cljs.core.nth.call(null,vec__7817,1,null);var c_width = cljs.core.nth.call(null,vec__7817,2,null);var c_height = cljs.core.nth.call(null,vec__7817,3,null);return cljs.core.vector.call(null,((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height));
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__7826(s__7827){return (new cljs.core.LazySeq(null,(function (){var s__7827__$1 = s__7827;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7827__$1);if(temp__4092__auto__)
{var s__7827__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7827__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__7827__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__7829 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__7828 = 0;while(true){
if((i__7828 < size__3638__auto__))
{var vec__7832 = cljs.core._nth.call(null,c__3637__auto__,i__7828);var x = cljs.core.nth.call(null,vec__7832,0,null);var y = cljs.core.nth.call(null,vec__7832,1,null);cljs.core.chunk_append.call(null,b__7829,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__7834 = (i__7828 + 1);
i__7828 = G__7834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7829),iter__7826.call(null,cljs.core.chunk_rest.call(null,s__7827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7829),null);
}
} else
{var vec__7833 = cljs.core.first.call(null,s__7827__$2);var x = cljs.core.nth.call(null,vec__7833,0,null);var y = cljs.core.nth.call(null,vec__7833,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__7826.call(null,cljs.core.rest.call(null,s__7827__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__7835,p__7836){var vec__7839 = p__7835;var block_x = cljs.core.nth.call(null,vec__7839,0,null);var block_y = cljs.core.nth.call(null,vec__7839,1,null);var vec__7840 = p__7836;var canvas = cljs.core.nth.call(null,vec__7840,0,null);var context = cljs.core.nth.call(null,vec__7840,1,null);var c_width = cljs.core.nth.call(null,vec__7840,2,null);var c_height = cljs.core.nth.call(null,vec__7840,3,null);var new_block_x = (block_x - 4);if((new_block_x >= 0))
{return cljs.core.vector.call(null,new_block_x,block_y);
} else
{return cljs.core.vector.call(null,0,block_y);
}
});
breakout.core.move_block_right = (function move_block_right(p__7841,p__7842){var vec__7845 = p__7841;var block_x = cljs.core.nth.call(null,vec__7845,0,null);var block_y = cljs.core.nth.call(null,vec__7845,1,null);var vec__7846 = p__7842;var canvas = cljs.core.nth.call(null,vec__7846,0,null);var context = cljs.core.nth.call(null,vec__7846,1,null);var c_width = cljs.core.nth.call(null,vec__7846,2,null);var c_height = cljs.core.nth.call(null,vec__7846,3,null);var new_block_x = (block_x + 4);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
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
breakout.core.move_block = (function move_block(state,c,e){var vec__7848 = breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292)),c,e);var new_block_x = cljs.core.nth.call(null,vec__7848,0,null);var new_block_y = cljs.core.nth.call(null,vec__7848,1,null);var new_block_coords = vec__7848;var old_block_coords = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292));cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292),new_block_coords);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"old-block","old-block",1433075929),old_block_coords);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"curr-block","curr-block",2605360292),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"old-block","old-block",1433075929),cljs.core.vector.call(null,null,null),new cljs.core.Keyword(null,"bricks","bricks",3928069060),breakout.core.init_bricks.call(null,c)], true);
});
breakout.core.game_loop = (function game_loop(state,c){setTimeout((function (){return game_loop.call(null,state,c);
}),10);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__7851 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__7851,0,null);var context = cljs.core.nth.call(null,vec__7851,1,null);var c_width = cljs.core.nth.call(null,vec__7851,2,null);var c_height = cljs.core.nth.call(null,vec__7851,3,null);var c = vec__7851;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
window.addEventListener("keydown",(function (p1__7849_SHARP_){return breakout.core.move_block.call(null,state,c,p1__7849_SHARP_);
}),false);
return breakout.core.game_loop.call(null,state,c);
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map