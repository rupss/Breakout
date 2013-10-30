goog.provide('breakout.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.set');
breakout.core.block_width = 150;
breakout.core.block_height = 20;
breakout.core.brick_space = 3;
breakout.core.brick_width = 20;
breakout.core.brick_height = 10;
breakout.core.ball_radius = 15;
breakout.core.block_movement = 20;
breakout.core.log = (function log(item){return console.log(item);
});
breakout.core.get_context = (function get_context(){var canvas = document.getElementById("canvas");var context = canvas.getContext("2d");return cljs.core.PersistentVector.fromArray([canvas,context,canvas.width,canvas.height], true);
});
breakout.core.get_context_only = (function get_context_only(){var canvas = document.getElementById("canvas");return canvas.getContext("2d");
});
breakout.core.draw_everything = (function draw_everything(p__15019,state){var vec__15031 = p__15019;var canvas = cljs.core.nth.call(null,vec__15031,0,null);var context = cljs.core.nth.call(null,vec__15031,1,null);var c_width = cljs.core.nth.call(null,vec__15031,2,null);var c_height = cljs.core.nth.call(null,vec__15031,3,null);var c = vec__15031;var vec__15032 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__15032,0,null);var block_y = cljs.core.nth.call(null,vec__15032,1,null);var vec__15033 = state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__15033,0,null);var ball_y = cljs.core.nth.call(null,vec__15033,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
context.beginPath();
context.arc(ball_x,ball_y,breakout.core.ball_radius,0,(2 * Math.PI),true);
context.fill();
context.closePath();
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__15034(s__15035){return (new cljs.core.LazySeq(null,(function (){var s__15035__$1 = s__15035;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15035__$1);if(temp__4092__auto__)
{var s__15035__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15035__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15035__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15037 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15036 = 0;while(true){
if((i__15036 < size__3638__auto__))
{var vec__15040 = cljs.core._nth.call(null,c__3637__auto__,i__15036);var brick_x = cljs.core.nth.call(null,vec__15040,0,null);var brick_y = cljs.core.nth.call(null,vec__15040,1,null);cljs.core.chunk_append.call(null,b__15037,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__15042 = (i__15036 + 1);
i__15036 = G__15042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15037),iter__15034.call(null,cljs.core.chunk_rest.call(null,s__15035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15037),null);
}
} else
{var vec__15041 = cljs.core.first.call(null,s__15035__$2);var brick_x = cljs.core.nth.call(null,vec__15041,0,null);var brick_y = cljs.core.nth.call(null,vec__15041,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__15034.call(null,cljs.core.rest.call(null,s__15035__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__15043){var vec__15051 = p__15043;var canvas = cljs.core.nth.call(null,vec__15051,0,null);var context = cljs.core.nth.call(null,vec__15051,1,null);var c_width = cljs.core.nth.call(null,vec__15051,2,null);var c_height = cljs.core.nth.call(null,vec__15051,3,null);var iter__3639__auto__ = (function iter__15052(s__15053){return (new cljs.core.LazySeq(null,(function (){var s__15053__$1 = s__15053;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15053__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__15053__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__15054(s__15055){return (new cljs.core.LazySeq(null,((function (s__15053__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__15055__$1 = s__15055;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__15055__$1);if(temp__4092__auto____$1)
{var s__15055__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15055__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15055__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15057 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15056 = 0;while(true){
if((i__15056 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__15056);cljs.core.chunk_append.call(null,b__15057,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__15058 = (i__15056 + 1);
i__15056 = G__15058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15057),iter__15054.call(null,cljs.core.chunk_rest.call(null,s__15055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15057),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__15055__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__15054.call(null,cljs.core.rest.call(null,s__15055__$2)));
}
} else
{return null;
}
break;
}
});})(s__15053__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__15053__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__15052.call(null,cljs.core.rest.call(null,s__15053__$1)));
} else
{{
var G__15059 = cljs.core.rest.call(null,s__15053__$1);
s__15053__$1 = G__15059;
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
breakout.core.init_block = (function init_block(p__15060){var vec__15062 = p__15060;var canvas = cljs.core.nth.call(null,vec__15062,0,null);var context = cljs.core.nth.call(null,vec__15062,1,null);var c_width = cljs.core.nth.call(null,vec__15062,2,null);var c_height = cljs.core.nth.call(null,vec__15062,3,null);return cljs.core.PersistentVector.fromArray([((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height)], true);
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__15071(s__15072){return (new cljs.core.LazySeq(null,(function (){var s__15072__$1 = s__15072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15072__$1);if(temp__4092__auto__)
{var s__15072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15072__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__15072__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__15074 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__15073 = 0;while(true){
if((i__15073 < size__3638__auto__))
{var vec__15077 = cljs.core._nth.call(null,c__3637__auto__,i__15073);var x = cljs.core.nth.call(null,vec__15077,0,null);var y = cljs.core.nth.call(null,vec__15077,1,null);cljs.core.chunk_append.call(null,b__15074,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__15079 = (i__15073 + 1);
i__15073 = G__15079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15074),iter__15071.call(null,cljs.core.chunk_rest.call(null,s__15072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15074),null);
}
} else
{var vec__15078 = cljs.core.first.call(null,s__15072__$2);var x = cljs.core.nth.call(null,vec__15078,0,null);var y = cljs.core.nth.call(null,vec__15078,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__15071.call(null,cljs.core.rest.call(null,s__15072__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__15080,p__15081){var vec__15084 = p__15080;var block_x = cljs.core.nth.call(null,vec__15084,0,null);var block_y = cljs.core.nth.call(null,vec__15084,1,null);var vec__15085 = p__15081;var canvas = cljs.core.nth.call(null,vec__15085,0,null);var context = cljs.core.nth.call(null,vec__15085,1,null);var c_width = cljs.core.nth.call(null,vec__15085,2,null);var c_height = cljs.core.nth.call(null,vec__15085,3,null);var new_block_x = (block_x - breakout.core.block_movement);if((new_block_x >= 0))
{return cljs.core.PersistentVector.fromArray([new_block_x,block_y], true);
} else
{return cljs.core.PersistentVector.fromArray([0,block_y], true);
}
});
breakout.core.move_block_right = (function move_block_right(p__15086,p__15087){var vec__15090 = p__15086;var block_x = cljs.core.nth.call(null,vec__15090,0,null);var block_y = cljs.core.nth.call(null,vec__15090,1,null);var vec__15091 = p__15087;var canvas = cljs.core.nth.call(null,vec__15091,0,null);var context = cljs.core.nth.call(null,vec__15091,1,null);var c_width = cljs.core.nth.call(null,vec__15091,2,null);var c_height = cljs.core.nth.call(null,vec__15091,3,null);var new_block_x = (block_x + breakout.core.block_movement);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
{return cljs.core.PersistentVector.fromArray([new_block_x,block_y], true);
} else
{return cljs.core.PersistentVector.fromArray([bound,block_y], true);
}
});
breakout.core.get_new_block_coords = (function get_new_block_coords(block,c,e){if((39 === e.keyCode))
{return breakout.core.move_block_right.call(null,block,c);
} else
{if((37 === e.keyCode))
{return breakout.core.move_block_left.call(null,block,c);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return block;
} else
{return null;
}
}
}
});
breakout.core.move_block = (function move_block(state,c,e){var vec__15093 = breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575)),c,e);var new_block_x = cljs.core.nth.call(null,vec__15093,0,null);var new_block_y = cljs.core.nth.call(null,vec__15093,1,null);var new_block_coords = vec__15093;return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",1107736575),new_block_coords);
});
breakout.core.init_ball = (function init_ball(p__15094){var vec__15096 = p__15094;var canvas = cljs.core.nth.call(null,vec__15096,0,null);var context = cljs.core.nth.call(null,vec__15096,1,null);var c_width = cljs.core.nth.call(null,vec__15096,2,null);var c_height = cljs.core.nth.call(null,vec__15096,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([center_x,center_y], true);
});
breakout.core.move_ball = (function move_ball(state){var dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));var vec__15098 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__15098,0,null);var ball_y = cljs.core.nth.call(null,vec__15098,1,null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"ball","ball",1016920433),cljs.core.PersistentVector.fromArray([(dx + ball_x),(dy + ball_y)], true));
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"ball","ball",1016920433),breakout.core.init_ball.call(null,c),new cljs.core.Keyword(null,"dx","dx",1013907462),0.5,new cljs.core.Keyword(null,"dy","dy",1013907463),1], true);
});
breakout.core.get_four_points = (function get_four_points(p__15099){var vec__15101 = p__15099;var ball_x = cljs.core.nth.call(null,vec__15101,0,null);var ball_y = cljs.core.nth.call(null,vec__15101,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__15102,p__15103,rect_width,rect_height){var vec__15106 = p__15102;var x = cljs.core.nth.call(null,vec__15106,0,null);var y = cljs.core.nth.call(null,vec__15106,1,null);var vec__15107 = p__15103;var rect_x = cljs.core.nth.call(null,vec__15107,0,null);var rect_y = cljs.core.nth.call(null,vec__15107,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15108_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__15108_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var old_dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * old_dy));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__15109,p__15110){var vec__15113 = p__15109;var x = cljs.core.nth.call(null,vec__15113,0,null);var y = cljs.core.nth.call(null,vec__15113,1,null);var vec__15114 = p__15110;var block_x = cljs.core.nth.call(null,vec__15114,0,null);var block_y = cljs.core.nth.call(null,vec__15114,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15115_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__15115_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state){return breakout.core.check_ball_block_vertical_collision.call(null,state);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__15116_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__15116_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463))));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__15117,c_width){var vec__15119 = p__15117;var x = cljs.core.nth.call(null,vec__15119,0,null);var y = cljs.core.nth.call(null,vec__15119,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,c_width){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__15120_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__15120_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,p__15121){var vec__15123 = p__15121;var canvas = cljs.core.nth.call(null,vec__15123,0,null);var context = cljs.core.nth.call(null,vec__15123,1,null);var c_width = cljs.core.nth.call(null,vec__15123,2,null);var c_height = cljs.core.nth.call(null,vec__15123,3,null);var c = vec__15123;breakout.core.check_ball_block_collision.call(null,state);
breakout.core.check_ball_brick_collision.call(null,state);
return breakout.core.check_side_wall_collision.call(null,state,c_width);
});
breakout.core.game_loop = (function game_loop(state,p__15124){var vec__15126 = p__15124;var canvas = cljs.core.nth.call(null,vec__15126,0,null);var context = cljs.core.nth.call(null,vec__15126,1,null);var c_width = cljs.core.nth.call(null,vec__15126,2,null);var c_height = cljs.core.nth.call(null,vec__15126,3,null);var c = vec__15126;breakout.core.move_ball.call(null,state);
breakout.core.check_collisions.call(null,state,c);
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__15154 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__15154,0,null);var context = cljs.core.nth.call(null,vec__15154,1,null);var c_width = cljs.core.nth.call(null,vec__15154,2,null);var c_height = cljs.core.nth.call(null,vec__15154,3,null);var c = vec__15154;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
window.addEventListener("keydown",(function (p1__15127_SHARP_){return breakout.core.move_block.call(null,state,c,p1__15127_SHARP_);
}),false);
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_15168){var state_val_15169 = (state_15168[1]);if((state_val_15169 === 7))
{var inst_15159 = (state_15168[2]);var inst_15160 = breakout.core.game_loop.call(null,state,c);var state_15168__$1 = (function (){var statearr_15170 = state_15168;(statearr_15170[5] = inst_15160);
(statearr_15170[6] = inst_15159);
return statearr_15170;
})();var statearr_15171_15180 = state_15168__$1;(statearr_15171_15180[2] = null);
(statearr_15171_15180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15169 === 6))
{var inst_15164 = (state_15168[2]);var state_15168__$1 = state_15168;var statearr_15172_15181 = state_15168__$1;(statearr_15172_15181[2] = inst_15164);
(statearr_15172_15181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15169 === 5))
{var state_15168__$1 = state_15168;var statearr_15173_15182 = state_15168__$1;(statearr_15173_15182[2] = null);
(statearr_15173_15182[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15169 === 4))
{var inst_15157 = cljs.core.async.timeout.call(null,4);var state_15168__$1 = state_15168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15168__$1,7,inst_15157);
} else
{if((state_val_15169 === 3))
{var inst_15166 = (state_15168[2]);var state_15168__$1 = state_15168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15168__$1,inst_15166);
} else
{if((state_val_15169 === 2))
{var state_15168__$1 = state_15168;if(true)
{var statearr_15174_15183 = state_15168__$1;(statearr_15174_15183[1] = 4);
} else
{var statearr_15175_15184 = state_15168__$1;(statearr_15175_15184[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15169 === 1))
{var state_15168__$1 = state_15168;var statearr_15176_15185 = state_15168__$1;(statearr_15176_15185[2] = null);
(statearr_15176_15185[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_15178 = (new Array(7));(statearr_15178[0] = state_machine__5176__auto__);
(statearr_15178[1] = 1);
return statearr_15178;
});
var state_machine__5176__auto____1 = (function (state_15168){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_15168);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_15168){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_15168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_15179 = f__5226__auto__.call(null);(statearr_15179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_15179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map