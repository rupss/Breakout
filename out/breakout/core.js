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
breakout.core.channel = cljs.core.async.chan.call(null);
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.PersistentVector.fromArray([canvas,context,canvas.width,canvas.height], true);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16235(s__16236){return (new cljs.core.LazySeq(null,(function (){var s__16236__$1 = s__16236;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16236__$1);if(temp__4092__auto__)
{var s__16236__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16236__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16236__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16238 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16237 = 0;while(true){
if((i__16237 < size__3638__auto__))
{var vec__16241 = cljs.core._nth.call(null,c__3637__auto__,i__16237);var x = cljs.core.nth.call(null,vec__16241,0,null);var y = cljs.core.nth.call(null,vec__16241,1,null);var dx = cljs.core.nth.call(null,vec__16241,2,null);var dy = cljs.core.nth.call(null,vec__16241,3,null);cljs.core.chunk_append.call(null,b__16238,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__16243 = (i__16237 + 1);
i__16237 = G__16243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16238),iter__16235.call(null,cljs.core.chunk_rest.call(null,s__16236__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16238),null);
}
} else
{var vec__16242 = cljs.core.first.call(null,s__16236__$2);var x = cljs.core.nth.call(null,vec__16242,0,null);var y = cljs.core.nth.call(null,vec__16242,1,null);var dx = cljs.core.nth.call(null,vec__16242,2,null);var dy = cljs.core.nth.call(null,vec__16242,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__16235.call(null,cljs.core.rest.call(null,s__16236__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__16244,p__16245,color,radius){var vec__16248 = p__16244;var ball_x = cljs.core.nth.call(null,vec__16248,0,null);var ball_y = cljs.core.nth.call(null,vec__16248,1,null);var dx = cljs.core.nth.call(null,vec__16248,2,null);var dy = cljs.core.nth.call(null,vec__16248,3,null);var vec__16249 = p__16245;var canvas = cljs.core.nth.call(null,vec__16249,0,null);var context = cljs.core.nth.call(null,vec__16249,1,null);var c_width = cljs.core.nth.call(null,vec__16249,2,null);var c_height = cljs.core.nth.call(null,vec__16249,3,null);var c = vec__16249;context.beginPath();
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
breakout.core.draw_brick = (function draw_brick(p__16250,p__16251,color){var vec__16254 = p__16250;var brick_x = cljs.core.nth.call(null,vec__16254,0,null);var brick_y = cljs.core.nth.call(null,vec__16254,1,null);var vec__16255 = p__16251;var canvas = cljs.core.nth.call(null,vec__16255,0,null);var context = cljs.core.nth.call(null,vec__16255,1,null);var c_width = cljs.core.nth.call(null,vec__16255,2,null);var c_height = cljs.core.nth.call(null,vec__16255,3,null);var c = vec__16255;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__16256,p__16257,color){var vec__16260 = p__16256;var brick_x = cljs.core.nth.call(null,vec__16260,0,null);var brick_y = cljs.core.nth.call(null,vec__16260,1,null);var vec__16261 = p__16257;var canvas = cljs.core.nth.call(null,vec__16261,0,null);var context = cljs.core.nth.call(null,vec__16261,1,null);var c_width = cljs.core.nth.call(null,vec__16261,2,null);var c_height = cljs.core.nth.call(null,vec__16261,3,null);var c = vec__16261;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(p__16262,state){var vec__16277 = p__16262;var canvas = cljs.core.nth.call(null,vec__16277,0,null);var context = cljs.core.nth.call(null,vec__16277,1,null);var c_width = cljs.core.nth.call(null,vec__16277,2,null);var c_height = cljs.core.nth.call(null,vec__16277,3,null);var c = vec__16277;var vec__16278 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__16278,0,null);var block_y = cljs.core.nth.call(null,vec__16278,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16279(s__16280){return (new cljs.core.LazySeq(null,(function (){var s__16280__$1 = s__16280;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16280__$1);if(temp__4092__auto__)
{var s__16280__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16280__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16280__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16282 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16281 = 0;while(true){
if((i__16281 < size__3638__auto__))
{var vec__16285 = cljs.core._nth.call(null,c__3637__auto__,i__16281);var brick_x = cljs.core.nth.call(null,vec__16285,0,null);var brick_y = cljs.core.nth.call(null,vec__16285,1,null);var brick = vec__16285;cljs.core.chunk_append.call(null,b__16282,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__16291 = (i__16281 + 1);
i__16281 = G__16291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16282),iter__16279.call(null,cljs.core.chunk_rest.call(null,s__16280__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16282),null);
}
} else
{var vec__16286 = cljs.core.first.call(null,s__16280__$2);var brick_x = cljs.core.nth.call(null,vec__16286,0,null);var brick_y = cljs.core.nth.call(null,vec__16286,1,null);var brick = vec__16286;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__16279.call(null,cljs.core.rest.call(null,s__16280__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16287(s__16288){return (new cljs.core.LazySeq(null,(function (){var s__16288__$1 = s__16288;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16288__$1);if(temp__4092__auto__)
{var s__16288__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16288__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16288__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16290 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16289 = 0;while(true){
if((i__16289 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__16289);cljs.core.chunk_append.call(null,b__16290,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__16292 = (i__16289 + 1);
i__16289 = G__16292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16290),iter__16287.call(null,cljs.core.chunk_rest.call(null,s__16288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16290),null);
}
} else
{var ball = cljs.core.first.call(null,s__16288__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__16287.call(null,cljs.core.rest.call(null,s__16288__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__16293){var vec__16301 = p__16293;var canvas = cljs.core.nth.call(null,vec__16301,0,null);var context = cljs.core.nth.call(null,vec__16301,1,null);var c_width = cljs.core.nth.call(null,vec__16301,2,null);var c_height = cljs.core.nth.call(null,vec__16301,3,null);var iter__3639__auto__ = (function iter__16302(s__16303){return (new cljs.core.LazySeq(null,(function (){var s__16303__$1 = s__16303;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16303__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__16303__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__16304(s__16305){return (new cljs.core.LazySeq(null,((function (s__16303__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__16305__$1 = s__16305;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16305__$1);if(temp__4092__auto____$1)
{var s__16305__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16305__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16305__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16307 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16306 = 0;while(true){
if((i__16306 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__16306);cljs.core.chunk_append.call(null,b__16307,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__16308 = (i__16306 + 1);
i__16306 = G__16308;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16307),iter__16304.call(null,cljs.core.chunk_rest.call(null,s__16305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16307),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__16305__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__16304.call(null,cljs.core.rest.call(null,s__16305__$2)));
}
} else
{return null;
}
break;
}
});})(s__16303__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__16303__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__16302.call(null,cljs.core.rest.call(null,s__16303__$1)));
} else
{{
var G__16309 = cljs.core.rest.call(null,s__16303__$1);
s__16303__$1 = G__16309;
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
breakout.core.init_block = (function init_block(p__16310){var vec__16312 = p__16310;var canvas = cljs.core.nth.call(null,vec__16312,0,null);var context = cljs.core.nth.call(null,vec__16312,1,null);var c_width = cljs.core.nth.call(null,vec__16312,2,null);var c_height = cljs.core.nth.call(null,vec__16312,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__16313){var vec__16315 = p__16313;var canvas = cljs.core.nth.call(null,vec__16315,0,null);var context = cljs.core.nth.call(null,vec__16315,1,null);var c_width = cljs.core.nth.call(null,vec__16315,2,null);var c_height = cljs.core.nth.call(null,vec__16315,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,0.8,1], true),cljs.core.PersistentVector.fromArray([150,center_y,-2,2], true),cljs.core.PersistentVector.fromArray([350,center_y,-1.2,1.3], true)], true);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.move_ball = (function move_ball(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__16317 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__16317,0,null);var old_ball_y = cljs.core.nth.call(null,vec__16317,1,null);var old_dx = cljs.core.nth.call(null,vec__16317,2,null);var old_dy = cljs.core.nth.call(null,vec__16317,3,null);var old_ball = vec__16317;var new_ball = cljs.core.PersistentVector.fromArray([(old_dx + old_ball_x),(old_dy + old_ball_y),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);
return cljs.core.PersistentVector.fromArray([old_ball,new_ball], true);
});
breakout.core.move_draw_ball = (function move_draw_ball(state,c,i){var vec__16319 = breakout.core.move_ball.call(null,state,i);var old_ball = cljs.core.nth.call(null,vec__16319,0,null);var new_ball = cljs.core.nth.call(null,vec__16319,1,null);breakout.core.draw_ball.call(null,old_ball,c,"white");
return breakout.core.draw_ball.call(null,new_ball,c,"black");
});
breakout.core.get_four_points = (function get_four_points(p__16320){var vec__16322 = p__16320;var ball_x = cljs.core.nth.call(null,vec__16322,0,null);var ball_y = cljs.core.nth.call(null,vec__16322,1,null);var dx = cljs.core.nth.call(null,vec__16322,2,null);var dy = cljs.core.nth.call(null,vec__16322,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__16323,p__16324,rect_width,rect_height){var vec__16327 = p__16323;var x = cljs.core.nth.call(null,vec__16327,0,null);var y = cljs.core.nth.call(null,vec__16327,1,null);var vec__16328 = p__16324;var rect_x = cljs.core.nth.call(null,vec__16328,0,null);var rect_y = cljs.core.nth.call(null,vec__16328,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16329_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__16329_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__16330,i,direction_to_reverse){var vec__16332 = p__16330;var ball_x = cljs.core.nth.call(null,vec__16332,0,null);var ball_y = cljs.core.nth.call(null,vec__16332,1,null);var dx = cljs.core.nth.call(null,vec__16332,2,null);var dy = cljs.core.nth.call(null,vec__16332,3,null);var ball = vec__16332;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__16334 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__16334,0,null);var ball_y = cljs.core.nth.call(null,vec__16334,1,null);var old_dx = cljs.core.nth.call(null,vec__16334,2,null);var old_dy = cljs.core.nth.call(null,vec__16334,3,null);var ball = vec__16334;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__16335,p__16336){var vec__16339 = p__16335;var x = cljs.core.nth.call(null,vec__16339,0,null);var y = cljs.core.nth.call(null,vec__16339,1,null);var vec__16340 = p__16336;var block_x = cljs.core.nth.call(null,vec__16340,0,null);var block_y = cljs.core.nth.call(null,vec__16340,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16341_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__16341_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__16342_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__16342_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{breakout.core.log.call(null,"HIT");
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16347(s__16348){return (new cljs.core.LazySeq(null,(function (){var s__16348__$1 = s__16348;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16348__$1);if(temp__4092__auto__)
{var s__16348__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16348__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16348__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16350 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16349 = 0;while(true){
if((i__16349 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__16349);cljs.core.chunk_append.call(null,b__16350,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__16351 = (i__16349 + 1);
i__16349 = G__16351;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16350),iter__16347.call(null,cljs.core.chunk_rest.call(null,s__16348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16350),null);
}
} else
{var brick = cljs.core.first.call(null,s__16348__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__16347.call(null,cljs.core.rest.call(null,s__16348__$2)));
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
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__16352,c_width){var vec__16354 = p__16352;var x = cljs.core.nth.call(null,vec__16354,0,null);var y = cljs.core.nth.call(null,vec__16354,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__16355_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__16355_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462)));
} else
{return null;
}
});
breakout.core.check_ball_ball_collision = (function check_ball_ball_collision(state,i){var other_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (){return cljs.core.List.EMPTY;
})))))
{return null;
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__16356){var vec__16358 = p__16356;var canvas = cljs.core.nth.call(null,vec__16358,0,null);var context = cljs.core.nth.call(null,vec__16358,1,null);var c_width = cljs.core.nth.call(null,vec__16358,2,null);var c_height = cljs.core.nth.call(null,vec__16358,3,null);var c = vec__16358;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,c,i);
return breakout.core.check_side_wall_collision.call(null,state,i,c_width);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i){breakout.core.move_ball.call(null,state,i);
return breakout.core.check_collisions.call(null,state,i,c);
});
breakout.core.game_loop = (function game_loop(state,p__16359){var vec__16365 = p__16359;var canvas = cljs.core.nth.call(null,vec__16365,0,null);var context = cljs.core.nth.call(null,vec__16365,1,null);var c_width = cljs.core.nth.call(null,vec__16365,2,null);var c_height = cljs.core.nth.call(null,vec__16365,3,null);var c = vec__16365;cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16366(s__16367){return (new cljs.core.LazySeq(null,(function (){var s__16367__$1 = s__16367;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16367__$1);if(temp__4092__auto__)
{var s__16367__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16367__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16367__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16369 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16368 = 0;while(true){
if((i__16368 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__16368);cljs.core.chunk_append.call(null,b__16369,breakout.core.tick_one_ball.call(null,state,c,i));
{
var G__16370 = (i__16368 + 1);
i__16368 = G__16370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16369),iter__16366.call(null,cljs.core.chunk_rest.call(null,s__16367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16369),null);
}
} else
{var i = cljs.core.first.call(null,s__16367__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,state,c,i),iter__16366.call(null,cljs.core.rest.call(null,s__16367__$2)));
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
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__16397 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__16397,0,null);var context = cljs.core.nth.call(null,vec__16397,1,null);var c_width = cljs.core.nth.call(null,vec__16397,2,null);var c_height = cljs.core.nth.call(null,vec__16397,3,null);var c = vec__16397;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_16411){var state_val_16412 = (state_16411[1]);if((state_val_16412 === 7))
{var inst_16402 = (state_16411[2]);var inst_16403 = breakout.core.game_loop.call(null,state,c);var state_16411__$1 = (function (){var statearr_16413 = state_16411;(statearr_16413[5] = inst_16403);
(statearr_16413[6] = inst_16402);
return statearr_16413;
})();var statearr_16414_16423 = state_16411__$1;(statearr_16414_16423[2] = null);
(statearr_16414_16423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 6))
{var inst_16407 = (state_16411[2]);var state_16411__$1 = state_16411;var statearr_16415_16424 = state_16411__$1;(statearr_16415_16424[2] = inst_16407);
(statearr_16415_16424[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 5))
{var state_16411__$1 = state_16411;var statearr_16416_16425 = state_16411__$1;(statearr_16416_16425[2] = null);
(statearr_16416_16425[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 4))
{var inst_16400 = cljs.core.async.timeout.call(null,4);var state_16411__$1 = state_16411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16411__$1,7,inst_16400);
} else
{if((state_val_16412 === 3))
{var inst_16409 = (state_16411[2]);var state_16411__$1 = state_16411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16411__$1,inst_16409);
} else
{if((state_val_16412 === 2))
{var state_16411__$1 = state_16411;if(true)
{var statearr_16417_16426 = state_16411__$1;(statearr_16417_16426[1] = 4);
} else
{var statearr_16418_16427 = state_16411__$1;(statearr_16418_16427[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16412 === 1))
{var state_16411__$1 = state_16411;var statearr_16419_16428 = state_16411__$1;(statearr_16419_16428[2] = null);
(statearr_16419_16428[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_16421 = (new Array(7));(statearr_16421[0] = state_machine__5176__auto__);
(statearr_16421[1] = 1);
return statearr_16421;
});
var state_machine__5176__auto____1 = (function (state_16411){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16411);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16411){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_16422 = f__5226__auto__.call(null);(statearr_16422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init_async = (function init_async(){var vec__16538 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__16538,0,null);var context = cljs.core.nth.call(null,vec__16538,1,null);var c_width = cljs.core.nth.call(null,vec__16538,2,null);var c_height = cljs.core.nth.call(null,vec__16538,3,null);var c = vec__16538;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__16539(s__16540){return (new cljs.core.LazySeq(null,(function (){var s__16540__$1 = s__16540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16540__$1);if(temp__4092__auto__)
{var s__16540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16540__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__16540__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__16542 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__16541 = 0;while(true){
if((i__16541 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__16541);cljs.core.chunk_append.call(null,b__16542,(function (){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (i__16541,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__){
return (function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = ((function (i__16541,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__){
return (function (state_16609){var state_val_16610 = (state_16609[1]);if((state_val_16610 === 7))
{var inst_16599 = (state_16609[2]);var inst_16600 = breakout.core.move_draw_ball.call(null,state,c,i);var inst_16601 = breakout.core.check_collisions.call(null,state,i,c);var state_16609__$1 = (function (){var statearr_16611 = state_16609;(statearr_16611[5] = inst_16599);
(statearr_16611[6] = inst_16601);
(statearr_16611[7] = inst_16600);
return statearr_16611;
})();var statearr_16612_16647 = state_16609__$1;(statearr_16612_16647[2] = null);
(statearr_16612_16647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16610 === 6))
{var inst_16605 = (state_16609[2]);var state_16609__$1 = state_16609;var statearr_16613_16648 = state_16609__$1;(statearr_16613_16648[2] = inst_16605);
(statearr_16613_16648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16610 === 5))
{var state_16609__$1 = state_16609;var statearr_16614_16649 = state_16609__$1;(statearr_16614_16649[2] = null);
(statearr_16614_16649[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16610 === 4))
{var inst_16597 = cljs.core.async.timeout.call(null,5);var state_16609__$1 = state_16609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16609__$1,7,inst_16597);
} else
{if((state_val_16610 === 3))
{var inst_16607 = (state_16609[2]);var state_16609__$1 = state_16609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16609__$1,inst_16607);
} else
{if((state_val_16610 === 2))
{var state_16609__$1 = state_16609;if(true)
{var statearr_16615_16650 = state_16609__$1;(statearr_16615_16650[1] = 4);
} else
{var statearr_16616_16651 = state_16609__$1;(statearr_16616_16651[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16610 === 1))
{var state_16609__$1 = state_16609;var statearr_16617_16652 = state_16609__$1;(statearr_16617_16652[2] = null);
(statearr_16617_16652[1] = 2);
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
});})(i__16541,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__))
;return ((function (i__16541,switch__5175__auto__,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16619 = (new Array(8));(statearr_16619[0] = state_machine__5176__auto__);
(statearr_16619[1] = 1);
return statearr_16619;
});
var state_machine__5176__auto____1 = (function (state_16609){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16609);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(i__16541,switch__5175__auto__,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__))
})();var state__5227__auto__ = (function (){var statearr_16620 = f__5226__auto__.call(null);(statearr_16620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
});})(i__16541,c__5225__auto__,i,c__3637__auto__,size__3638__auto__,b__16542,s__16540__$2,temp__4092__auto__))
);
return c__5225__auto__;
})());
{
var G__16653 = (i__16541 + 1);
i__16541 = G__16653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16542),iter__16539.call(null,cljs.core.chunk_rest.call(null,s__16540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16542),null);
}
} else
{var i = cljs.core.first.call(null,s__16540__$2);return cljs.core.cons.call(null,(function (){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5225__auto__,i,s__16540__$2,temp__4092__auto__){
return (function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = ((function (c__5225__auto__,i,s__16540__$2,temp__4092__auto__){
return (function (state_16635){var state_val_16636 = (state_16635[1]);if((state_val_16636 === 7))
{var inst_16625 = (state_16635[2]);var inst_16626 = breakout.core.move_draw_ball.call(null,state,c,i);var inst_16627 = breakout.core.check_collisions.call(null,state,i,c);var state_16635__$1 = (function (){var statearr_16637 = state_16635;(statearr_16637[5] = inst_16626);
(statearr_16637[6] = inst_16627);
(statearr_16637[7] = inst_16625);
return statearr_16637;
})();var statearr_16638_16654 = state_16635__$1;(statearr_16638_16654[2] = null);
(statearr_16638_16654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16636 === 6))
{var inst_16631 = (state_16635[2]);var state_16635__$1 = state_16635;var statearr_16639_16655 = state_16635__$1;(statearr_16639_16655[2] = inst_16631);
(statearr_16639_16655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16636 === 5))
{var state_16635__$1 = state_16635;var statearr_16640_16656 = state_16635__$1;(statearr_16640_16656[2] = null);
(statearr_16640_16656[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16636 === 4))
{var inst_16623 = cljs.core.async.timeout.call(null,5);var state_16635__$1 = state_16635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16635__$1,7,inst_16623);
} else
{if((state_val_16636 === 3))
{var inst_16633 = (state_16635[2]);var state_16635__$1 = state_16635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16635__$1,inst_16633);
} else
{if((state_val_16636 === 2))
{var state_16635__$1 = state_16635;if(true)
{var statearr_16641_16657 = state_16635__$1;(statearr_16641_16657[1] = 4);
} else
{var statearr_16642_16658 = state_16635__$1;(statearr_16642_16658[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16636 === 1))
{var state_16635__$1 = state_16635;var statearr_16643_16659 = state_16635__$1;(statearr_16643_16659[2] = null);
(statearr_16643_16659[1] = 2);
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
});})(c__5225__auto__,i,s__16540__$2,temp__4092__auto__))
;return ((function (switch__5175__auto__,c__5225__auto__,i,s__16540__$2,temp__4092__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_16645 = (new Array(8));(statearr_16645[0] = state_machine__5176__auto__);
(statearr_16645[1] = 1);
return statearr_16645;
});
var state_machine__5176__auto____1 = (function (state_16635){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_16635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_16635){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_16635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__,c__5225__auto__,i,s__16540__$2,temp__4092__auto__))
})();var state__5227__auto__ = (function (){var statearr_16646 = f__5226__auto__.call(null);(statearr_16646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_16646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
});})(c__5225__auto__,i,s__16540__$2,temp__4092__auto__))
);
return c__5225__auto__;
})(),iter__16539.call(null,cljs.core.rest.call(null,s__16540__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278)))));
})());
});
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map