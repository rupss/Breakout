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
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12713(s__12714){return (new cljs.core.LazySeq(null,(function (){var s__12714__$1 = s__12714;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12714__$1);if(temp__4092__auto__)
{var s__12714__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12714__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12714__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12716 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12715 = 0;while(true){
if((i__12715 < size__3638__auto__))
{var vec__12719 = cljs.core._nth.call(null,c__3637__auto__,i__12715);var x = cljs.core.nth.call(null,vec__12719,0,null);var y = cljs.core.nth.call(null,vec__12719,1,null);var dx = cljs.core.nth.call(null,vec__12719,2,null);var dy = cljs.core.nth.call(null,vec__12719,3,null);cljs.core.chunk_append.call(null,b__12716,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__12721 = (i__12715 + 1);
i__12715 = G__12721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12716),iter__12713.call(null,cljs.core.chunk_rest.call(null,s__12714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12716),null);
}
} else
{var vec__12720 = cljs.core.first.call(null,s__12714__$2);var x = cljs.core.nth.call(null,vec__12720,0,null);var y = cljs.core.nth.call(null,vec__12720,1,null);var dx = cljs.core.nth.call(null,vec__12720,2,null);var dy = cljs.core.nth.call(null,vec__12720,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__12713.call(null,cljs.core.rest.call(null,s__12714__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__12722,p__12723,color,radius){var vec__12726 = p__12722;var ball_x = cljs.core.nth.call(null,vec__12726,0,null);var ball_y = cljs.core.nth.call(null,vec__12726,1,null);var dx = cljs.core.nth.call(null,vec__12726,2,null);var dy = cljs.core.nth.call(null,vec__12726,3,null);var vec__12727 = p__12723;var canvas = cljs.core.nth.call(null,vec__12727,0,null);var context = cljs.core.nth.call(null,vec__12727,1,null);var c_width = cljs.core.nth.call(null,vec__12727,2,null);var c_height = cljs.core.nth.call(null,vec__12727,3,null);var c = vec__12727;context.beginPath();
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
breakout.core.draw_brick = (function draw_brick(p__12728,p__12729,color){var vec__12732 = p__12728;var brick_x = cljs.core.nth.call(null,vec__12732,0,null);var brick_y = cljs.core.nth.call(null,vec__12732,1,null);var vec__12733 = p__12729;var canvas = cljs.core.nth.call(null,vec__12733,0,null);var context = cljs.core.nth.call(null,vec__12733,1,null);var c_width = cljs.core.nth.call(null,vec__12733,2,null);var c_height = cljs.core.nth.call(null,vec__12733,3,null);var c = vec__12733;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__12734,p__12735,color){var vec__12738 = p__12734;var brick_x = cljs.core.nth.call(null,vec__12738,0,null);var brick_y = cljs.core.nth.call(null,vec__12738,1,null);var vec__12739 = p__12735;var canvas = cljs.core.nth.call(null,vec__12739,0,null);var context = cljs.core.nth.call(null,vec__12739,1,null);var c_width = cljs.core.nth.call(null,vec__12739,2,null);var c_height = cljs.core.nth.call(null,vec__12739,3,null);var c = vec__12739;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(p__12740,state){var vec__12755 = p__12740;var canvas = cljs.core.nth.call(null,vec__12755,0,null);var context = cljs.core.nth.call(null,vec__12755,1,null);var c_width = cljs.core.nth.call(null,vec__12755,2,null);var c_height = cljs.core.nth.call(null,vec__12755,3,null);var c = vec__12755;var vec__12756 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__12756,0,null);var block_y = cljs.core.nth.call(null,vec__12756,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12757(s__12758){return (new cljs.core.LazySeq(null,(function (){var s__12758__$1 = s__12758;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12758__$1);if(temp__4092__auto__)
{var s__12758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12758__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12758__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12760 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12759 = 0;while(true){
if((i__12759 < size__3638__auto__))
{var vec__12763 = cljs.core._nth.call(null,c__3637__auto__,i__12759);var brick_x = cljs.core.nth.call(null,vec__12763,0,null);var brick_y = cljs.core.nth.call(null,vec__12763,1,null);var brick = vec__12763;cljs.core.chunk_append.call(null,b__12760,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__12769 = (i__12759 + 1);
i__12759 = G__12769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12760),iter__12757.call(null,cljs.core.chunk_rest.call(null,s__12758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12760),null);
}
} else
{var vec__12764 = cljs.core.first.call(null,s__12758__$2);var brick_x = cljs.core.nth.call(null,vec__12764,0,null);var brick_y = cljs.core.nth.call(null,vec__12764,1,null);var brick = vec__12764;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__12757.call(null,cljs.core.rest.call(null,s__12758__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12765(s__12766){return (new cljs.core.LazySeq(null,(function (){var s__12766__$1 = s__12766;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12766__$1);if(temp__4092__auto__)
{var s__12766__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12766__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12766__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12768 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12767 = 0;while(true){
if((i__12767 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__12767);cljs.core.chunk_append.call(null,b__12768,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__12770 = (i__12767 + 1);
i__12767 = G__12770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12768),iter__12765.call(null,cljs.core.chunk_rest.call(null,s__12766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12768),null);
}
} else
{var ball = cljs.core.first.call(null,s__12766__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__12765.call(null,cljs.core.rest.call(null,s__12766__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__12771){var vec__12779 = p__12771;var canvas = cljs.core.nth.call(null,vec__12779,0,null);var context = cljs.core.nth.call(null,vec__12779,1,null);var c_width = cljs.core.nth.call(null,vec__12779,2,null);var c_height = cljs.core.nth.call(null,vec__12779,3,null);var iter__3639__auto__ = (function iter__12780(s__12781){return (new cljs.core.LazySeq(null,(function (){var s__12781__$1 = s__12781;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12781__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__12781__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__12782(s__12783){return (new cljs.core.LazySeq(null,((function (s__12781__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__12783__$1 = s__12783;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__12783__$1);if(temp__4092__auto____$1)
{var s__12783__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12783__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12783__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12785 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12784 = 0;while(true){
if((i__12784 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__12784);cljs.core.chunk_append.call(null,b__12785,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__12786 = (i__12784 + 1);
i__12784 = G__12786;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12785),iter__12782.call(null,cljs.core.chunk_rest.call(null,s__12783__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12785),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__12783__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__12782.call(null,cljs.core.rest.call(null,s__12783__$2)));
}
} else
{return null;
}
break;
}
});})(s__12781__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__12781__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__12780.call(null,cljs.core.rest.call(null,s__12781__$1)));
} else
{{
var G__12787 = cljs.core.rest.call(null,s__12781__$1);
s__12781__$1 = G__12787;
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
breakout.core.init_block = (function init_block(p__12788){var vec__12790 = p__12788;var canvas = cljs.core.nth.call(null,vec__12790,0,null);var context = cljs.core.nth.call(null,vec__12790,1,null);var c_width = cljs.core.nth.call(null,vec__12790,2,null);var c_height = cljs.core.nth.call(null,vec__12790,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__12791){var vec__12793 = p__12791;var canvas = cljs.core.nth.call(null,vec__12793,0,null);var context = cljs.core.nth.call(null,vec__12793,1,null);var c_width = cljs.core.nth.call(null,vec__12793,2,null);var c_height = cljs.core.nth.call(null,vec__12793,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,1.2,1.5], true),cljs.core.PersistentVector.fromArray([150,center_y,-3,3], true),cljs.core.PersistentVector.fromArray([350,center_y,-2,-2.2], true)], true);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.get_curr_time = (function get_curr_time(){return Date.now();
});
breakout.core.move_ball = (function move_ball(state,i,prev_tick_time){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12795 = cljs.core.nth.call(null,old_balls,i);var old_ball_x = cljs.core.nth.call(null,vec__12795,0,null);var old_ball_y = cljs.core.nth.call(null,vec__12795,1,null);var old_dx = cljs.core.nth.call(null,vec__12795,2,null);var old_dy = cljs.core.nth.call(null,vec__12795,3,null);var old_ball = vec__12795;var curr_time = breakout.core.get_curr_time.call(null);var elapsed_time = ((curr_time - prev_tick_time) / 1000000000000);var new_ball = cljs.core.PersistentVector.fromArray([((old_dx + old_ball_x) + (old_dx * elapsed_time)),((old_dy + old_ball_y) + (old_dy * elapsed_time)),old_dx,old_dy], true);var new_balls = cljs.core.assoc.call(null,old_balls,i,new_ball);cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);
breakout.core.log.call(null,"elapsed time");
breakout.core.log.call(null,(curr_time - prev_tick_time));
breakout.core.log.call(null,"old ball");
breakout.core.log.call(null,old_ball_x);
breakout.core.log.call(null,old_ball_y);
breakout.core.log.call(null,"new ball");
breakout.core.log.call(null,cljs.core.first.call(null,new_ball));
return breakout.core.log.call(null,cljs.core.nth.call(null,new_ball,1));
});
breakout.core.get_four_points = (function get_four_points(p__12796){var vec__12798 = p__12796;var ball_x = cljs.core.nth.call(null,vec__12798,0,null);var ball_y = cljs.core.nth.call(null,vec__12798,1,null);var dx = cljs.core.nth.call(null,vec__12798,2,null);var dy = cljs.core.nth.call(null,vec__12798,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__12799,p__12800,rect_width,rect_height){var vec__12803 = p__12799;var x = cljs.core.nth.call(null,vec__12803,0,null);var y = cljs.core.nth.call(null,vec__12803,1,null);var vec__12804 = p__12800;var rect_x = cljs.core.nth.call(null,vec__12804,0,null);var rect_y = cljs.core.nth.call(null,vec__12804,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12805_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__12805_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__12806,i,direction_to_reverse){var vec__12808 = p__12806;var ball_x = cljs.core.nth.call(null,vec__12808,0,null);var ball_y = cljs.core.nth.call(null,vec__12808,1,null);var dx = cljs.core.nth.call(null,vec__12808,2,null);var dy = cljs.core.nth.call(null,vec__12808,3,null);var ball = vec__12808;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__12810 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__12810,0,null);var ball_y = cljs.core.nth.call(null,vec__12810,1,null);var old_dx = cljs.core.nth.call(null,vec__12810,2,null);var old_dy = cljs.core.nth.call(null,vec__12810,3,null);var ball = vec__12810;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__12811,p__12812){var vec__12815 = p__12811;var x = cljs.core.nth.call(null,vec__12815,0,null);var y = cljs.core.nth.call(null,vec__12815,1,null);var vec__12816 = p__12812;var block_x = cljs.core.nth.call(null,vec__12816,0,null);var block_y = cljs.core.nth.call(null,vec__12816,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12817_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__12817_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__12818_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__12818_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{breakout.core.log.call(null,"HIT");
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12823(s__12824){return (new cljs.core.LazySeq(null,(function (){var s__12824__$1 = s__12824;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12824__$1);if(temp__4092__auto__)
{var s__12824__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12824__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12824__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12826 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12825 = 0;while(true){
if((i__12825 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__12825);cljs.core.chunk_append.call(null,b__12826,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__12827 = (i__12825 + 1);
i__12825 = G__12827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12826),iter__12823.call(null,cljs.core.chunk_rest.call(null,s__12824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12826),null);
}
} else
{var brick = cljs.core.first.call(null,s__12824__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__12823.call(null,cljs.core.rest.call(null,s__12824__$2)));
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
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__12828,c_width){var vec__12830 = p__12828;var x = cljs.core.nth.call(null,vec__12830,0,null);var y = cljs.core.nth.call(null,vec__12830,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__12831_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__12831_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462)));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__12832){var vec__12834 = p__12832;var canvas = cljs.core.nth.call(null,vec__12834,0,null);var context = cljs.core.nth.call(null,vec__12834,1,null);var c_width = cljs.core.nth.call(null,vec__12834,2,null);var c_height = cljs.core.nth.call(null,vec__12834,3,null);var c = vec__12834;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,c,i);
return breakout.core.check_side_wall_collision.call(null,state,i,c_width);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i,prev_tick_time){breakout.core.move_ball.call(null,state,i,prev_tick_time);
return breakout.core.check_collisions.call(null,state,i,c);
});
breakout.core.game_loop = (function game_loop(state,p__12835,prev_tick_time){var vec__12841 = p__12835;var canvas = cljs.core.nth.call(null,vec__12841,0,null);var context = cljs.core.nth.call(null,vec__12841,1,null);var c_width = cljs.core.nth.call(null,vec__12841,2,null);var c_height = cljs.core.nth.call(null,vec__12841,3,null);var c = vec__12841;cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__12842(s__12843){return (new cljs.core.LazySeq(null,(function (){var s__12843__$1 = s__12843;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12843__$1);if(temp__4092__auto__)
{var s__12843__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12843__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__12843__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__12845 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__12844 = 0;while(true){
if((i__12844 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__12844);cljs.core.chunk_append.call(null,b__12845,breakout.core.tick_one_ball.call(null,state,c,i,prev_tick_time));
{
var G__12846 = (i__12844 + 1);
i__12844 = G__12846;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12845),iter__12842.call(null,cljs.core.chunk_rest.call(null,s__12843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12845),null);
}
} else
{var i = cljs.core.first.call(null,s__12843__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,state,c,i,prev_tick_time),iter__12842.call(null,cljs.core.rest.call(null,s__12843__$2)));
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
breakout.core.init_deltas = (function init_deltas(){var vec__12868 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__12868,0,null);var context = cljs.core.nth.call(null,vec__12868,1,null);var c_width = cljs.core.nth.call(null,vec__12868,2,null);var c_height = cljs.core.nth.call(null,vec__12868,3,null);var c = vec__12868;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12880){var state_val_12881 = (state_12880[1]);if((state_val_12881 === 4))
{var inst_12869 = (state_12880[5]);var inst_12873 = (state_12880[2]);var inst_12874 = breakout.core.get_curr_time.call(null);var inst_12875 = breakout.core.game_loop.call(null,state,c,inst_12869);var inst_12869__$1 = inst_12874;var state_12880__$1 = (function (){var statearr_12882 = state_12880;(statearr_12882[6] = inst_12873);
(statearr_12882[5] = inst_12869__$1);
(statearr_12882[7] = inst_12875);
return statearr_12882;
})();var statearr_12883_12889 = state_12880__$1;(statearr_12883_12889[2] = null);
(statearr_12883_12889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 3))
{var inst_12878 = (state_12880[2]);var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12880__$1,inst_12878);
} else
{if((state_val_12881 === 2))
{var inst_12871 = cljs.core.async.timeout.call(null,4);var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12880__$1,4,inst_12871);
} else
{if((state_val_12881 === 1))
{var inst_12869 = null;var state_12880__$1 = (function (){var statearr_12884 = state_12880;(statearr_12884[5] = inst_12869);
return statearr_12884;
})();var statearr_12885_12890 = state_12880__$1;(statearr_12885_12890[2] = null);
(statearr_12885_12890[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_12887 = (new Array(8));(statearr_12887[0] = state_machine__5176__auto__);
(statearr_12887[1] = 1);
return statearr_12887;
});
var state_machine__5176__auto____1 = (function (state_12880){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12880){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12888 = f__5226__auto__.call(null);(statearr_12888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_12888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.init_deltas.call(null);

//@ sourceMappingURL=core.js.map