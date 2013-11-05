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
breakout.core.draw_channel = cljs.core.async.chan.call(null);
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.PersistentVector.fromArray([canvas,context,canvas.width,canvas.height], true);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12247(s__12248){return (new cljs.core.LazySeq(null,(function (){var s__12248__$1 = s__12248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12248__$1);if(temp__4092__auto__)
{var s__12248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12248__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12248__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12250 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12249 = 0;while(true){
if((i__12249 < size__3638__auto__))
{var vec__12253 = cljs.core._nth.call(null,c__3637__auto__,i__12249);var x = cljs.core.nth.call(null,vec__12253,0,null);var y = cljs.core.nth.call(null,vec__12253,1,null);var dx = cljs.core.nth.call(null,vec__12253,2,null);var dy = cljs.core.nth.call(null,vec__12253,3,null);cljs.core.chunk_append.call(null,b__12250,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__12255 = (i__12249 + 1);
i__12249 = G__12255;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12250),iter__12247.call(null,cljs.core.chunk_rest.call(null,s__12248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12250),null);
}
} else
{var vec__12254 = cljs.core.first.call(null,s__12248__$2);var x = cljs.core.nth.call(null,vec__12254,0,null);var y = cljs.core.nth.call(null,vec__12254,1,null);var dx = cljs.core.nth.call(null,vec__12254,2,null);var dy = cljs.core.nth.call(null,vec__12254,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__12247.call(null,cljs.core.rest.call(null,s__12248__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__12256,p__12257,color,radius){var vec__12260 = p__12256;var ball_x = cljs.core.nth.call(null,vec__12260,0,null);var ball_y = cljs.core.nth.call(null,vec__12260,1,null);var dx = cljs.core.nth.call(null,vec__12260,2,null);var dy = cljs.core.nth.call(null,vec__12260,3,null);var vec__12261 = p__12257;var canvas = cljs.core.nth.call(null,vec__12261,0,null);var context = cljs.core.nth.call(null,vec__12261,1,null);var c_width = cljs.core.nth.call(null,vec__12261,2,null);var c_height = cljs.core.nth.call(null,vec__12261,3,null);var c = vec__12261;context.beginPath();
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
breakout.core.draw_brick = (function draw_brick(p__12262,p__12263,color){var vec__12266 = p__12262;var brick_x = cljs.core.nth.call(null,vec__12266,0,null);var brick_y = cljs.core.nth.call(null,vec__12266,1,null);var vec__12267 = p__12263;var canvas = cljs.core.nth.call(null,vec__12267,0,null);var context = cljs.core.nth.call(null,vec__12267,1,null);var c_width = cljs.core.nth.call(null,vec__12267,2,null);var c_height = cljs.core.nth.call(null,vec__12267,3,null);var c = vec__12267;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__12268,p__12269,color){var vec__12272 = p__12268;var brick_x = cljs.core.nth.call(null,vec__12272,0,null);var brick_y = cljs.core.nth.call(null,vec__12272,1,null);var vec__12273 = p__12269;var canvas = cljs.core.nth.call(null,vec__12273,0,null);var context = cljs.core.nth.call(null,vec__12273,1,null);var c_width = cljs.core.nth.call(null,vec__12273,2,null);var c_height = cljs.core.nth.call(null,vec__12273,3,null);var c = vec__12273;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(state){var vec__12288 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__12288,0,null);var context = cljs.core.nth.call(null,vec__12288,1,null);var c_width = cljs.core.nth.call(null,vec__12288,2,null);var c_height = cljs.core.nth.call(null,vec__12288,3,null);var c = vec__12288;var vec__12289 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__12289,0,null);var block_y = cljs.core.nth.call(null,vec__12289,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12290(s__12291){return (new cljs.core.LazySeq(null,(function (){var s__12291__$1 = s__12291;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12291__$1);if(temp__4092__auto__)
{var s__12291__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12291__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12291__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12293 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12292 = 0;while(true){
if((i__12292 < size__3638__auto__))
{var vec__12296 = cljs.core._nth.call(null,c__3637__auto__,i__12292);var brick_x = cljs.core.nth.call(null,vec__12296,0,null);var brick_y = cljs.core.nth.call(null,vec__12296,1,null);var brick = vec__12296;cljs.core.chunk_append.call(null,b__12293,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__12302 = (i__12292 + 1);
i__12292 = G__12302;
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
{var vec__12297 = cljs.core.first.call(null,s__12291__$2);var brick_x = cljs.core.nth.call(null,vec__12297,0,null);var brick_y = cljs.core.nth.call(null,vec__12297,1,null);var brick = vec__12297;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__12290.call(null,cljs.core.rest.call(null,s__12291__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12298(s__12299){return (new cljs.core.LazySeq(null,(function (){var s__12299__$1 = s__12299;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12299__$1);if(temp__4092__auto__)
{var s__12299__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12299__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12299__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12301 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12300 = 0;while(true){
if((i__12300 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__12300);cljs.core.chunk_append.call(null,b__12301,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__12303 = (i__12300 + 1);
i__12300 = G__12303;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12301),iter__12298.call(null,cljs.core.chunk_rest.call(null,s__12299__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12301),null);
}
} else
{var ball = cljs.core.first.call(null,s__12299__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__12298.call(null,cljs.core.rest.call(null,s__12299__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__12304){var vec__12312 = p__12304;var canvas = cljs.core.nth.call(null,vec__12312,0,null);var context = cljs.core.nth.call(null,vec__12312,1,null);var c_width = cljs.core.nth.call(null,vec__12312,2,null);var c_height = cljs.core.nth.call(null,vec__12312,3,null);var iter__3639__auto__ = (function iter__12313(s__12314){return (new cljs.core.LazySeq(null,(function (){var s__12314__$1 = s__12314;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12314__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__12314__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__12315(s__12316){return (new cljs.core.LazySeq(null,((function (s__12314__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12316__$1 = s__12316;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12316__$1);if(temp__4092__auto____$1)
{var s__12316__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12316__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12316__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12318 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12317 = 0;while(true){
if((i__12317 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__12317);cljs.core.chunk_append.call(null,b__12318,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__12319 = (i__12317 + 1);
i__12317 = G__12319;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12318),iter__12315.call(null,cljs.core.chunk_rest.call(null,s__12316__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12318),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__12316__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__12315.call(null,cljs.core.rest.call(null,s__12316__$2)));
}
} else
{return null;
}
break;
}
});})(s__12314__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12314__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__12313.call(null,cljs.core.rest.call(null,s__12314__$1)));
} else
{{
var G__12320 = cljs.core.rest.call(null,s__12314__$1);
s__12314__$1 = G__12320;
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
breakout.core.init_block = (function init_block(p__12321){var vec__12323 = p__12321;var canvas = cljs.core.nth.call(null,vec__12323,0,null);var context = cljs.core.nth.call(null,vec__12323,1,null);var c_width = cljs.core.nth.call(null,vec__12323,2,null);var c_height = cljs.core.nth.call(null,vec__12323,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__12324){var vec__12326 = p__12324;var canvas = cljs.core.nth.call(null,vec__12326,0,null);var context = cljs.core.nth.call(null,vec__12326,1,null);var c_width = cljs.core.nth.call(null,vec__12326,2,null);var c_height = cljs.core.nth.call(null,vec__12326,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,1.2,1.5], true),cljs.core.PersistentVector.fromArray([150,center_y,-3,3], true),cljs.core.PersistentVector.fromArray([350,center_y,-2,-2.2], true)], true);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.get_curr_time = (function get_curr_time(){return Date.now();
});
breakout.core.move_ball = (function move_ball(state,i,prev_tick_time){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12328 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__12328,0,null);var old_ball_y = cljs.core.nth.call(null,vec__12328,1,null);var old_dx = cljs.core.nth.call(null,vec__12328,2,null);var old_dy = cljs.core.nth.call(null,vec__12328,3,null);var old_ball = vec__12328;var curr_time = breakout.core.get_curr_time.call(null);var elapsed_time = ((curr_time - prev_tick_time) / 1000000000000);var new_ball = cljs.core.PersistentVector.fromArray([((old_dx + old_ball_x) + (old_dx * elapsed_time)),((old_dy + old_ball_y) + (old_dy * elapsed_time)),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);
breakout.core.log.call(null,"elapsed time");
breakout.core.log.call(null,(curr_time - prev_tick_time));
breakout.core.log.call(null,"old ball");
breakout.core.log.call(null,old_ball_x);
breakout.core.log.call(null,old_ball_y);
breakout.core.log.call(null,"new ball");
breakout.core.log.call(null,cljs.core.first.call(null,new_ball));
return breakout.core.log.call(null,cljs.core.nth.call(null,new_ball,1));
});
breakout.core.get_four_points = (function get_four_points(p__12329){var vec__12331 = p__12329;var ball_x = cljs.core.nth.call(null,vec__12331,0,null);var ball_y = cljs.core.nth.call(null,vec__12331,1,null);var dx = cljs.core.nth.call(null,vec__12331,2,null);var dy = cljs.core.nth.call(null,vec__12331,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__12332,p__12333,rect_width,rect_height){var vec__12336 = p__12332;var x = cljs.core.nth.call(null,vec__12336,0,null);var y = cljs.core.nth.call(null,vec__12336,1,null);var vec__12337 = p__12333;var rect_x = cljs.core.nth.call(null,vec__12337,0,null);var rect_y = cljs.core.nth.call(null,vec__12337,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12338_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__12338_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__12339,i,direction_to_reverse){var vec__12341 = p__12339;var ball_x = cljs.core.nth.call(null,vec__12341,0,null);var ball_y = cljs.core.nth.call(null,vec__12341,1,null);var dx = cljs.core.nth.call(null,vec__12341,2,null);var dy = cljs.core.nth.call(null,vec__12341,3,null);var ball = vec__12341;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12343 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__12343,0,null);var ball_y = cljs.core.nth.call(null,vec__12343,1,null);var old_dx = cljs.core.nth.call(null,vec__12343,2,null);var old_dy = cljs.core.nth.call(null,vec__12343,3,null);var ball = vec__12343;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__12344,p__12345){var vec__12348 = p__12344;var x = cljs.core.nth.call(null,vec__12348,0,null);var y = cljs.core.nth.call(null,vec__12348,1,null);var vec__12349 = p__12345;var block_x = cljs.core.nth.call(null,vec__12349,0,null);var block_y = cljs.core.nth.call(null,vec__12349,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12350_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__12350_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__12351_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__12351_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{breakout.core.log.call(null,"HIT");
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12356(s__12357){return (new cljs.core.LazySeq(null,(function (){var s__12357__$1 = s__12357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12357__$1);if(temp__4092__auto__)
{var s__12357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12357__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12357__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12359 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12358 = 0;while(true){
if((i__12358 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__12358);cljs.core.chunk_append.call(null,b__12359,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__12360 = (i__12358 + 1);
i__12358 = G__12360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12359),iter__12356.call(null,cljs.core.chunk_rest.call(null,s__12357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12359),null);
}
} else
{var brick = cljs.core.first.call(null,s__12357__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__12356.call(null,cljs.core.rest.call(null,s__12357__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,collided_bricks);
})());
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__12361,c_width){var vec__12363 = p__12361;var x = cljs.core.nth.call(null,vec__12363,0,null);var y = cljs.core.nth.call(null,vec__12363,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12364_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__12364_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462)));
} else
{return null;
}
});
breakout.core.hit_top_wall_QMARK_ = (function hit_top_wall_QMARK_(p__12365){var vec__12367 = p__12365;var x = cljs.core.nth.call(null,vec__12367,0,null);var y = cljs.core.nth.call(null,vec__12367,1,null);return (y <= 0);
});
breakout.core.check_top_wall_collision = (function check_top_wall_collision(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12368_SHARP_){return breakout.core.hit_top_wall_QMARK_.call(null,p1__12368_SHARP_);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__12369){var vec__12371 = p__12369;var canvas = cljs.core.nth.call(null,vec__12371,0,null);var context = cljs.core.nth.call(null,vec__12371,1,null);var c_width = cljs.core.nth.call(null,vec__12371,2,null);var c_height = cljs.core.nth.call(null,vec__12371,3,null);var c = vec__12371;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,c,i);
breakout.core.check_side_wall_collision.call(null,state,i,c_width);
return breakout.core.check_top_wall_collision.call(null,state,i);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i,prev_tick_time){breakout.core.move_ball.call(null,state,i,prev_tick_time);
return breakout.core.check_collisions.call(null,state,i,c);
});
breakout.core.game_loop = (function game_loop(state,p__12372,prev_tick_time){var vec__12378 = p__12372;var canvas = cljs.core.nth.call(null,vec__12378,0,null);var context = cljs.core.nth.call(null,vec__12378,1,null);var c_width = cljs.core.nth.call(null,vec__12378,2,null);var c_height = cljs.core.nth.call(null,vec__12378,3,null);var c = vec__12378;cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12379(s__12380){return (new cljs.core.LazySeq(null,(function (){var s__12380__$1 = s__12380;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12380__$1);if(temp__4092__auto__)
{var s__12380__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12380__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12380__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12382 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12381 = 0;while(true){
if((i__12381 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__12381);cljs.core.chunk_append.call(null,b__12382,breakout.core.tick_one_ball.call(null,state,c,i,prev_tick_time));
{
var G__12383 = (i__12381 + 1);
i__12381 = G__12383;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12382),iter__12379.call(null,cljs.core.chunk_rest.call(null,s__12380__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12382),null);
}
} else
{var i = cljs.core.first.call(null,s__12380__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,state,c,i,prev_tick_time),iter__12379.call(null,cljs.core.rest.call(null,s__12380__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278)))));
})());
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,cljs.core.deref.call(null,state));
});
breakout.core.init_deltas = (function init_deltas(){var vec__12405 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__12405,0,null);var context = cljs.core.nth.call(null,vec__12405,1,null);var c_width = cljs.core.nth.call(null,vec__12405,2,null);var c_height = cljs.core.nth.call(null,vec__12405,3,null);var c = vec__12405;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12417){var state_val_12418 = (state_12417[1]);if((state_val_12418 === 4))
{var inst_12406 = (state_12417[5]);var inst_12410 = (state_12417[2]);var inst_12411 = breakout.core.get_curr_time.call(null);var inst_12412 = breakout.core.game_loop.call(null,state,c,inst_12406);var inst_12406__$1 = inst_12411;var state_12417__$1 = (function (){var statearr_12419 = state_12417;(statearr_12419[5] = inst_12406__$1);
(statearr_12419[6] = inst_12412);
(statearr_12419[7] = inst_12410);
return statearr_12419;
})();var statearr_12420_12426 = state_12417__$1;(statearr_12420_12426[2] = null);
(statearr_12420_12426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12418 === 3))
{var inst_12415 = (state_12417[2]);var state_12417__$1 = state_12417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12417__$1,inst_12415);
} else
{if((state_val_12418 === 2))
{var inst_12408 = cljs.core.async.timeout.call(null,4);var state_12417__$1 = state_12417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12417__$1,4,inst_12408);
} else
{if((state_val_12418 === 1))
{var inst_12406 = null;var state_12417__$1 = (function (){var statearr_12421 = state_12417;(statearr_12421[5] = inst_12406);
return statearr_12421;
})();var statearr_12422_12427 = state_12417__$1;(statearr_12422_12427[2] = null);
(statearr_12422_12427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_12424 = (new Array(8));(statearr_12424[0] = state_machine__5176__auto__);
(statearr_12424[1] = 1);
return statearr_12424;
});
var state_machine__5176__auto____1 = (function (state_12417){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12417);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12417){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12425 = f__5226__auto__.call(null);(statearr_12425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.init_deltas.call(null);
breakout.core.draw_looper = (function draw_looper(){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12464){var state_val_12465 = (state_12464[1]);if((state_val_12465 === 7))
{var inst_12455 = (state_12464[2]);var inst_12456 = breakout.core.draw_everything.call(null,inst_12455);var state_12464__$1 = (function (){var statearr_12466 = state_12464;(statearr_12466[5] = inst_12456);
return statearr_12466;
})();var statearr_12467_12476 = state_12464__$1;(statearr_12467_12476[2] = null);
(statearr_12467_12476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 6))
{var inst_12460 = (state_12464[2]);var state_12464__$1 = state_12464;var statearr_12468_12477 = state_12464__$1;(statearr_12468_12477[2] = inst_12460);
(statearr_12468_12477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 5))
{var state_12464__$1 = state_12464;var statearr_12469_12478 = state_12464__$1;(statearr_12469_12478[2] = null);
(statearr_12469_12478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 4))
{var state_12464__$1 = state_12464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12464__$1,7,breakout.core.draw_channel);
} else
{if((state_val_12465 === 3))
{var inst_12462 = (state_12464[2]);var state_12464__$1 = state_12464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12464__$1,inst_12462);
} else
{if((state_val_12465 === 2))
{var state_12464__$1 = state_12464;if(true)
{var statearr_12470_12479 = state_12464__$1;(statearr_12470_12479[1] = 4);
} else
{var statearr_12471_12480 = state_12464__$1;(statearr_12471_12480[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12465 === 1))
{var state_12464__$1 = state_12464;var statearr_12472_12481 = state_12464__$1;(statearr_12472_12481[2] = null);
(statearr_12472_12481[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_12474 = (new Array(6));(statearr_12474[0] = state_machine__5176__auto__);
(statearr_12474[1] = 1);
return statearr_12474;
});
var state_machine__5176__auto____1 = (function (state_12464){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12464){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12475 = f__5226__auto__.call(null);(statearr_12475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});

//@ sourceMappingURL=core.js.map