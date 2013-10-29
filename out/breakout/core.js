goog.provide('breakout.core');
goog.require('cljs.core');
breakout.core.block_width = 150;
breakout.core.block_height = 20;
breakout.core.brick_space = 3;
breakout.core.brick_width = 20;
breakout.core.brick_height = 10;
breakout.core.ball_radius = 15;
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.vector.call(null,canvas,context,canvas.width,canvas.height);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.draw_everything = (function draw_everything(p__5162,state){var vec__5174 = p__5162;var canvas = cljs.core.nth.call(null,vec__5174,0,null);var context = cljs.core.nth.call(null,vec__5174,1,null);var c_width = cljs.core.nth.call(null,vec__5174,2,null);var c_height = cljs.core.nth.call(null,vec__5174,3,null);var c = vec__5174;var vec__5175 = state.call(null,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292));var curr_block_x = cljs.core.nth.call(null,vec__5175,0,null);var curr_block_y = cljs.core.nth.call(null,vec__5175,1,null);var vec__5176 = state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__5176,0,null);var ball_y = cljs.core.nth.call(null,vec__5176,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(curr_block_x,curr_block_y,breakout.core.block_width,breakout.core.block_height);
context.beginPath();
context.arc(ball_x,ball_y,breakout.core.ball_radius,0,(2 * Math.PI),true);
context.fill();
context.closePath();
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5177(s__5178){return (new cljs.core.LazySeq(null,(function (){var s__5178__$1 = s__5178;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5178__$1);if(temp__4092__auto__)
{var s__5178__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5178__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5178__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5180 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5179 = 0;while(true){
if((i__5179 < size__3638__auto__))
{var vec__5183 = cljs.core._nth.call(null,c__3637__auto__,i__5179);var brick_x = cljs.core.nth.call(null,vec__5183,0,null);var brick_y = cljs.core.nth.call(null,vec__5183,1,null);cljs.core.chunk_append.call(null,b__5180,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__5185 = (i__5179 + 1);
i__5179 = G__5185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5180),iter__5177.call(null,cljs.core.chunk_rest.call(null,s__5178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5180),null);
}
} else
{var vec__5184 = cljs.core.first.call(null,s__5178__$2);var brick_x = cljs.core.nth.call(null,vec__5184,0,null);var brick_y = cljs.core.nth.call(null,vec__5184,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__5177.call(null,cljs.core.rest.call(null,s__5178__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__5186){var vec__5194 = p__5186;var canvas = cljs.core.nth.call(null,vec__5194,0,null);var context = cljs.core.nth.call(null,vec__5194,1,null);var c_width = cljs.core.nth.call(null,vec__5194,2,null);var c_height = cljs.core.nth.call(null,vec__5194,3,null);var iter__3639__auto__ = (function iter__5195(s__5196){return (new cljs.core.LazySeq(null,(function (){var s__5196__$1 = s__5196;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5196__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__5196__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__5197(s__5198){return (new cljs.core.LazySeq(null,((function (s__5196__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__5198__$1 = s__5198;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5198__$1);if(temp__4092__auto____$1)
{var s__5198__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5198__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5198__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5200 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5199 = 0;while(true){
if((i__5199 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__5199);cljs.core.chunk_append.call(null,b__5200,cljs.core.vector.call(null,corner_x,corner_y));
{
var G__5201 = (i__5199 + 1);
i__5199 = G__5201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5200),iter__5197.call(null,cljs.core.chunk_rest.call(null,s__5198__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5200),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__5198__$2);return cljs.core.cons.call(null,cljs.core.vector.call(null,corner_x,corner_y),iter__5197.call(null,cljs.core.rest.call(null,s__5198__$2)));
}
} else
{return null;
}
break;
}
});})(s__5196__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__5196__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__5195.call(null,cljs.core.rest.call(null,s__5196__$1)));
} else
{{
var G__5202 = cljs.core.rest.call(null,s__5196__$1);
s__5196__$1 = G__5202;
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
breakout.core.init_block = (function init_block(p__5203){var vec__5205 = p__5203;var canvas = cljs.core.nth.call(null,vec__5205,0,null);var context = cljs.core.nth.call(null,vec__5205,1,null);var c_width = cljs.core.nth.call(null,vec__5205,2,null);var c_height = cljs.core.nth.call(null,vec__5205,3,null);return cljs.core.vector.call(null,((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height));
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5214(s__5215){return (new cljs.core.LazySeq(null,(function (){var s__5215__$1 = s__5215;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5215__$1);if(temp__4092__auto__)
{var s__5215__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5215__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5215__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5217 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5216 = 0;while(true){
if((i__5216 < size__3638__auto__))
{var vec__5220 = cljs.core._nth.call(null,c__3637__auto__,i__5216);var x = cljs.core.nth.call(null,vec__5220,0,null);var y = cljs.core.nth.call(null,vec__5220,1,null);cljs.core.chunk_append.call(null,b__5217,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__5222 = (i__5216 + 1);
i__5216 = G__5222;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5217),iter__5214.call(null,cljs.core.chunk_rest.call(null,s__5215__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5217),null);
}
} else
{var vec__5221 = cljs.core.first.call(null,s__5215__$2);var x = cljs.core.nth.call(null,vec__5221,0,null);var y = cljs.core.nth.call(null,vec__5221,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__5214.call(null,cljs.core.rest.call(null,s__5215__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__5223,p__5224){var vec__5227 = p__5223;var block_x = cljs.core.nth.call(null,vec__5227,0,null);var block_y = cljs.core.nth.call(null,vec__5227,1,null);var vec__5228 = p__5224;var canvas = cljs.core.nth.call(null,vec__5228,0,null);var context = cljs.core.nth.call(null,vec__5228,1,null);var c_width = cljs.core.nth.call(null,vec__5228,2,null);var c_height = cljs.core.nth.call(null,vec__5228,3,null);var new_block_x = (block_x - 4);if((new_block_x >= 0))
{return cljs.core.vector.call(null,new_block_x,block_y);
} else
{return cljs.core.vector.call(null,0,block_y);
}
});
breakout.core.move_block_right = (function move_block_right(p__5229,p__5230){var vec__5233 = p__5229;var block_x = cljs.core.nth.call(null,vec__5233,0,null);var block_y = cljs.core.nth.call(null,vec__5233,1,null);var vec__5234 = p__5230;var canvas = cljs.core.nth.call(null,vec__5234,0,null);var context = cljs.core.nth.call(null,vec__5234,1,null);var c_width = cljs.core.nth.call(null,vec__5234,2,null);var c_height = cljs.core.nth.call(null,vec__5234,3,null);var new_block_x = (block_x + 4);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
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
breakout.core.move_block = (function move_block(state,c,e){var vec__5236 = breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292)),c,e);var new_block_x = cljs.core.nth.call(null,vec__5236,0,null);var new_block_y = cljs.core.nth.call(null,vec__5236,1,null);var new_block_coords = vec__5236;return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"curr-block","curr-block",2605360292),new_block_coords);
});
breakout.core.init_ball = (function init_ball(p__5237){var vec__5239 = p__5237;var canvas = cljs.core.nth.call(null,vec__5239,0,null);var context = cljs.core.nth.call(null,vec__5239,1,null);var c_width = cljs.core.nth.call(null,vec__5239,2,null);var c_height = cljs.core.nth.call(null,vec__5239,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.vector.call(null,center_x,center_y);
});
breakout.core.move_ball = (function move_ball(state){var dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));var vec__5241 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__5241,0,null);var ball_y = cljs.core.nth.call(null,vec__5241,1,null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"ball","ball",1016920433),cljs.core.vector.call(null,(dx + ball_x),(dy + ball_y)));
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"curr-block","curr-block",2605360292),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),breakout.core.init_bricks.call(null,c),new cljs.core.Keyword(null,"ball","ball",1016920433),breakout.core.init_ball.call(null,c),new cljs.core.Keyword(null,"dx","dx",1013907462),0.5,new cljs.core.Keyword(null,"dy","dy",1013907463),1], true);
});
breakout.core.game_loop = (function game_loop(state,p__5242){var vec__5244 = p__5242;var canvas = cljs.core.nth.call(null,vec__5244,0,null);var context = cljs.core.nth.call(null,vec__5244,1,null);var c_width = cljs.core.nth.call(null,vec__5244,2,null);var c_height = cljs.core.nth.call(null,vec__5244,3,null);var c = vec__5244;setTimeout((function (){return game_loop.call(null,state,c);
}),10);
breakout.core.move_ball.call(null,state);
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__5247 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__5247,0,null);var context = cljs.core.nth.call(null,vec__5247,1,null);var c_width = cljs.core.nth.call(null,vec__5247,2,null);var c_height = cljs.core.nth.call(null,vec__5247,3,null);var c = vec__5247;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
window.addEventListener("keydown",(function (p1__5245_SHARP_){return breakout.core.move_block.call(null,state,c,p1__5245_SHARP_);
}),false);
return breakout.core.game_loop.call(null,state,c);
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map