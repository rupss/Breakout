goog.provide('breakout.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.set');
breakout.core.block_width = 500;
breakout.core.block_height = 20;
breakout.core.brick_space = 3;
breakout.core.brick_width = 20;
breakout.core.brick_height = 10;
breakout.core.ball_radius = 15;
breakout.core.block_movement = 20;
breakout.core.tick_channel = cljs.core.async.chan.call(null);
breakout.core.draw_channel = cljs.core.async.chan.call(null,1000);
breakout.core.draw_mult = cljs.core.async.mult.call(null,breakout.core.draw_channel);
breakout.core.draw_tap = cljs.core.async.tap.call(null,breakout.core.draw_mult,cljs.core.async.chan.call(null,1000));
breakout.core.game_tap = cljs.core.async.tap.call(null,breakout.core.draw_mult,cljs.core.async.chan.call(null,1000));
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.print_first_ball_coords = (function print_first_ball_coords(new_state){breakout.core.log.call(null,cljs.core.first.call(null,cljs.core.first.call(null,new_state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278)))));
return breakout.core.log.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,new_state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278))),1));
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.PersistentVector.fromArray([canvas,context,canvas.width,canvas.height], true);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16105(s__16106){return (new cljs.core.LazySeq(null,(function (){var s__16106__$1 = s__16106;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16106__$1);if(temp__4092__auto__)
{var s__16106__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16106__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16106__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16108 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16107 = 0;while(true){
if((i__16107 < size__3638__auto__))
{var vec__16111 = cljs.core._nth.call(null,c__3637__auto__,i__16107);var x = cljs.core.nth.call(null,vec__16111,0,null);var y = cljs.core.nth.call(null,vec__16111,1,null);var dx = cljs.core.nth.call(null,vec__16111,2,null);var dy = cljs.core.nth.call(null,vec__16111,3,null);cljs.core.chunk_append.call(null,b__16108,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__16113 = (i__16107 + 1);
i__16107 = G__16113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16108),iter__16105.call(null,cljs.core.chunk_rest.call(null,s__16106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16108),null);
}
} else
{var vec__16112 = cljs.core.first.call(null,s__16106__$2);var x = cljs.core.nth.call(null,vec__16112,0,null);var y = cljs.core.nth.call(null,vec__16112,1,null);var dx = cljs.core.nth.call(null,vec__16112,2,null);var dy = cljs.core.nth.call(null,vec__16112,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__16105.call(null,cljs.core.rest.call(null,s__16106__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__16114,p__16115,color,radius){var vec__16118 = p__16114;var ball_x = cljs.core.nth.call(null,vec__16118,0,null);var ball_y = cljs.core.nth.call(null,vec__16118,1,null);var dx = cljs.core.nth.call(null,vec__16118,2,null);var dy = cljs.core.nth.call(null,vec__16118,3,null);var vec__16119 = p__16115;var canvas = cljs.core.nth.call(null,vec__16119,0,null);var context = cljs.core.nth.call(null,vec__16119,1,null);var c_width = cljs.core.nth.call(null,vec__16119,2,null);var c_height = cljs.core.nth.call(null,vec__16119,3,null);var c = vec__16119;context.beginPath();
context.arc(ball_x,ball_y,radius,0,(2 * Math.PI),true);
context.fillStyle = color;
context.fill();
return context.closePath();
});
breakout.core.draw_ball = (function draw_ball(ball,c,color){if(cljs.core._EQ_.call(null,color,"white"))
{return breakout.core.draw_sized_circle.call(null,ball,c,color,breakout.core.ball_radius);
} else
{if(cljs.core._EQ_.call(null,color,"black"))
{return breakout.core.draw_sized_circle.call(null,ball,c,color,breakout.core.ball_radius);
} else
{return null;
}
}
});
breakout.core.draw_brick = (function draw_brick(p__16120,p__16121,color){var vec__16124 = p__16120;var brick_x = cljs.core.nth.call(null,vec__16124,0,null);var brick_y = cljs.core.nth.call(null,vec__16124,1,null);var vec__16125 = p__16121;var canvas = cljs.core.nth.call(null,vec__16125,0,null);var context = cljs.core.nth.call(null,vec__16125,1,null);var c_width = cljs.core.nth.call(null,vec__16125,2,null);var c_height = cljs.core.nth.call(null,vec__16125,3,null);var c = vec__16125;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__16126,p__16127,color){var vec__16130 = p__16126;var brick_x = cljs.core.nth.call(null,vec__16130,0,null);var brick_y = cljs.core.nth.call(null,vec__16130,1,null);var vec__16131 = p__16127;var canvas = cljs.core.nth.call(null,vec__16131,0,null);var context = cljs.core.nth.call(null,vec__16131,1,null);var c_width = cljs.core.nth.call(null,vec__16131,2,null);var c_height = cljs.core.nth.call(null,vec__16131,3,null);var c = vec__16131;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(state){var vec__16146 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__16146,0,null);var context = cljs.core.nth.call(null,vec__16146,1,null);var c_width = cljs.core.nth.call(null,vec__16146,2,null);var c_height = cljs.core.nth.call(null,vec__16146,3,null);var c = vec__16146;var vec__16147 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__16147,0,null);var block_y = cljs.core.nth.call(null,vec__16147,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.clearRect(0,0,c_width,c_height);
context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16148(s__16149){return (new cljs.core.LazySeq(null,(function (){var s__16149__$1 = s__16149;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16149__$1);if(temp__4092__auto__)
{var s__16149__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16149__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16149__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16151 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16150 = 0;while(true){
if((i__16150 < size__3638__auto__))
{var vec__16154 = cljs.core._nth.call(null,c__3637__auto__,i__16150);var brick_x = cljs.core.nth.call(null,vec__16154,0,null);var brick_y = cljs.core.nth.call(null,vec__16154,1,null);var brick = vec__16154;cljs.core.chunk_append.call(null,b__16151,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__16160 = (i__16150 + 1);
i__16150 = G__16160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16151),iter__16148.call(null,cljs.core.chunk_rest.call(null,s__16149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16151),null);
}
} else
{var vec__16155 = cljs.core.first.call(null,s__16149__$2);var brick_x = cljs.core.nth.call(null,vec__16155,0,null);var brick_y = cljs.core.nth.call(null,vec__16155,1,null);var brick = vec__16155;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__16148.call(null,cljs.core.rest.call(null,s__16149__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16156(s__16157){return (new cljs.core.LazySeq(null,(function (){var s__16157__$1 = s__16157;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16157__$1);if(temp__4092__auto__)
{var s__16157__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16157__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16157__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16159 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16158 = 0;while(true){
if((i__16158 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__16158);cljs.core.chunk_append.call(null,b__16159,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__16161 = (i__16158 + 1);
i__16158 = G__16161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),iter__16156.call(null,cljs.core.chunk_rest.call(null,s__16157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),null);
}
} else
{var ball = cljs.core.first.call(null,s__16157__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__16156.call(null,cljs.core.rest.call(null,s__16157__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,balls);
})());
});
breakout.core.init_bricks = (function init_bricks(p__16162){var vec__16170 = p__16162;var canvas = cljs.core.nth.call(null,vec__16170,0,null);var context = cljs.core.nth.call(null,vec__16170,1,null);var c_width = cljs.core.nth.call(null,vec__16170,2,null);var c_height = cljs.core.nth.call(null,vec__16170,3,null);var iter__3639__auto__ = (function iter__16171(s__16172){return (new cljs.core.LazySeq(null,(function (){var s__16172__$1 = s__16172;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16172__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__16172__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__16173(s__16174){return (new cljs.core.LazySeq(null,((function (s__16172__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__16174__$1 = s__16174;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16174__$1);if(temp__4092__auto____$1)
{var s__16174__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16174__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16174__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16176 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16175 = 0;while(true){
if((i__16175 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__16175);cljs.core.chunk_append.call(null,b__16176,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__16177 = (i__16175 + 1);
i__16175 = G__16177;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16176),iter__16173.call(null,cljs.core.chunk_rest.call(null,s__16174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16176),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__16174__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__16173.call(null,cljs.core.rest.call(null,s__16174__$2)));
}
} else
{return null;
}
break;
}
});})(s__16172__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__16172__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__16171.call(null,cljs.core.rest.call(null,s__16172__$1)));
} else
{{
var G__16178 = cljs.core.rest.call(null,s__16172__$1);
s__16172__$1 = G__16178;
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
breakout.core.init_block = (function init_block(p__16179){var vec__16181 = p__16179;var canvas = cljs.core.nth.call(null,vec__16181,0,null);var context = cljs.core.nth.call(null,vec__16181,1,null);var c_width = cljs.core.nth.call(null,vec__16181,2,null);var c_height = cljs.core.nth.call(null,vec__16181,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__16182){var vec__16184 = p__16182;var canvas = cljs.core.nth.call(null,vec__16184,0,null);var context = cljs.core.nth.call(null,vec__16184,1,null);var c_width = cljs.core.nth.call(null,vec__16184,2,null);var c_height = cljs.core.nth.call(null,vec__16184,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,1.2,1.5], true)], true);
});
breakout.core.init_round = (function init_round(c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.get_curr_time = (function get_curr_time(){return Date.now();
});
breakout.core.move_ball = (function move_ball(state,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__16196 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__16196,0,null);var old_ball_y = cljs.core.nth.call(null,vec__16196,1,null);var old_dx = cljs.core.nth.call(null,vec__16196,2,null);var old_dy = cljs.core.nth.call(null,vec__16196,3,null);var old_ball = vec__16196;var curr_time = breakout.core.get_curr_time.call(null);var new_ball = cljs.core.PersistentVector.fromArray([(old_dx + old_ball_x),(old_dy + old_ball_y),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16201){var state_val_16202 = (state_16201[1]);if((state_val_16202 === 2))
{var inst_16198 = (state_16201[2]);var inst_16199 = breakout.core.log.call(null,"move ball - put state on channel");var state_16201__$1 = (function (){var statearr_16203 = state_16201;(statearr_16203[5] = inst_16198);
return statearr_16203;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16201__$1,inst_16199);
} else
{if((state_val_16202 === 1))
{var state_16201__$1 = state_16201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16201__$1,2,breakout.core.draw_channel,new_state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16205 = (new Array(6));(statearr_16205[0] = state_machine__5176__auto__);
(statearr_16205[1] = 1);
return statearr_16205;
});
var state_machine__5176__auto____1 = (function (state_16201){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16201);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16201){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16206 = f__5226__auto__.call(null);(statearr_16206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.get_four_points = (function get_four_points(p__16207){var vec__16209 = p__16207;var ball_x = cljs.core.nth.call(null,vec__16209,0,null);var ball_y = cljs.core.nth.call(null,vec__16209,1,null);var dx = cljs.core.nth.call(null,vec__16209,2,null);var dy = cljs.core.nth.call(null,vec__16209,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__16210,p__16211,rect_width,rect_height){var vec__16214 = p__16210;var x = cljs.core.nth.call(null,vec__16214,0,null);var y = cljs.core.nth.call(null,vec__16214,1,null);var vec__16215 = p__16211;var rect_x = cljs.core.nth.call(null,vec__16215,0,null);var rect_y = cljs.core.nth.call(null,vec__16215,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16216_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__16216_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__16217,i,direction_to_reverse){var vec__16219 = p__16217;var ball_x = cljs.core.nth.call(null,vec__16219,0,null);var ball_y = cljs.core.nth.call(null,vec__16219,1,null);var dx = cljs.core.nth.call(null,vec__16219,2,null);var dy = cljs.core.nth.call(null,vec__16219,3,null);var ball = vec__16219;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__16231 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__16231,0,null);var ball_y = cljs.core.nth.call(null,vec__16231,1,null);var old_dx = cljs.core.nth.call(null,vec__16231,2,null);var old_dy = cljs.core.nth.call(null,vec__16231,3,null);var ball = vec__16231;breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16237){var state_val_16238 = (state_16237[1]);if((state_val_16238 === 2))
{var inst_16235 = (state_16237[2]);var state_16237__$1 = state_16237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16237__$1,inst_16235);
} else
{if((state_val_16238 === 1))
{var inst_16232 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_16233 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_16232);var state_16237__$1 = state_16237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16237__$1,2,breakout.core.draw_channel,inst_16233);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16240 = (new Array(5));(statearr_16240[0] = state_machine__5176__auto__);
(statearr_16240[1] = 1);
return statearr_16240;
});
var state_machine__5176__auto____1 = (function (state_16237){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16237);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16237){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16241 = f__5226__auto__.call(null);(statearr_16241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__16242_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__16242_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{breakout.core.log.call(null,"HIT");
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16259(s__16260){return (new cljs.core.LazySeq(null,(function (){var s__16260__$1 = s__16260;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16260__$1);if(temp__4092__auto__)
{var s__16260__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16260__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16260__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16262 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16261 = 0;while(true){
if((i__16261 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__16261);cljs.core.chunk_append.call(null,b__16262,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__16275 = (i__16261 + 1);
i__16261 = G__16275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16262),iter__16259.call(null,cljs.core.chunk_rest.call(null,s__16260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16262),null);
}
} else
{var brick = cljs.core.first.call(null,s__16260__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__16259.call(null,cljs.core.rest.call(null,s__16260__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,collided_bricks);
})());
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16270){var state_val_16271 = (state_16270[1]);if((state_val_16271 === 2))
{var inst_16268 = (state_16270[2]);var state_16270__$1 = state_16270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16270__$1,inst_16268);
} else
{if((state_val_16271 === 1))
{var inst_16263 = cljs.core.set.call(null,collided_bricks);var inst_16264 = clojure.set.difference.call(null,all_bricks,inst_16263);var inst_16265 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_16266 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bricks","bricks",3928069060),inst_16264,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_16265);var state_16270__$1 = state_16270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16270__$1,2,breakout.core.draw_channel,inst_16266);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16273 = (new Array(5));(statearr_16273[0] = state_machine__5176__auto__);
(statearr_16273[1] = 1);
return statearr_16273;
});
var state_machine__5176__auto____1 = (function (state_16270){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16270);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16270){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16274 = f__5226__auto__.call(null);(statearr_16274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__16276,c_width){var vec__16278 = p__16276;var x = cljs.core.nth.call(null,vec__16278,0,null);var y = cljs.core.nth.call(null,vec__16278,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16279_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__16279_SHARP_,c_width);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16295){var state_val_16296 = (state_16295[1]);if((state_val_16296 === 2))
{var inst_16293 = (state_16295[2]);var state_16295__$1 = state_16295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16295__$1,inst_16293);
} else
{if((state_val_16296 === 1))
{var inst_16290 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462));var inst_16291 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_16290);var state_16295__$1 = state_16295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16295__$1,2,breakout.core.draw_channel,inst_16291);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16298 = (new Array(5));(statearr_16298[0] = state_machine__5176__auto__);
(statearr_16298[1] = 1);
return statearr_16298;
});
var state_machine__5176__auto____1 = (function (state_16295){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16295);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16295){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16299 = f__5226__auto__.call(null);(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.hit_top_wall_QMARK_ = (function hit_top_wall_QMARK_(p__16300){var vec__16302 = p__16300;var x = cljs.core.nth.call(null,vec__16302,0,null);var y = cljs.core.nth.call(null,vec__16302,1,null);return (y <= 0);
});
breakout.core.check_top_wall_collision = (function check_top_wall_collision(state,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16303_SHARP_){return breakout.core.hit_top_wall_QMARK_.call(null,p1__16303_SHARP_);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16319){var state_val_16320 = (state_16319[1]);if((state_val_16320 === 2))
{var inst_16317 = (state_16319[2]);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16319__$1,inst_16317);
} else
{if((state_val_16320 === 1))
{var inst_16314 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_16315 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_16314);var state_16319__$1 = state_16319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16319__$1,2,breakout.core.draw_channel,inst_16315);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16322 = (new Array(5));(statearr_16322[0] = state_machine__5176__auto__);
(statearr_16322[1] = 1);
return statearr_16322;
});
var state_machine__5176__auto____1 = (function (state_16319){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16319){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16323 = f__5226__auto__.call(null);(statearr_16323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__16324){var vec__16326 = p__16324;var canvas = cljs.core.nth.call(null,vec__16326,0,null);var context = cljs.core.nth.call(null,vec__16326,1,null);var c_width = cljs.core.nth.call(null,vec__16326,2,null);var c_height = cljs.core.nth.call(null,vec__16326,3,null);var c = vec__16326;return breakout.core.check_ball_block_collision.call(null,state,i);
});
breakout.core.tick_one_ball = (function tick_one_ball(c,i){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16347){var state_val_16348 = (state_16347[1]);if((state_val_16348 === 3))
{var inst_16344 = (state_16347[2]);var inst_16345 = breakout.core.check_collisions.call(null,inst_16344,i,c);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16347__$1,inst_16345);
} else
{if((state_val_16348 === 2))
{var inst_16341 = (state_16347[2]);var inst_16342 = breakout.core.move_ball.call(null,inst_16341,i);var state_16347__$1 = (function (){var statearr_16349 = state_16347;(statearr_16349[5] = inst_16342);
return statearr_16349;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16347__$1,3,breakout.core.game_tap);
} else
{if((state_val_16348 === 1))
{var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16347__$1,2,breakout.core.game_tap);
} else
{return null;
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16351 = (new Array(6));(statearr_16351[0] = state_machine__5176__auto__);
(statearr_16351[1] = 1);
return statearr_16351;
});
var state_machine__5176__auto____1 = (function (state_16347){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16347){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16352 = f__5226__auto__.call(null);(statearr_16352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.game = (function game(p__16353,num_balls){var vec__16359 = p__16353;var canvas = cljs.core.nth.call(null,vec__16359,0,null);var context = cljs.core.nth.call(null,vec__16359,1,null);var c_width = cljs.core.nth.call(null,vec__16359,2,null);var c_height = cljs.core.nth.call(null,vec__16359,3,null);var c = vec__16359;return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16360(s__16361){return (new cljs.core.LazySeq(null,(function (){var s__16361__$1 = s__16361;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16361__$1);if(temp__4092__auto__)
{var s__16361__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16361__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16361__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16363 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16362 = 0;while(true){
if((i__16362 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__16362);cljs.core.chunk_append.call(null,b__16363,breakout.core.tick_one_ball.call(null,c,i));
{
var G__16364 = (i__16362 + 1);
i__16362 = G__16364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16363),iter__16360.call(null,cljs.core.chunk_rest.call(null,s__16361__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16363),null);
}
} else
{var i = cljs.core.first.call(null,s__16361__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,c,i),iter__16360.call(null,cljs.core.rest.call(null,s__16361__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,cljs.core.range.call(null,num_balls));
})());
});
breakout.core.draw_looper = (function draw_looper(){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16403){var state_val_16404 = (state_16403[1]);if((state_val_16404 === 7))
{var inst_16393 = (state_16403[2]);var inst_16394 = breakout.core.draw_everything.call(null,inst_16393);var inst_16395 = breakout.core.log.call(null,"drew everything - fn");var state_16403__$1 = (function (){var statearr_16405 = state_16403;(statearr_16405[5] = inst_16395);
(statearr_16405[6] = inst_16394);
return statearr_16405;
})();var statearr_16406_16415 = state_16403__$1;(statearr_16406_16415[2] = null);
(statearr_16406_16415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16404 === 6))
{var inst_16399 = (state_16403[2]);var state_16403__$1 = state_16403;var statearr_16407_16416 = state_16403__$1;(statearr_16407_16416[2] = inst_16399);
(statearr_16407_16416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16404 === 5))
{var state_16403__$1 = state_16403;var statearr_16408_16417 = state_16403__$1;(statearr_16408_16417[2] = null);
(statearr_16408_16417[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16404 === 4))
{var state_16403__$1 = state_16403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16403__$1,7,breakout.core.draw_tap);
} else
{if((state_val_16404 === 3))
{var inst_16401 = (state_16403[2]);var state_16403__$1 = state_16403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16403__$1,inst_16401);
} else
{if((state_val_16404 === 2))
{var state_16403__$1 = state_16403;if(true)
{var statearr_16409_16418 = state_16403__$1;(statearr_16409_16418[1] = 4);
} else
{var statearr_16410_16419 = state_16403__$1;(statearr_16410_16419[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16404 === 1))
{var state_16403__$1 = state_16403;var statearr_16411_16420 = state_16403__$1;(statearr_16411_16420[2] = null);
(statearr_16411_16420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16413 = (new Array(7));(statearr_16413[0] = state_machine__5176__auto__);
(statearr_16413[1] = 1);
return statearr_16413;
});
var state_machine__5176__auto____1 = (function (state_16403){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16403){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16414 = f__5226__auto__.call(null);(statearr_16414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.draw_looper.call(null);
var vec__16421_16456 = breakout.core.get_context.call(null);var canvas_16457 = cljs.core.nth.call(null,vec__16421_16456,0,null);var context_16458 = cljs.core.nth.call(null,vec__16421_16456,1,null);var c_width_16459 = cljs.core.nth.call(null,vec__16421_16456,2,null);var c_height_16460 = cljs.core.nth.call(null,vec__16421_16456,3,null);var c_16461 = vec__16421_16456;var init_state_16462 = breakout.core.init_round.call(null,c_16461);var c__5225__auto___16463 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16442){var state_val_16443 = (state_16442[1]);if((state_val_16443 === 8))
{var inst_16424 = (state_16442[5]);var inst_16433 = (state_16442[2]);var inst_16434 = (inst_16424 + 1);var inst_16424__$1 = inst_16434;var state_16442__$1 = (function (){var statearr_16444 = state_16442;(statearr_16444[6] = inst_16433);
(statearr_16444[5] = inst_16424__$1);
return statearr_16444;
})();var statearr_16445_16464 = state_16442__$1;(statearr_16445_16464[2] = null);
(statearr_16445_16464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 7))
{var inst_16438 = (state_16442[2]);var state_16442__$1 = state_16442;var statearr_16446_16465 = state_16442__$1;(statearr_16446_16465[2] = inst_16438);
(statearr_16446_16465[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 6))
{var state_16442__$1 = state_16442;var statearr_16447_16466 = state_16442__$1;(statearr_16447_16466[2] = null);
(statearr_16447_16466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 5))
{var inst_16428 = new cljs.core.Keyword(null,"balls","balls",1107406278).cljs$core$IFn$_invoke$arity$1(init_state_16462);var inst_16429 = cljs.core.count.call(null,inst_16428);var inst_16430 = breakout.core.game.call(null,c_16461,inst_16429);var inst_16431 = cljs.core.async.timeout.call(null,10);var state_16442__$1 = (function (){var statearr_16448 = state_16442;(statearr_16448[7] = inst_16430);
return statearr_16448;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16442__$1,8,inst_16431);
} else
{if((state_val_16443 === 4))
{var inst_16440 = (state_16442[2]);var state_16442__$1 = state_16442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16442__$1,inst_16440);
} else
{if((state_val_16443 === 3))
{var inst_16424 = (state_16442[5]);var inst_16426 = (inst_16424 < 100);var state_16442__$1 = state_16442;if(cljs.core.truth_(inst_16426))
{var statearr_16449_16467 = state_16442__$1;(statearr_16449_16467[1] = 5);
} else
{var statearr_16450_16468 = state_16442__$1;(statearr_16450_16468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 2))
{var inst_16423 = (state_16442[2]);var inst_16424 = 0;var state_16442__$1 = (function (){var statearr_16451 = state_16442;(statearr_16451[8] = inst_16423);
(statearr_16451[5] = inst_16424);
return statearr_16451;
})();var statearr_16452_16469 = state_16442__$1;(statearr_16452_16469[2] = null);
(statearr_16452_16469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16443 === 1))
{var state_16442__$1 = state_16442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16442__$1,2,breakout.core.draw_channel,init_state_16462);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16454 = (new Array(9));(statearr_16454[0] = state_machine__5176__auto__);
(statearr_16454[1] = 1);
return statearr_16454;
});
var state_machine__5176__auto____1 = (function (state_16442){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16442);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16442){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16455 = f__5226__auto__.call(null);(statearr_16455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___16463);
return statearr_16455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));

//@ sourceMappingURL=core.js.map