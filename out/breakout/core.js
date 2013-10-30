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
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__11517(s__11518){return (new cljs.core.LazySeq(null,(function (){var s__11518__$1 = s__11518;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11518__$1);if(temp__4092__auto__)
{var s__11518__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11518__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__11518__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__11520 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__11519 = 0;while(true){
if((i__11519 < size__3638__auto__))
{var vec__11523 = cljs.core._nth.call(null,c__3637__auto__,i__11519);var x = cljs.core.nth.call(null,vec__11523,0,null);var y = cljs.core.nth.call(null,vec__11523,1,null);var dx = cljs.core.nth.call(null,vec__11523,2,null);var dy = cljs.core.nth.call(null,vec__11523,3,null);cljs.core.chunk_append.call(null,b__11520,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__11525 = (i__11519 + 1);
i__11519 = G__11525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11520),iter__11517.call(null,cljs.core.chunk_rest.call(null,s__11518__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11520),null);
}
} else
{var vec__11524 = cljs.core.first.call(null,s__11518__$2);var x = cljs.core.nth.call(null,vec__11524,0,null);var y = cljs.core.nth.call(null,vec__11524,1,null);var dx = cljs.core.nth.call(null,vec__11524,2,null);var dy = cljs.core.nth.call(null,vec__11524,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__11517.call(null,cljs.core.rest.call(null,s__11518__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__11526,p__11527,color,radius){var vec__11530 = p__11526;var ball_x = cljs.core.nth.call(null,vec__11530,0,null);var ball_y = cljs.core.nth.call(null,vec__11530,1,null);var dx = cljs.core.nth.call(null,vec__11530,2,null);var dy = cljs.core.nth.call(null,vec__11530,3,null);var vec__11531 = p__11527;var canvas = cljs.core.nth.call(null,vec__11531,0,null);var context = cljs.core.nth.call(null,vec__11531,1,null);var c_width = cljs.core.nth.call(null,vec__11531,2,null);var c_height = cljs.core.nth.call(null,vec__11531,3,null);var c = vec__11531;context.beginPath();
context.arc(ball_x,ball_y,radius,0,(2 * Math.PI),true);
context.fillStyle = color;
context.fill();
return context.closePath();
});
breakout.core.draw_ball = (function draw_ball(ball,c,color){if(cljs.core._EQ_.call(null,color,"white"))
{return breakout.core.draw_sized_circle.call(null,ball,c,color,(breakout.core.ball_radius + 0.8));
} else
{if(cljs.core._EQ_.call(null,color,"black"))
{return breakout.core.draw_sized_circle.call(null,ball,c,color,breakout.core.ball_radius);
} else
{return null;
}
}
});
breakout.core.draw_everything = (function draw_everything(p__11532,state){var vec__11547 = p__11532;var canvas = cljs.core.nth.call(null,vec__11547,0,null);var context = cljs.core.nth.call(null,vec__11547,1,null);var c_width = cljs.core.nth.call(null,vec__11547,2,null);var c_height = cljs.core.nth.call(null,vec__11547,3,null);var c = vec__11547;var vec__11548 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__11548,0,null);var block_y = cljs.core.nth.call(null,vec__11548,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__11549(s__11550){return (new cljs.core.LazySeq(null,(function (){var s__11550__$1 = s__11550;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11550__$1);if(temp__4092__auto__)
{var s__11550__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11550__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__11550__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__11552 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__11551 = 0;while(true){
if((i__11551 < size__3638__auto__))
{var vec__11555 = cljs.core._nth.call(null,c__3637__auto__,i__11551);var brick_x = cljs.core.nth.call(null,vec__11555,0,null);var brick_y = cljs.core.nth.call(null,vec__11555,1,null);cljs.core.chunk_append.call(null,b__11552,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__11561 = (i__11551 + 1);
i__11551 = G__11561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11552),iter__11549.call(null,cljs.core.chunk_rest.call(null,s__11550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11552),null);
}
} else
{var vec__11556 = cljs.core.first.call(null,s__11550__$2);var brick_x = cljs.core.nth.call(null,vec__11556,0,null);var brick_y = cljs.core.nth.call(null,vec__11556,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__11549.call(null,cljs.core.rest.call(null,s__11550__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__11557(s__11558){return (new cljs.core.LazySeq(null,(function (){var s__11558__$1 = s__11558;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11558__$1);if(temp__4092__auto__)
{var s__11558__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11558__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__11558__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__11560 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__11559 = 0;while(true){
if((i__11559 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__11559);cljs.core.chunk_append.call(null,b__11560,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__11562 = (i__11559 + 1);
i__11559 = G__11562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11560),iter__11557.call(null,cljs.core.chunk_rest.call(null,s__11558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11560),null);
}
} else
{var ball = cljs.core.first.call(null,s__11558__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__11557.call(null,cljs.core.rest.call(null,s__11558__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__11563){var vec__11571 = p__11563;var canvas = cljs.core.nth.call(null,vec__11571,0,null);var context = cljs.core.nth.call(null,vec__11571,1,null);var c_width = cljs.core.nth.call(null,vec__11571,2,null);var c_height = cljs.core.nth.call(null,vec__11571,3,null);var iter__3639__auto__ = (function iter__11572(s__11573){return (new cljs.core.LazySeq(null,(function (){var s__11573__$1 = s__11573;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11573__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__11573__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__11574(s__11575){return (new cljs.core.LazySeq(null,((function (s__11573__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11575__$1 = s__11575;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11575__$1);if(temp__4092__auto____$1)
{var s__11575__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11575__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__11575__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__11577 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__11576 = 0;while(true){
if((i__11576 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__11576);cljs.core.chunk_append.call(null,b__11577,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__11578 = (i__11576 + 1);
i__11576 = G__11578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11577),iter__11574.call(null,cljs.core.chunk_rest.call(null,s__11575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11577),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__11575__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__11574.call(null,cljs.core.rest.call(null,s__11575__$2)));
}
} else
{return null;
}
break;
}
});})(s__11573__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11573__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__11572.call(null,cljs.core.rest.call(null,s__11573__$1)));
} else
{{
var G__11579 = cljs.core.rest.call(null,s__11573__$1);
s__11573__$1 = G__11579;
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
breakout.core.init_block = (function init_block(p__11580){var vec__11582 = p__11580;var canvas = cljs.core.nth.call(null,vec__11582,0,null);var context = cljs.core.nth.call(null,vec__11582,1,null);var c_width = cljs.core.nth.call(null,vec__11582,2,null);var c_height = cljs.core.nth.call(null,vec__11582,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__11583){var vec__11585 = p__11583;var canvas = cljs.core.nth.call(null,vec__11585,0,null);var context = cljs.core.nth.call(null,vec__11585,1,null);var c_width = cljs.core.nth.call(null,vec__11585,2,null);var c_height = cljs.core.nth.call(null,vec__11585,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,0.5,1], true),cljs.core.PersistentVector.fromArray([150,center_y,-2,2], true),cljs.core.PersistentVector.fromArray([350,center_y,-1.2,1.3], true)], true);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.move_ball = (function move_ball(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__11587 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__11587,0,null);var old_ball_y = cljs.core.nth.call(null,vec__11587,1,null);var old_dx = cljs.core.nth.call(null,vec__11587,2,null);var old_dy = cljs.core.nth.call(null,vec__11587,3,null);var old_ball = vec__11587;var new_ball = cljs.core.PersistentVector.fromArray([(old_dx + old_ball_x),(old_dy + old_ball_y),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);
return cljs.core.PersistentVector.fromArray([old_ball,new_ball], true);
});
breakout.core.move_draw_ball = (function move_draw_ball(state,c,i){var vec__11589 = breakout.core.move_ball.call(null,state,i);var old_ball = cljs.core.nth.call(null,vec__11589,0,null);var new_ball = cljs.core.nth.call(null,vec__11589,1,null);breakout.core.draw_ball.call(null,old_ball,c,"white");
return breakout.core.draw_ball.call(null,new_ball,c,"black");
});
breakout.core.get_four_points = (function get_four_points(p__11590){var vec__11592 = p__11590;var ball_x = cljs.core.nth.call(null,vec__11592,0,null);var ball_y = cljs.core.nth.call(null,vec__11592,1,null);var dx = cljs.core.nth.call(null,vec__11592,2,null);var dy = cljs.core.nth.call(null,vec__11592,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__11593,p__11594,rect_width,rect_height){var vec__11597 = p__11593;var x = cljs.core.nth.call(null,vec__11597,0,null);var y = cljs.core.nth.call(null,vec__11597,1,null);var vec__11598 = p__11594;var rect_x = cljs.core.nth.call(null,vec__11598,0,null);var rect_y = cljs.core.nth.call(null,vec__11598,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__11599_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__11599_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__11600,i,direction_to_reverse){var vec__11602 = p__11600;var ball_x = cljs.core.nth.call(null,vec__11602,0,null);var ball_y = cljs.core.nth.call(null,vec__11602,1,null);var dx = cljs.core.nth.call(null,vec__11602,2,null);var dy = cljs.core.nth.call(null,vec__11602,3,null);var ball = vec__11602;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__11604 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__11604,0,null);var ball_y = cljs.core.nth.call(null,vec__11604,1,null);var old_dx = cljs.core.nth.call(null,vec__11604,2,null);var old_dy = cljs.core.nth.call(null,vec__11604,3,null);var ball = vec__11604;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__11605,p__11606){var vec__11609 = p__11605;var x = cljs.core.nth.call(null,vec__11609,0,null);var y = cljs.core.nth.call(null,vec__11609,1,null);var vec__11610 = p__11606;var block_x = cljs.core.nth.call(null,vec__11610,0,null);var block_y = cljs.core.nth.call(null,vec__11610,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__11611_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__11611_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__11612_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__11612_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__11613,c_width){var vec__11615 = p__11613;var x = cljs.core.nth.call(null,vec__11615,0,null);var y = cljs.core.nth.call(null,vec__11615,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__11616_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__11616_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462)));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__11617){var vec__11619 = p__11617;var canvas = cljs.core.nth.call(null,vec__11619,0,null);var context = cljs.core.nth.call(null,vec__11619,1,null);var c_width = cljs.core.nth.call(null,vec__11619,2,null);var c_height = cljs.core.nth.call(null,vec__11619,3,null);var c = vec__11619;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,i);
return breakout.core.check_side_wall_collision.call(null,state,i,c_width);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i){breakout.core.move_ball.call(null,state,i);
return breakout.core.check_collisions.call(null,state,i,c);
});
breakout.core.game_loop = (function game_loop(state,p__11620){var vec__11626 = p__11620;var canvas = cljs.core.nth.call(null,vec__11626,0,null);var context = cljs.core.nth.call(null,vec__11626,1,null);var c_width = cljs.core.nth.call(null,vec__11626,2,null);var c_height = cljs.core.nth.call(null,vec__11626,3,null);var c = vec__11626;cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__11627(s__11628){return (new cljs.core.LazySeq(null,(function (){var s__11628__$1 = s__11628;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11628__$1);if(temp__4092__auto__)
{var s__11628__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11628__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__11628__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__11630 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__11629 = 0;while(true){
if((i__11629 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__11629);cljs.core.chunk_append.call(null,b__11630,breakout.core.tick_one_ball.call(null,state,c,i));
{
var G__11631 = (i__11629 + 1);
i__11629 = G__11631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11630),iter__11627.call(null,cljs.core.chunk_rest.call(null,s__11628__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11630),null);
}
} else
{var i = cljs.core.first.call(null,s__11628__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,state,c,i),iter__11627.call(null,cljs.core.rest.call(null,s__11628__$2)));
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
breakout.core.init = (function init(){var vec__11658 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__11658,0,null);var context = cljs.core.nth.call(null,vec__11658,1,null);var c_width = cljs.core.nth.call(null,vec__11658,2,null);var c_height = cljs.core.nth.call(null,vec__11658,3,null);var c = vec__11658;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11672){var state_val_11673 = (state_11672[1]);if((state_val_11673 === 7))
{var inst_11663 = (state_11672[2]);var inst_11664 = breakout.core.game_loop.call(null,state,c);var state_11672__$1 = (function (){var statearr_11674 = state_11672;(statearr_11674[5] = inst_11664);
(statearr_11674[6] = inst_11663);
return statearr_11674;
})();var statearr_11675_11684 = state_11672__$1;(statearr_11675_11684[2] = null);
(statearr_11675_11684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11673 === 6))
{var inst_11668 = (state_11672[2]);var state_11672__$1 = state_11672;var statearr_11676_11685 = state_11672__$1;(statearr_11676_11685[2] = inst_11668);
(statearr_11676_11685[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11673 === 5))
{var state_11672__$1 = state_11672;var statearr_11677_11686 = state_11672__$1;(statearr_11677_11686[2] = null);
(statearr_11677_11686[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11673 === 4))
{var inst_11661 = cljs.core.async.timeout.call(null,4);var state_11672__$1 = state_11672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11672__$1,7,inst_11661);
} else
{if((state_val_11673 === 3))
{var inst_11670 = (state_11672[2]);var state_11672__$1 = state_11672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11672__$1,inst_11670);
} else
{if((state_val_11673 === 2))
{var state_11672__$1 = state_11672;if(true)
{var statearr_11678_11687 = state_11672__$1;(statearr_11678_11687[1] = 4);
} else
{var statearr_11679_11688 = state_11672__$1;(statearr_11679_11688[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11673 === 1))
{var state_11672__$1 = state_11672;var statearr_11680_11689 = state_11672__$1;(statearr_11680_11689[2] = null);
(statearr_11680_11689[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_11682 = (new Array(7));(statearr_11682[0] = state_machine__5176__auto__);
(statearr_11682[1] = 1);
return statearr_11682;
});
var state_machine__5176__auto____1 = (function (state_11672){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11672);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11672){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11683 = f__5226__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init_async = (function init_async(){var vec__11716 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__11716,0,null);var context = cljs.core.nth.call(null,vec__11716,1,null);var c_width = cljs.core.nth.call(null,vec__11716,2,null);var c_height = cljs.core.nth.call(null,vec__11716,3,null);var c = vec__11716;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11730){var state_val_11731 = (state_11730[1]);if((state_val_11731 === 7))
{var inst_11721 = (state_11730[2]);var inst_11722 = breakout.core.move_draw_ball.call(null,state,c,0);var state_11730__$1 = (function (){var statearr_11732 = state_11730;(statearr_11732[5] = inst_11721);
(statearr_11732[6] = inst_11722);
return statearr_11732;
})();var statearr_11733_11742 = state_11730__$1;(statearr_11733_11742[2] = null);
(statearr_11733_11742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11731 === 6))
{var inst_11726 = (state_11730[2]);var state_11730__$1 = state_11730;var statearr_11734_11743 = state_11730__$1;(statearr_11734_11743[2] = inst_11726);
(statearr_11734_11743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11731 === 5))
{var state_11730__$1 = state_11730;var statearr_11735_11744 = state_11730__$1;(statearr_11735_11744[2] = null);
(statearr_11735_11744[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11731 === 4))
{var inst_11719 = cljs.core.async.timeout.call(null,5);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11730__$1,7,inst_11719);
} else
{if((state_val_11731 === 3))
{var inst_11728 = (state_11730[2]);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11730__$1,inst_11728);
} else
{if((state_val_11731 === 2))
{var state_11730__$1 = state_11730;if(true)
{var statearr_11736_11745 = state_11730__$1;(statearr_11736_11745[1] = 4);
} else
{var statearr_11737_11746 = state_11730__$1;(statearr_11737_11746[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11731 === 1))
{var state_11730__$1 = state_11730;var statearr_11738_11747 = state_11730__$1;(statearr_11738_11747[2] = null);
(statearr_11738_11747[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_11740 = (new Array(7));(statearr_11740[0] = state_machine__5176__auto__);
(statearr_11740[1] = 1);
return statearr_11740;
});
var state_machine__5176__auto____1 = (function (state_11730){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11730){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11741 = f__5226__auto__.call(null);(statearr_11741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_11741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.init_async.call(null);

//@ sourceMappingURL=core.js.map