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
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__15799(s__15800){return (new cljs.core.LazySeq(null,(function (){var s__15800__$1 = s__15800;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15800__$1);if(temp__4092__auto__)
{var s__15800__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15800__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15800__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15802 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15801 = 0;while(true){
if((i__15801 < size__3638__auto__))
{var vec__15805 = cljs.core._nth.call(null,c__3637__auto__,i__15801);var x = cljs.core.nth.call(null,vec__15805,0,null);var y = cljs.core.nth.call(null,vec__15805,1,null);var dx = cljs.core.nth.call(null,vec__15805,2,null);var dy = cljs.core.nth.call(null,vec__15805,3,null);cljs.core.chunk_append.call(null,b__15802,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__15807 = (i__15801 + 1);
i__15801 = G__15807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),iter__15799.call(null,cljs.core.chunk_rest.call(null,s__15800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),null);
}
} else
{var vec__15806 = cljs.core.first.call(null,s__15800__$2);var x = cljs.core.nth.call(null,vec__15806,0,null);var y = cljs.core.nth.call(null,vec__15806,1,null);var dx = cljs.core.nth.call(null,vec__15806,2,null);var dy = cljs.core.nth.call(null,vec__15806,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__15799.call(null,cljs.core.rest.call(null,s__15800__$2)));
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
breakout.core.draw_ball = (function draw_ball(p__15808,p__15809){var vec__15812 = p__15808;var ball_x = cljs.core.nth.call(null,vec__15812,0,null);var ball_y = cljs.core.nth.call(null,vec__15812,1,null);var dx = cljs.core.nth.call(null,vec__15812,2,null);var dy = cljs.core.nth.call(null,vec__15812,3,null);var vec__15813 = p__15809;var canvas = cljs.core.nth.call(null,vec__15813,0,null);var context = cljs.core.nth.call(null,vec__15813,1,null);var c_width = cljs.core.nth.call(null,vec__15813,2,null);var c_height = cljs.core.nth.call(null,vec__15813,3,null);var c = vec__15813;context.beginPath();
context.arc(ball_x,ball_y,breakout.core.ball_radius,0,(2 * Math.PI),true);
context.fill();
return context.closePath();
});
breakout.core.draw_everything = (function draw_everything(p__15814,state){var vec__15829 = p__15814;var canvas = cljs.core.nth.call(null,vec__15829,0,null);var context = cljs.core.nth.call(null,vec__15829,1,null);var c_width = cljs.core.nth.call(null,vec__15829,2,null);var c_height = cljs.core.nth.call(null,vec__15829,3,null);var c = vec__15829;var vec__15830 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__15830,0,null);var block_y = cljs.core.nth.call(null,vec__15830,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__15831(s__15832){return (new cljs.core.LazySeq(null,(function (){var s__15832__$1 = s__15832;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15832__$1);if(temp__4092__auto__)
{var s__15832__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15832__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15832__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15834 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15833 = 0;while(true){
if((i__15833 < size__3638__auto__))
{var vec__15837 = cljs.core._nth.call(null,c__3637__auto__,i__15833);var brick_x = cljs.core.nth.call(null,vec__15837,0,null);var brick_y = cljs.core.nth.call(null,vec__15837,1,null);cljs.core.chunk_append.call(null,b__15834,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__15843 = (i__15833 + 1);
i__15833 = G__15843;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15834),iter__15831.call(null,cljs.core.chunk_rest.call(null,s__15832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15834),null);
}
} else
{var vec__15838 = cljs.core.first.call(null,s__15832__$2);var brick_x = cljs.core.nth.call(null,vec__15838,0,null);var brick_y = cljs.core.nth.call(null,vec__15838,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__15831.call(null,cljs.core.rest.call(null,s__15832__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__15839(s__15840){return (new cljs.core.LazySeq(null,(function (){var s__15840__$1 = s__15840;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15840__$1);if(temp__4092__auto__)
{var s__15840__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15840__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15840__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15842 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15841 = 0;while(true){
if((i__15841 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__15841);cljs.core.chunk_append.call(null,b__15842,breakout.core.draw_ball.call(null,ball,c));
{
var G__15844 = (i__15841 + 1);
i__15841 = G__15844;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15842),iter__15839.call(null,cljs.core.chunk_rest.call(null,s__15840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15842),null);
}
} else
{var ball = cljs.core.first.call(null,s__15840__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c),iter__15839.call(null,cljs.core.rest.call(null,s__15840__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__15845){var vec__15853 = p__15845;var canvas = cljs.core.nth.call(null,vec__15853,0,null);var context = cljs.core.nth.call(null,vec__15853,1,null);var c_width = cljs.core.nth.call(null,vec__15853,2,null);var c_height = cljs.core.nth.call(null,vec__15853,3,null);var iter__3639__auto__ = (function iter__15854(s__15855){return (new cljs.core.LazySeq(null,(function (){var s__15855__$1 = s__15855;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15855__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__15855__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__15856(s__15857){return (new cljs.core.LazySeq(null,((function (s__15855__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__15857__$1 = s__15857;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__15857__$1);if(temp__4092__auto____$1)
{var s__15857__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15857__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15857__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15859 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15858 = 0;while(true){
if((i__15858 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__15858);cljs.core.chunk_append.call(null,b__15859,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__15860 = (i__15858 + 1);
i__15858 = G__15860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15859),iter__15856.call(null,cljs.core.chunk_rest.call(null,s__15857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15859),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__15857__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__15856.call(null,cljs.core.rest.call(null,s__15857__$2)));
}
} else
{return null;
}
break;
}
});})(s__15855__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__15855__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__15854.call(null,cljs.core.rest.call(null,s__15855__$1)));
} else
{{
var G__15861 = cljs.core.rest.call(null,s__15855__$1);
s__15855__$1 = G__15861;
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
breakout.core.init_block = (function init_block(p__15862){var vec__15864 = p__15862;var canvas = cljs.core.nth.call(null,vec__15864,0,null);var context = cljs.core.nth.call(null,vec__15864,1,null);var c_width = cljs.core.nth.call(null,vec__15864,2,null);var c_height = cljs.core.nth.call(null,vec__15864,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__15865){var vec__15867 = p__15865;var canvas = cljs.core.nth.call(null,vec__15867,0,null);var context = cljs.core.nth.call(null,vec__15867,1,null);var c_width = cljs.core.nth.call(null,vec__15867,2,null);var c_height = cljs.core.nth.call(null,vec__15867,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,0.5,1], true),cljs.core.PersistentVector.fromArray([150,center_y,-2,2], true),cljs.core.PersistentVector.fromArray([350,center_y,-1.2,1.3], true)], true);
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.move_ball = (function move_ball(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__15869 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__15869,0,null);var ball_y = cljs.core.nth.call(null,vec__15869,1,null);var dx = cljs.core.nth.call(null,vec__15869,2,null);var dy = cljs.core.nth.call(null,vec__15869,3,null);var ball = vec__15869;var new_balls = cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([(dx + ball_x),(dy + ball_y),dx,dy], true));return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),new_balls);
});
breakout.core.get_four_points = (function get_four_points(p__15870){var vec__15872 = p__15870;var ball_x = cljs.core.nth.call(null,vec__15872,0,null);var ball_y = cljs.core.nth.call(null,vec__15872,1,null);var dx = cljs.core.nth.call(null,vec__15872,2,null);var dy = cljs.core.nth.call(null,vec__15872,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__15873,p__15874,rect_width,rect_height){var vec__15877 = p__15873;var x = cljs.core.nth.call(null,vec__15877,0,null);var y = cljs.core.nth.call(null,vec__15877,1,null);var vec__15878 = p__15874;var rect_x = cljs.core.nth.call(null,vec__15878,0,null);var rect_y = cljs.core.nth.call(null,vec__15878,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15879_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__15879_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__15880,i,direction_to_reverse){var vec__15882 = p__15880;var ball_x = cljs.core.nth.call(null,vec__15882,0,null);var ball_y = cljs.core.nth.call(null,vec__15882,1,null);var dx = cljs.core.nth.call(null,vec__15882,2,null);var dy = cljs.core.nth.call(null,vec__15882,3,null);var ball = vec__15882;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__15884 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__15884,0,null);var ball_y = cljs.core.nth.call(null,vec__15884,1,null);var old_dx = cljs.core.nth.call(null,vec__15884,2,null);var old_dy = cljs.core.nth.call(null,vec__15884,3,null);var ball = vec__15884;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__15885,p__15886){var vec__15889 = p__15885;var x = cljs.core.nth.call(null,vec__15889,0,null);var y = cljs.core.nth.call(null,vec__15889,1,null);var vec__15890 = p__15886;var block_x = cljs.core.nth.call(null,vec__15890,0,null);var block_y = cljs.core.nth.call(null,vec__15890,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15891_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__15891_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__15892_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__15892_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,i){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463)));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__15893,c_width){var vec__15895 = p__15893;var x = cljs.core.nth.call(null,vec__15895,0,null);var y = cljs.core.nth.call(null,vec__15895,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15896_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__15896_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462)));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,i,p__15897){var vec__15899 = p__15897;var canvas = cljs.core.nth.call(null,vec__15899,0,null);var context = cljs.core.nth.call(null,vec__15899,1,null);var c_width = cljs.core.nth.call(null,vec__15899,2,null);var c_height = cljs.core.nth.call(null,vec__15899,3,null);var c = vec__15899;breakout.core.check_ball_block_collision.call(null,state,i);
breakout.core.check_ball_brick_collision.call(null,state,i);
return breakout.core.check_side_wall_collision.call(null,state,i,c_width);
});
breakout.core.tick_one_ball = (function tick_one_ball(state,c,i){breakout.core.move_ball.call(null,state,i);
return breakout.core.check_collisions.call(null,state,i,c);
});
breakout.core.game_loop = (function game_loop(state,p__15900){var vec__15902 = p__15900;var canvas = cljs.core.nth.call(null,vec__15902,0,null);var context = cljs.core.nth.call(null,vec__15902,1,null);var c_width = cljs.core.nth.call(null,vec__15902,2,null);var c_height = cljs.core.nth.call(null,vec__15902,3,null);var c = vec__15902;breakout.core.tick_one_ball.call(null,state,c,0);
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__15929 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__15929,0,null);var context = cljs.core.nth.call(null,vec__15929,1,null);var c_width = cljs.core.nth.call(null,vec__15929,2,null);var c_height = cljs.core.nth.call(null,vec__15929,3,null);var c = vec__15929;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_15943){var state_val_15944 = (state_15943[1]);if((state_val_15944 === 7))
{var inst_15934 = (state_15943[2]);var inst_15935 = breakout.core.game_loop.call(null,state,c);var state_15943__$1 = (function (){var statearr_15945 = state_15943;(statearr_15945[5] = inst_15934);
(statearr_15945[6] = inst_15935);
return statearr_15945;
})();var statearr_15946_15955 = state_15943__$1;(statearr_15946_15955[2] = null);
(statearr_15946_15955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 6))
{var inst_15939 = (state_15943[2]);var state_15943__$1 = state_15943;var statearr_15947_15956 = state_15943__$1;(statearr_15947_15956[2] = inst_15939);
(statearr_15947_15956[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 5))
{var state_15943__$1 = state_15943;var statearr_15948_15957 = state_15943__$1;(statearr_15948_15957[2] = null);
(statearr_15948_15957[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 4))
{var inst_15932 = cljs.core.async.timeout.call(null,4);var state_15943__$1 = state_15943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15943__$1,7,inst_15932);
} else
{if((state_val_15944 === 3))
{var inst_15941 = (state_15943[2]);var state_15943__$1 = state_15943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15943__$1,inst_15941);
} else
{if((state_val_15944 === 2))
{var state_15943__$1 = state_15943;if(true)
{var statearr_15949_15958 = state_15943__$1;(statearr_15949_15958[1] = 4);
} else
{var statearr_15950_15959 = state_15943__$1;(statearr_15950_15959[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15944 === 1))
{var state_15943__$1 = state_15943;var statearr_15951_15960 = state_15943__$1;(statearr_15951_15960[2] = null);
(statearr_15951_15960[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_15953 = (new Array(7));(statearr_15953[0] = state_machine__5176__auto__);
(statearr_15953[1] = 1);
return statearr_15953;
});
var state_machine__5176__auto____1 = (function (state_15943){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_15943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_15943){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_15943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_15954 = f__5226__auto__.call(null);(statearr_15954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_15954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map