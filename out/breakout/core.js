goog.provide('breakout.core');
goog.require('cljs.core');
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
breakout.core.draw_everything = (function draw_everything(p__4715,state){var vec__4727 = p__4715;var canvas = cljs.core.nth.call(null,vec__4727,0,null);var context = cljs.core.nth.call(null,vec__4727,1,null);var c_width = cljs.core.nth.call(null,vec__4727,2,null);var c_height = cljs.core.nth.call(null,vec__4727,3,null);var c = vec__4727;var vec__4728 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__4728,0,null);var block_y = cljs.core.nth.call(null,vec__4728,1,null);var vec__4729 = state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__4729,0,null);var ball_y = cljs.core.nth.call(null,vec__4729,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
context.beginPath();
context.arc(ball_x,ball_y,breakout.core.ball_radius,0,(2 * Math.PI),true);
context.fill();
context.closePath();
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__4730(s__4731){return (new cljs.core.LazySeq(null,(function (){var s__4731__$1 = s__4731;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4731__$1);if(temp__4092__auto__)
{var s__4731__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4731__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__4731__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__4733 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__4732 = 0;while(true){
if((i__4732 < size__3638__auto__))
{var vec__4736 = cljs.core._nth.call(null,c__3637__auto__,i__4732);var brick_x = cljs.core.nth.call(null,vec__4736,0,null);var brick_y = cljs.core.nth.call(null,vec__4736,1,null);cljs.core.chunk_append.call(null,b__4733,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__4738 = (i__4732 + 1);
i__4732 = G__4738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4733),iter__4730.call(null,cljs.core.chunk_rest.call(null,s__4731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4733),null);
}
} else
{var vec__4737 = cljs.core.first.call(null,s__4731__$2);var brick_x = cljs.core.nth.call(null,vec__4737,0,null);var brick_y = cljs.core.nth.call(null,vec__4737,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__4730.call(null,cljs.core.rest.call(null,s__4731__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__4739){var vec__4747 = p__4739;var canvas = cljs.core.nth.call(null,vec__4747,0,null);var context = cljs.core.nth.call(null,vec__4747,1,null);var c_width = cljs.core.nth.call(null,vec__4747,2,null);var c_height = cljs.core.nth.call(null,vec__4747,3,null);var iter__3639__auto__ = (function iter__4748(s__4749){return (new cljs.core.LazySeq(null,(function (){var s__4749__$1 = s__4749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4749__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__4749__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__4750(s__4751){return (new cljs.core.LazySeq(null,((function (s__4749__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__4751__$1 = s__4751;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__4751__$1);if(temp__4092__auto____$1)
{var s__4751__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4751__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__4751__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__4753 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__4752 = 0;while(true){
if((i__4752 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__4752);cljs.core.chunk_append.call(null,b__4753,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__4754 = (i__4752 + 1);
i__4752 = G__4754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4753),iter__4750.call(null,cljs.core.chunk_rest.call(null,s__4751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4753),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__4751__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__4750.call(null,cljs.core.rest.call(null,s__4751__$2)));
}
} else
{return null;
}
break;
}
});})(s__4749__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__4749__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__4748.call(null,cljs.core.rest.call(null,s__4749__$1)));
} else
{{
var G__4755 = cljs.core.rest.call(null,s__4749__$1);
s__4749__$1 = G__4755;
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
breakout.core.init_block = (function init_block(p__4756){var vec__4758 = p__4756;var canvas = cljs.core.nth.call(null,vec__4758,0,null);var context = cljs.core.nth.call(null,vec__4758,1,null);var c_width = cljs.core.nth.call(null,vec__4758,2,null);var c_height = cljs.core.nth.call(null,vec__4758,3,null);return cljs.core.PersistentVector.fromArray([((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height)], true);
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__4767(s__4768){return (new cljs.core.LazySeq(null,(function (){var s__4768__$1 = s__4768;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4768__$1);if(temp__4092__auto__)
{var s__4768__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4768__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__4768__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__4770 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__4769 = 0;while(true){
if((i__4769 < size__3638__auto__))
{var vec__4773 = cljs.core._nth.call(null,c__3637__auto__,i__4769);var x = cljs.core.nth.call(null,vec__4773,0,null);var y = cljs.core.nth.call(null,vec__4773,1,null);cljs.core.chunk_append.call(null,b__4770,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__4775 = (i__4769 + 1);
i__4769 = G__4775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4770),iter__4767.call(null,cljs.core.chunk_rest.call(null,s__4768__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4770),null);
}
} else
{var vec__4774 = cljs.core.first.call(null,s__4768__$2);var x = cljs.core.nth.call(null,vec__4774,0,null);var y = cljs.core.nth.call(null,vec__4774,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__4767.call(null,cljs.core.rest.call(null,s__4768__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__4776,p__4777){var vec__4780 = p__4776;var block_x = cljs.core.nth.call(null,vec__4780,0,null);var block_y = cljs.core.nth.call(null,vec__4780,1,null);var vec__4781 = p__4777;var canvas = cljs.core.nth.call(null,vec__4781,0,null);var context = cljs.core.nth.call(null,vec__4781,1,null);var c_width = cljs.core.nth.call(null,vec__4781,2,null);var c_height = cljs.core.nth.call(null,vec__4781,3,null);var new_block_x = (block_x - breakout.core.block_movement);if((new_block_x >= 0))
{return cljs.core.PersistentVector.fromArray([new_block_x,block_y], true);
} else
{return cljs.core.PersistentVector.fromArray([0,block_y], true);
}
});
breakout.core.move_block_right = (function move_block_right(p__4782,p__4783){var vec__4786 = p__4782;var block_x = cljs.core.nth.call(null,vec__4786,0,null);var block_y = cljs.core.nth.call(null,vec__4786,1,null);var vec__4787 = p__4783;var canvas = cljs.core.nth.call(null,vec__4787,0,null);var context = cljs.core.nth.call(null,vec__4787,1,null);var c_width = cljs.core.nth.call(null,vec__4787,2,null);var c_height = cljs.core.nth.call(null,vec__4787,3,null);var new_block_x = (block_x + breakout.core.block_movement);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
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
breakout.core.move_block = (function move_block(state,c,e){var vec__4789 = breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575)),c,e);var new_block_x = cljs.core.nth.call(null,vec__4789,0,null);var new_block_y = cljs.core.nth.call(null,vec__4789,1,null);var new_block_coords = vec__4789;return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",1107736575),new_block_coords);
});
breakout.core.init_ball = (function init_ball(p__4790){var vec__4792 = p__4790;var canvas = cljs.core.nth.call(null,vec__4792,0,null);var context = cljs.core.nth.call(null,vec__4792,1,null);var c_width = cljs.core.nth.call(null,vec__4792,2,null);var c_height = cljs.core.nth.call(null,vec__4792,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([center_x,center_y], true);
});
breakout.core.move_ball = (function move_ball(state){var dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));var vec__4794 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__4794,0,null);var ball_y = cljs.core.nth.call(null,vec__4794,1,null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"ball","ball",1016920433),cljs.core.PersistentVector.fromArray([(dx + ball_x),(dy + ball_y)], true));
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"ball","ball",1016920433),breakout.core.init_ball.call(null,c),new cljs.core.Keyword(null,"dx","dx",1013907462),0.5,new cljs.core.Keyword(null,"dy","dy",1013907463),1], true);
});
breakout.core.get_four_points = (function get_four_points(p__4795){var vec__4797 = p__4795;var ball_x = cljs.core.nth.call(null,vec__4797,0,null);var ball_y = cljs.core.nth.call(null,vec__4797,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__4798,p__4799,rect_width,rect_height){var vec__4802 = p__4798;var x = cljs.core.nth.call(null,vec__4802,0,null);var y = cljs.core.nth.call(null,vec__4802,1,null);var vec__4803 = p__4799;var rect_x = cljs.core.nth.call(null,vec__4803,0,null);var rect_y = cljs.core.nth.call(null,vec__4803,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__4804_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__4804_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var old_dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * old_dy));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__4805,p__4806){var vec__4809 = p__4805;var x = cljs.core.nth.call(null,vec__4809,0,null);var y = cljs.core.nth.call(null,vec__4809,1,null);var vec__4810 = p__4806;var block_x = cljs.core.nth.call(null,vec__4810,0,null);var block_y = cljs.core.nth.call(null,vec__4810,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__4811_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__4811_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state){return breakout.core.check_ball_block_vertical_collision.call(null,state);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__4812_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__4812_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463))));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__4813,c_width){var vec__4815 = p__4813;var x = cljs.core.nth.call(null,vec__4815,0,null);var y = cljs.core.nth.call(null,vec__4815,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,c_width){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__4816_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__4816_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,p__4817){var vec__4819 = p__4817;var canvas = cljs.core.nth.call(null,vec__4819,0,null);var context = cljs.core.nth.call(null,vec__4819,1,null);var c_width = cljs.core.nth.call(null,vec__4819,2,null);var c_height = cljs.core.nth.call(null,vec__4819,3,null);var c = vec__4819;breakout.core.check_ball_block_collision.call(null,state);
breakout.core.check_ball_brick_collision.call(null,state);
return breakout.core.check_side_wall_collision.call(null,state,c_width);
});
breakout.core.game_loop = (function game_loop(state,p__4820){var vec__4822 = p__4820;var canvas = cljs.core.nth.call(null,vec__4822,0,null);var context = cljs.core.nth.call(null,vec__4822,1,null);var c_width = cljs.core.nth.call(null,vec__4822,2,null);var c_height = cljs.core.nth.call(null,vec__4822,3,null);var c = vec__4822;setTimeout((function (){return game_loop.call(null,state,c);
}),10);
breakout.core.move_ball.call(null,state);
breakout.core.check_collisions.call(null,state,c);
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__4825 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__4825,0,null);var context = cljs.core.nth.call(null,vec__4825,1,null);var c_width = cljs.core.nth.call(null,vec__4825,2,null);var c_height = cljs.core.nth.call(null,vec__4825,3,null);var c = vec__4825;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
window.addEventListener("keydown",(function (p1__4823_SHARP_){return breakout.core.move_block.call(null,state,c,p1__4823_SHARP_);
}),false);
return breakout.core.game_loop.call(null,state,c);
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map