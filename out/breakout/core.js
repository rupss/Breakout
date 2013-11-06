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
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12290(s__12291){return (new cljs.core.LazySeq(null,(function (){var s__12291__$1 = s__12291;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12291__$1);if(temp__4092__auto__)
{var s__12291__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12291__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12291__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12293 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12292 = 0;while(true){
if((i__12292 < size__3638__auto__))
{var vec__12296 = cljs.core._nth.call(null,c__3637__auto__,i__12292);var x = cljs.core.nth.call(null,vec__12296,0,null);var y = cljs.core.nth.call(null,vec__12296,1,null);var dx = cljs.core.nth.call(null,vec__12296,2,null);var dy = cljs.core.nth.call(null,vec__12296,3,null);cljs.core.chunk_append.call(null,b__12293,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__12298 = (i__12292 + 1);
i__12292 = G__12298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12293),iter__12290.call(null,cljs.core.chunk_rest.call(null,s__12291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12293),null);
}
} else
{var vec__12297 = cljs.core.first.call(null,s__12291__$2);var x = cljs.core.nth.call(null,vec__12297,0,null);var y = cljs.core.nth.call(null,vec__12297,1,null);var dx = cljs.core.nth.call(null,vec__12297,2,null);var dy = cljs.core.nth.call(null,vec__12297,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__12290.call(null,cljs.core.rest.call(null,s__12291__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__12299,p__12300,color,radius){var vec__12303 = p__12299;var ball_x = cljs.core.nth.call(null,vec__12303,0,null);var ball_y = cljs.core.nth.call(null,vec__12303,1,null);var dx = cljs.core.nth.call(null,vec__12303,2,null);var dy = cljs.core.nth.call(null,vec__12303,3,null);var vec__12304 = p__12300;var canvas = cljs.core.nth.call(null,vec__12304,0,null);var context = cljs.core.nth.call(null,vec__12304,1,null);var c_width = cljs.core.nth.call(null,vec__12304,2,null);var c_height = cljs.core.nth.call(null,vec__12304,3,null);var c = vec__12304;context.beginPath();
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
breakout.core.draw_brick = (function draw_brick(p__12305,p__12306,color){var vec__12309 = p__12305;var brick_x = cljs.core.nth.call(null,vec__12309,0,null);var brick_y = cljs.core.nth.call(null,vec__12309,1,null);var vec__12310 = p__12306;var canvas = cljs.core.nth.call(null,vec__12310,0,null);var context = cljs.core.nth.call(null,vec__12310,1,null);var c_width = cljs.core.nth.call(null,vec__12310,2,null);var c_height = cljs.core.nth.call(null,vec__12310,3,null);var c = vec__12310;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__12311,p__12312,color){var vec__12315 = p__12311;var brick_x = cljs.core.nth.call(null,vec__12315,0,null);var brick_y = cljs.core.nth.call(null,vec__12315,1,null);var vec__12316 = p__12312;var canvas = cljs.core.nth.call(null,vec__12316,0,null);var context = cljs.core.nth.call(null,vec__12316,1,null);var c_width = cljs.core.nth.call(null,vec__12316,2,null);var c_height = cljs.core.nth.call(null,vec__12316,3,null);var c = vec__12316;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(state){var vec__12331 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__12331,0,null);var context = cljs.core.nth.call(null,vec__12331,1,null);var c_width = cljs.core.nth.call(null,vec__12331,2,null);var c_height = cljs.core.nth.call(null,vec__12331,3,null);var c = vec__12331;var vec__12332 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__12332,0,null);var block_y = cljs.core.nth.call(null,vec__12332,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.clearRect(0,0,c_width,c_height);
context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12333(s__12334){return (new cljs.core.LazySeq(null,(function (){var s__12334__$1 = s__12334;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12334__$1);if(temp__4092__auto__)
{var s__12334__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12334__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12334__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12336 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12335 = 0;while(true){
if((i__12335 < size__3638__auto__))
{var vec__12339 = cljs.core._nth.call(null,c__3637__auto__,i__12335);var brick_x = cljs.core.nth.call(null,vec__12339,0,null);var brick_y = cljs.core.nth.call(null,vec__12339,1,null);var brick = vec__12339;cljs.core.chunk_append.call(null,b__12336,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__12345 = (i__12335 + 1);
i__12335 = G__12345;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12336),iter__12333.call(null,cljs.core.chunk_rest.call(null,s__12334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12336),null);
}
} else
{var vec__12340 = cljs.core.first.call(null,s__12334__$2);var brick_x = cljs.core.nth.call(null,vec__12340,0,null);var brick_y = cljs.core.nth.call(null,vec__12340,1,null);var brick = vec__12340;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__12333.call(null,cljs.core.rest.call(null,s__12334__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12341(s__12342){return (new cljs.core.LazySeq(null,(function (){var s__12342__$1 = s__12342;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12342__$1);if(temp__4092__auto__)
{var s__12342__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12342__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12342__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12344 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12343 = 0;while(true){
if((i__12343 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__12343);cljs.core.chunk_append.call(null,b__12344,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__12346 = (i__12343 + 1);
i__12343 = G__12346;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12344),iter__12341.call(null,cljs.core.chunk_rest.call(null,s__12342__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12344),null);
}
} else
{var ball = cljs.core.first.call(null,s__12342__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__12341.call(null,cljs.core.rest.call(null,s__12342__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__12347){var vec__12355 = p__12347;var canvas = cljs.core.nth.call(null,vec__12355,0,null);var context = cljs.core.nth.call(null,vec__12355,1,null);var c_width = cljs.core.nth.call(null,vec__12355,2,null);var c_height = cljs.core.nth.call(null,vec__12355,3,null);var iter__3639__auto__ = (function iter__12356(s__12357){return (new cljs.core.LazySeq(null,(function (){var s__12357__$1 = s__12357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12357__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__12357__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__12358(s__12359){return (new cljs.core.LazySeq(null,((function (s__12357__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12359__$1 = s__12359;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12359__$1);if(temp__4092__auto____$1)
{var s__12359__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12359__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12359__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12361 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12360 = 0;while(true){
if((i__12360 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__12360);cljs.core.chunk_append.call(null,b__12361,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__12362 = (i__12360 + 1);
i__12360 = G__12362;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),iter__12358.call(null,cljs.core.chunk_rest.call(null,s__12359__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__12359__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__12358.call(null,cljs.core.rest.call(null,s__12359__$2)));
}
} else
{return null;
}
break;
}
});})(s__12357__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12357__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__12356.call(null,cljs.core.rest.call(null,s__12357__$1)));
} else
{{
var G__12363 = cljs.core.rest.call(null,s__12357__$1);
s__12357__$1 = G__12363;
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
breakout.core.init_block = (function init_block(p__12364){var vec__12366 = p__12364;var canvas = cljs.core.nth.call(null,vec__12366,0,null);var context = cljs.core.nth.call(null,vec__12366,1,null);var c_width = cljs.core.nth.call(null,vec__12366,2,null);var c_height = cljs.core.nth.call(null,vec__12366,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__12367){var vec__12369 = p__12367;var canvas = cljs.core.nth.call(null,vec__12369,0,null);var context = cljs.core.nth.call(null,vec__12369,1,null);var c_width = cljs.core.nth.call(null,vec__12369,2,null);var c_height = cljs.core.nth.call(null,vec__12369,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,1.2,1.5], true),cljs.core.PersistentVector.fromArray([150,center_y,-3,3], true),cljs.core.PersistentVector.fromArray([350,center_y,-2,-2.2], true)], true);
});
breakout.core.init_round = (function init_round(c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.get_curr_time = (function get_curr_time(){return Date.now();
});
breakout.core.move_ball = (function move_ball(state,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12381 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__12381,0,null);var old_ball_y = cljs.core.nth.call(null,vec__12381,1,null);var old_dx = cljs.core.nth.call(null,vec__12381,2,null);var old_dy = cljs.core.nth.call(null,vec__12381,3,null);var old_ball = vec__12381;var curr_time = breakout.core.get_curr_time.call(null);var new_ball = cljs.core.PersistentVector.fromArray([(old_dx + old_ball_x),(old_dy + old_ball_y),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);if((i === 0))
{breakout.core.log.call(null,"OLD");
breakout.core.log.call(null,old_ball_x);
breakout.core.log.call(null,old_ball_y);
breakout.core.log.call(null,"NEW");
breakout.core.log.call(null,cljs.core.first.call(null,new_ball));
breakout.core.log.call(null,cljs.core.nth.call(null,new_ball,1));
} else
{breakout.core.log.call(null,"new-state");
}
breakout.core.print_first_ball_coords.call(null,new_state);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12386){var state_val_12387 = (state_12386[1]);if((state_val_12387 === 2))
{var inst_12383 = (state_12386[2]);var inst_12384 = breakout.core.log.call(null,"move ball - put state on channel");var state_12386__$1 = (function (){var statearr_12388 = state_12386;(statearr_12388[5] = inst_12383);
return statearr_12388;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12386__$1,inst_12384);
} else
{if((state_val_12387 === 1))
{var state_12386__$1 = state_12386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12386__$1,2,breakout.core.draw_channel,new_state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12390 = (new Array(6));(statearr_12390[0] = state_machine__5176__auto__);
(statearr_12390[1] = 1);
return statearr_12390;
});
var state_machine__5176__auto____1 = (function (state_12386){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12386){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12391 = f__5226__auto__.call(null);(statearr_12391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.get_four_points = (function get_four_points(p__12392){var vec__12394 = p__12392;var ball_x = cljs.core.nth.call(null,vec__12394,0,null);var ball_y = cljs.core.nth.call(null,vec__12394,1,null);var dx = cljs.core.nth.call(null,vec__12394,2,null);var dy = cljs.core.nth.call(null,vec__12394,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__12395,p__12396,rect_width,rect_height){var vec__12399 = p__12395;var x = cljs.core.nth.call(null,vec__12399,0,null);var y = cljs.core.nth.call(null,vec__12399,1,null);var vec__12400 = p__12396;var rect_x = cljs.core.nth.call(null,vec__12400,0,null);var rect_y = cljs.core.nth.call(null,vec__12400,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12401_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__12401_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__12402,i,direction_to_reverse){var vec__12404 = p__12402;var ball_x = cljs.core.nth.call(null,vec__12404,0,null);var ball_y = cljs.core.nth.call(null,vec__12404,1,null);var dx = cljs.core.nth.call(null,vec__12404,2,null);var dy = cljs.core.nth.call(null,vec__12404,3,null);var ball = vec__12404;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12416 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__12416,0,null);var ball_y = cljs.core.nth.call(null,vec__12416,1,null);var old_dx = cljs.core.nth.call(null,vec__12416,2,null);var old_dy = cljs.core.nth.call(null,vec__12416,3,null);var ball = vec__12416;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12422){var state_val_12423 = (state_12422[1]);if((state_val_12423 === 2))
{var inst_12420 = (state_12422[2]);var state_12422__$1 = state_12422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12422__$1,inst_12420);
} else
{if((state_val_12423 === 1))
{var inst_12417 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_12418 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_12417);var state_12422__$1 = state_12422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12422__$1,2,breakout.core.draw_channel,inst_12418);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12425 = (new Array(5));(statearr_12425[0] = state_machine__5176__auto__);
(statearr_12425[1] = 1);
return statearr_12425;
});
var state_machine__5176__auto____1 = (function (state_12422){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12422);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12422){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12426 = f__5226__auto__.call(null);(statearr_12426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__12427_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__12427_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{breakout.core.log.call(null,"HIT");
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12444(s__12445){return (new cljs.core.LazySeq(null,(function (){var s__12445__$1 = s__12445;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12445__$1);if(temp__4092__auto__)
{var s__12445__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12445__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12445__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12447 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12446 = 0;while(true){
if((i__12446 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__12446);cljs.core.chunk_append.call(null,b__12447,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__12460 = (i__12446 + 1);
i__12446 = G__12460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12447),iter__12444.call(null,cljs.core.chunk_rest.call(null,s__12445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12447),null);
}
} else
{var brick = cljs.core.first.call(null,s__12445__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__12444.call(null,cljs.core.rest.call(null,s__12445__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,collided_bricks);
})());
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12455){var state_val_12456 = (state_12455[1]);if((state_val_12456 === 2))
{var inst_12453 = (state_12455[2]);var state_12455__$1 = state_12455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12455__$1,inst_12453);
} else
{if((state_val_12456 === 1))
{var inst_12448 = cljs.core.set.call(null,collided_bricks);var inst_12449 = clojure.set.difference.call(null,all_bricks,inst_12448);var inst_12450 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_12451 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bricks","bricks",3928069060),inst_12449,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_12450);var state_12455__$1 = state_12455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12455__$1,2,breakout.core.draw_channel,inst_12451);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12458 = (new Array(5));(statearr_12458[0] = state_machine__5176__auto__);
(statearr_12458[1] = 1);
return statearr_12458;
});
var state_machine__5176__auto____1 = (function (state_12455){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12455){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12459 = f__5226__auto__.call(null);(statearr_12459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__12461,c_width){var vec__12463 = p__12461;var x = cljs.core.nth.call(null,vec__12463,0,null);var y = cljs.core.nth.call(null,vec__12463,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12464_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__12464_SHARP_,c_width);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12480){var state_val_12481 = (state_12480[1]);if((state_val_12481 === 2))
{var inst_12478 = (state_12480[2]);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12480__$1,inst_12478);
} else
{if((state_val_12481 === 1))
{var inst_12475 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462));var inst_12476 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_12475);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12480__$1,2,breakout.core.draw_channel,inst_12476);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12483 = (new Array(5));(statearr_12483[0] = state_machine__5176__auto__);
(statearr_12483[1] = 1);
return statearr_12483;
});
var state_machine__5176__auto____1 = (function (state_12480){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12480){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12484 = f__5226__auto__.call(null);(statearr_12484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.hit_top_wall_QMARK_ = (function hit_top_wall_QMARK_(p__12485){var vec__12487 = p__12485;var x = cljs.core.nth.call(null,vec__12487,0,null);var y = cljs.core.nth.call(null,vec__12487,1,null);return (y <= 0);
});
breakout.core.check_top_wall_collision = (function check_top_wall_collision(state,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12488_SHARP_){return breakout.core.hit_top_wall_QMARK_.call(null,p1__12488_SHARP_);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12504){var state_val_12505 = (state_12504[1]);if((state_val_12505 === 2))
{var inst_12502 = (state_12504[2]);var state_12504__$1 = state_12504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12504__$1,inst_12502);
} else
{if((state_val_12505 === 1))
{var inst_12499 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_12500 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_12499);var state_12504__$1 = state_12504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12504__$1,2,breakout.core.draw_channel,inst_12500);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12507 = (new Array(5));(statearr_12507[0] = state_machine__5176__auto__);
(statearr_12507[1] = 1);
return statearr_12507;
});
var state_machine__5176__auto____1 = (function (state_12504){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12504);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12504){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12508 = f__5226__auto__.call(null);(statearr_12508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__12509){var vec__12511 = p__12509;var canvas = cljs.core.nth.call(null,vec__12511,0,null);var context = cljs.core.nth.call(null,vec__12511,1,null);var c_width = cljs.core.nth.call(null,vec__12511,2,null);var c_height = cljs.core.nth.call(null,vec__12511,3,null);var c = vec__12511;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,c,i);
breakout.core.check_side_wall_collision.call(null,state,i,c_width);
return breakout.core.check_top_wall_collision.call(null,state,i);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i){return breakout.core.move_ball.call(null,state,i);
});
breakout.core.game = (function game(p__12512,num_balls){var vec__12554 = p__12512;var canvas = cljs.core.nth.call(null,vec__12554,0,null);var context = cljs.core.nth.call(null,vec__12554,1,null);var c_width = cljs.core.nth.call(null,vec__12554,2,null);var c_height = cljs.core.nth.call(null,vec__12554,3,null);var c = vec__12554;return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12555(s__12556){return (new cljs.core.LazySeq(null,(function (){var s__12556__$1 = s__12556;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12556__$1);if(temp__4092__auto__)
{var s__12556__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12556__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12556__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12558 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12557 = 0;while(true){
if((i__12557 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__12557);cljs.core.chunk_append.call(null,b__12558,(function (){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i__12557,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__){
return (function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = ((function (i__12557,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__){
return (function (state_12581){var state_val_12582 = (state_12581[1]);if((state_val_12582 === 2))
{var inst_12578 = (state_12581[2]);var inst_12579 = breakout.core.tick_one_ball.call(null,inst_12578,c,i);var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12581__$1,inst_12579);
} else
{if((state_val_12582 === 1))
{var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12581__$1,2,breakout.core.game_tap);
} else
{return null;
}
}
});})(i__12557,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__))
;return ((function (i__12557,switch__5175__auto__,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12584 = (new Array(5));(statearr_12584[0] = state_machine__5176__auto__);
(statearr_12584[1] = 1);
return statearr_12584;
});
var state_machine__5176__auto____1 = (function (state_12581){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(i__12557,switch__5175__auto__,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__))
})();var state__5227__auto__ = (function (){var statearr_12585 = f__5226__auto__.call(null);(statearr_12585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
});})(i__12557,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__12558,s__12556__$2,temp__4092__auto__))
);
return c__5225__auto__;
})());
{
var G__12595 = (i__12557 + 1);
i__12557 = G__12595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12558),iter__12555.call(null,cljs.core.chunk_rest.call(null,s__12556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12558),null);
}
} else
{var i = cljs.core.first.call(null,s__12556__$2);return cljs.core.cons.call(null,(function (){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5225__auto__,i,s__12556__$2,temp__4092__auto__){
return (function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = ((function (c__5225__auto__,i,s__12556__$2,temp__4092__auto__){
return (function (state_12590){var state_val_12591 = (state_12590[1]);if((state_val_12591 === 2))
{var inst_12587 = (state_12590[2]);var inst_12588 = breakout.core.tick_one_ball.call(null,inst_12587,c,i);var state_12590__$1 = state_12590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12590__$1,inst_12588);
} else
{if((state_val_12591 === 1))
{var state_12590__$1 = state_12590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,2,breakout.core.game_tap);
} else
{return null;
}
}
});})(c__5225__auto__,i,s__12556__$2,temp__4092__auto__))
;return ((function (switch__5175__auto__,c__5225__auto__,i,s__12556__$2,temp__4092__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12593 = (new Array(5));(statearr_12593[0] = state_machine__5176__auto__);
(statearr_12593[1] = 1);
return statearr_12593;
});
var state_machine__5176__auto____1 = (function (state_12590){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12590){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__,c__5225__auto__,i,s__12556__$2,temp__4092__auto__))
})();var state__5227__auto__ = (function (){var statearr_12594 = f__5226__auto__.call(null);(statearr_12594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
});})(c__5225__auto__,i,s__12556__$2,temp__4092__auto__))
);
return c__5225__auto__;
})(),iter__12555.call(null,cljs.core.rest.call(null,s__12556__$2)));
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
breakout.core.draw_looper = (function draw_looper(){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12634){var state_val_12635 = (state_12634[1]);if((state_val_12635 === 7))
{var inst_12624 = (state_12634[2]);var inst_12625 = breakout.core.draw_everything.call(null,inst_12624);var inst_12626 = breakout.core.log.call(null,"drew everything - fn");var state_12634__$1 = (function (){var statearr_12636 = state_12634;(statearr_12636[5] = inst_12625);
(statearr_12636[6] = inst_12626);
return statearr_12636;
})();var statearr_12637_12646 = state_12634__$1;(statearr_12637_12646[2] = null);
(statearr_12637_12646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 6))
{var inst_12630 = (state_12634[2]);var state_12634__$1 = state_12634;var statearr_12638_12647 = state_12634__$1;(statearr_12638_12647[2] = inst_12630);
(statearr_12638_12647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 5))
{var state_12634__$1 = state_12634;var statearr_12639_12648 = state_12634__$1;(statearr_12639_12648[2] = null);
(statearr_12639_12648[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 4))
{var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12634__$1,7,breakout.core.draw_tap);
} else
{if((state_val_12635 === 3))
{var inst_12632 = (state_12634[2]);var state_12634__$1 = state_12634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12634__$1,inst_12632);
} else
{if((state_val_12635 === 2))
{var state_12634__$1 = state_12634;if(true)
{var statearr_12640_12649 = state_12634__$1;(statearr_12640_12649[1] = 4);
} else
{var statearr_12641_12650 = state_12634__$1;(statearr_12641_12650[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12635 === 1))
{var state_12634__$1 = state_12634;var statearr_12642_12651 = state_12634__$1;(statearr_12642_12651[2] = null);
(statearr_12642_12651[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_12644 = (new Array(7));(statearr_12644[0] = state_machine__5176__auto__);
(statearr_12644[1] = 1);
return statearr_12644;
});
var state_machine__5176__auto____1 = (function (state_12634){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12634){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12645 = f__5226__auto__.call(null);(statearr_12645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.draw_looper.call(null);
var vec__12652_12685 = breakout.core.get_context.call(null);var canvas_12686 = cljs.core.nth.call(null,vec__12652_12685,0,null);var context_12687 = cljs.core.nth.call(null,vec__12652_12685,1,null);var c_width_12688 = cljs.core.nth.call(null,vec__12652_12685,2,null);var c_height_12689 = cljs.core.nth.call(null,vec__12652_12685,3,null);var c_12690 = vec__12652_12685;var init_state_12691 = breakout.core.init_round.call(null,c_12690);var c__5225__auto___12692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12671){var state_val_12672 = (state_12671[1]);if((state_val_12672 === 8))
{var inst_12655 = (state_12671[5]);var inst_12662 = (state_12671[2]);var inst_12663 = (inst_12655 + 1);var inst_12655__$1 = inst_12663;var state_12671__$1 = (function (){var statearr_12673 = state_12671;(statearr_12673[5] = inst_12655__$1);
(statearr_12673[6] = inst_12662);
return statearr_12673;
})();var statearr_12674_12693 = state_12671__$1;(statearr_12674_12693[2] = null);
(statearr_12674_12693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12672 === 7))
{var inst_12667 = (state_12671[2]);var state_12671__$1 = state_12671;var statearr_12675_12694 = state_12671__$1;(statearr_12675_12694[2] = inst_12667);
(statearr_12675_12694[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12672 === 6))
{var state_12671__$1 = state_12671;var statearr_12676_12695 = state_12671__$1;(statearr_12676_12695[2] = null);
(statearr_12676_12695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12672 === 5))
{var inst_12659 = breakout.core.game.call(null,c_12690,3);var inst_12660 = cljs.core.async.timeout.call(null,10);var state_12671__$1 = (function (){var statearr_12677 = state_12671;(statearr_12677[7] = inst_12659);
return statearr_12677;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12671__$1,8,inst_12660);
} else
{if((state_val_12672 === 4))
{var inst_12669 = (state_12671[2]);var state_12671__$1 = state_12671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12671__$1,inst_12669);
} else
{if((state_val_12672 === 3))
{var inst_12655 = (state_12671[5]);var inst_12657 = (inst_12655 < 100);var state_12671__$1 = state_12671;if(cljs.core.truth_(inst_12657))
{var statearr_12678_12696 = state_12671__$1;(statearr_12678_12696[1] = 5);
} else
{var statearr_12679_12697 = state_12671__$1;(statearr_12679_12697[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12672 === 2))
{var inst_12654 = (state_12671[2]);var inst_12655 = 0;var state_12671__$1 = (function (){var statearr_12680 = state_12671;(statearr_12680[5] = inst_12655);
(statearr_12680[8] = inst_12654);
return statearr_12680;
})();var statearr_12681_12698 = state_12671__$1;(statearr_12681_12698[2] = null);
(statearr_12681_12698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12672 === 1))
{var state_12671__$1 = state_12671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12671__$1,2,breakout.core.draw_channel,init_state_12691);
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
var state_machine__5176__auto____0 = (function (){var statearr_12683 = (new Array(9));(statearr_12683[0] = state_machine__5176__auto__);
(statearr_12683[1] = 1);
return statearr_12683;
});
var state_machine__5176__auto____1 = (function (state_12671){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12671);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12671){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12684 = f__5226__auto__.call(null);(statearr_12684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___12692);
return statearr_12684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));

//@ sourceMappingURL=core.js.map