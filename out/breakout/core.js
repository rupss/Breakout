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
breakout.core.draw_everything = (function draw_everything(p__5603,state){var vec__5615 = p__5603;var canvas = cljs.core.nth.call(null,vec__5615,0,null);var context = cljs.core.nth.call(null,vec__5615,1,null);var c_width = cljs.core.nth.call(null,vec__5615,2,null);var c_height = cljs.core.nth.call(null,vec__5615,3,null);var c = vec__5615;var vec__5616 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__5616,0,null);var block_y = cljs.core.nth.call(null,vec__5616,1,null);var vec__5617 = state.call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__5617,0,null);var ball_y = cljs.core.nth.call(null,vec__5617,1,null);var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
context.beginPath();
context.arc(ball_x,ball_y,breakout.core.ball_radius,0,(2 * Math.PI),true);
context.fill();
context.closePath();
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5618(s__5619){return (new cljs.core.LazySeq(null,(function (){var s__5619__$1 = s__5619;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5619__$1);if(temp__4092__auto__)
{var s__5619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5619__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5619__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5621 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5620 = 0;while(true){
if((i__5620 < size__3638__auto__))
{var vec__5624 = cljs.core._nth.call(null,c__3637__auto__,i__5620);var brick_x = cljs.core.nth.call(null,vec__5624,0,null);var brick_y = cljs.core.nth.call(null,vec__5624,1,null);cljs.core.chunk_append.call(null,b__5621,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height));
{
var G__5626 = (i__5620 + 1);
i__5620 = G__5626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5621),iter__5618.call(null,cljs.core.chunk_rest.call(null,s__5619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5621),null);
}
} else
{var vec__5625 = cljs.core.first.call(null,s__5619__$2);var brick_x = cljs.core.nth.call(null,vec__5625,0,null);var brick_y = cljs.core.nth.call(null,vec__5625,1,null);return cljs.core.cons.call(null,context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height),iter__5618.call(null,cljs.core.rest.call(null,s__5619__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__5627){var vec__5635 = p__5627;var canvas = cljs.core.nth.call(null,vec__5635,0,null);var context = cljs.core.nth.call(null,vec__5635,1,null);var c_width = cljs.core.nth.call(null,vec__5635,2,null);var c_height = cljs.core.nth.call(null,vec__5635,3,null);var iter__3639__auto__ = (function iter__5636(s__5637){return (new cljs.core.LazySeq(null,(function (){var s__5637__$1 = s__5637;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5637__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__5637__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__5638(s__5639){return (new cljs.core.LazySeq(null,((function (s__5637__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__5639__$1 = s__5639;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5639__$1);if(temp__4092__auto____$1)
{var s__5639__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5639__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5639__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5641 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5640 = 0;while(true){
if((i__5640 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__5640);cljs.core.chunk_append.call(null,b__5641,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__5642 = (i__5640 + 1);
i__5640 = G__5642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5641),iter__5638.call(null,cljs.core.chunk_rest.call(null,s__5639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5641),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__5639__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__5638.call(null,cljs.core.rest.call(null,s__5639__$2)));
}
} else
{return null;
}
break;
}
});})(s__5637__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__5637__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__5636.call(null,cljs.core.rest.call(null,s__5637__$1)));
} else
{{
var G__5643 = cljs.core.rest.call(null,s__5637__$1);
s__5637__$1 = G__5643;
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
breakout.core.init_block = (function init_block(p__5644){var vec__5646 = p__5644;var canvas = cljs.core.nth.call(null,vec__5646,0,null);var context = cljs.core.nth.call(null,vec__5646,1,null);var c_width = cljs.core.nth.call(null,vec__5646,2,null);var c_height = cljs.core.nth.call(null,vec__5646,3,null);return cljs.core.PersistentVector.fromArray([((c_width / 2) - (breakout.core.block_width / 2)),(c_height - breakout.core.block_height)], true);
});
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__5655(s__5656){return (new cljs.core.LazySeq(null,(function (){var s__5656__$1 = s__5656;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5656__$1);if(temp__4092__auto__)
{var s__5656__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5656__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__5656__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__5658 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__5657 = 0;while(true){
if((i__5657 < size__3638__auto__))
{var vec__5661 = cljs.core._nth.call(null,c__3637__auto__,i__5657);var x = cljs.core.nth.call(null,vec__5661,0,null);var y = cljs.core.nth.call(null,vec__5661,1,null);cljs.core.chunk_append.call(null,b__5658,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__5663 = (i__5657 + 1);
i__5657 = G__5663;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5658),iter__5655.call(null,cljs.core.chunk_rest.call(null,s__5656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5658),null);
}
} else
{var vec__5662 = cljs.core.first.call(null,s__5656__$2);var x = cljs.core.nth.call(null,vec__5662,0,null);var y = cljs.core.nth.call(null,vec__5662,1,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__5655.call(null,cljs.core.rest.call(null,s__5656__$2)));
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
breakout.core.move_block_left = (function move_block_left(p__5664,p__5665){var vec__5668 = p__5664;var block_x = cljs.core.nth.call(null,vec__5668,0,null);var block_y = cljs.core.nth.call(null,vec__5668,1,null);var vec__5669 = p__5665;var canvas = cljs.core.nth.call(null,vec__5669,0,null);var context = cljs.core.nth.call(null,vec__5669,1,null);var c_width = cljs.core.nth.call(null,vec__5669,2,null);var c_height = cljs.core.nth.call(null,vec__5669,3,null);var new_block_x = (block_x - breakout.core.block_movement);if((new_block_x >= 0))
{return cljs.core.PersistentVector.fromArray([new_block_x,block_y], true);
} else
{return cljs.core.PersistentVector.fromArray([0,block_y], true);
}
});
breakout.core.move_block_right = (function move_block_right(p__5670,p__5671){var vec__5674 = p__5670;var block_x = cljs.core.nth.call(null,vec__5674,0,null);var block_y = cljs.core.nth.call(null,vec__5674,1,null);var vec__5675 = p__5671;var canvas = cljs.core.nth.call(null,vec__5675,0,null);var context = cljs.core.nth.call(null,vec__5675,1,null);var c_width = cljs.core.nth.call(null,vec__5675,2,null);var c_height = cljs.core.nth.call(null,vec__5675,3,null);var new_block_x = (block_x + breakout.core.block_movement);var bound = (c_width - breakout.core.block_width);if((new_block_x <= bound))
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
{return null;
}
}
});
breakout.core.move_block = (function move_block(state,c,e){var vec__5677 = breakout.core.get_new_block_coords.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575)),c,e);var new_block_x = cljs.core.nth.call(null,vec__5677,0,null);var new_block_y = cljs.core.nth.call(null,vec__5677,1,null);var new_block_coords = vec__5677;return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"block","block",1107736575),new_block_coords);
});
breakout.core.init_ball = (function init_ball(p__5678){var vec__5680 = p__5678;var canvas = cljs.core.nth.call(null,vec__5680,0,null);var context = cljs.core.nth.call(null,vec__5680,1,null);var c_width = cljs.core.nth.call(null,vec__5680,2,null);var c_height = cljs.core.nth.call(null,vec__5680,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([center_x,center_y], true);
});
breakout.core.move_ball = (function move_ball(state){var dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));var vec__5682 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_x = cljs.core.nth.call(null,vec__5682,0,null);var ball_y = cljs.core.nth.call(null,vec__5682,1,null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"ball","ball",1016920433),cljs.core.PersistentVector.fromArray([(dx + ball_x),(dy + ball_y)], true));
});
breakout.core.init_round = (function init_round(state,c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"ball","ball",1016920433),breakout.core.init_ball.call(null,c),new cljs.core.Keyword(null,"dx","dx",1013907462),0.5,new cljs.core.Keyword(null,"dy","dy",1013907463),1], true);
});
breakout.core.get_four_points = (function get_four_points(p__5683){var vec__5685 = p__5683;var ball_x = cljs.core.nth.call(null,vec__5685,0,null);var ball_y = cljs.core.nth.call(null,vec__5685,1,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__5686,p__5687,rect_width,rect_height){var vec__5690 = p__5686;var x = cljs.core.nth.call(null,vec__5690,0,null);var y = cljs.core.nth.call(null,vec__5690,1,null);var vec__5691 = p__5687;var rect_x = cljs.core.nth.call(null,vec__5691,0,null);var rect_y = cljs.core.nth.call(null,vec__5691,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__5692_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__5692_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_dx = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462));var old_dy = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463));if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * old_dy));
} else
{return null;
}
});
breakout.core.block_horizontal_collision_QMARK_ = (function block_horizontal_collision_QMARK_(p__5693,p__5694){var vec__5697 = p__5693;var x = cljs.core.nth.call(null,vec__5697,0,null);var y = cljs.core.nth.call(null,vec__5697,1,null);var vec__5698 = p__5694;var block_x = cljs.core.nth.call(null,vec__5698,0,null);var block_y = cljs.core.nth.call(null,vec__5698,1,null);var and__2952__auto__ = (x === block_x);if(and__2952__auto__)
{return breakout.core.in_bound_QMARK_.call(null,(y - block_y),breakout.core.block_height);
} else
{return and__2952__auto__;
}
});
breakout.core.check_ball_block_horizontal_collision = (function check_ball_block_horizontal_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var block = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"block","block",1107736575));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__5699_SHARP_){return breakout.core.block_horizontal_collision_QMARK_.call(null,p1__5699_SHARP_,block);
}),ball_four_points))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463)) * -1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state){return breakout.core.check_ball_block_vertical_collision.call(null,state);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__5700_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__5700_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var all_bricks = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"bricks","bricks",3928069060),clojure.set.difference.call(null,all_bricks,cljs.core.set.call(null,collided_bricks)));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dy","dy",1013907463),(-1 * cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dy","dy",1013907463))));
} else
{return null;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__5701,c_width){var vec__5703 = p__5701;var x = cljs.core.nth.call(null,vec__5703,0,null);var y = cljs.core.nth.call(null,vec__5703,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,c_width){var ball = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"ball","ball",1016920433));var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__5704_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__5704_SHARP_,c_width);
}),ball_four_points))))
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dx","dx",1013907462),(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"dx","dx",1013907462)) * -1));
} else
{return null;
}
});
breakout.core.check_collisions = (function check_collisions(state,p__5705){var vec__5707 = p__5705;var canvas = cljs.core.nth.call(null,vec__5707,0,null);var context = cljs.core.nth.call(null,vec__5707,1,null);var c_width = cljs.core.nth.call(null,vec__5707,2,null);var c_height = cljs.core.nth.call(null,vec__5707,3,null);var c = vec__5707;breakout.core.check_ball_block_collision.call(null,state);
breakout.core.check_ball_brick_collision.call(null,state);
return breakout.core.check_side_wall_collision.call(null,state,c_width);
});
breakout.core.game_loop = (function game_loop(state,p__5708){var vec__5710 = p__5708;var canvas = cljs.core.nth.call(null,vec__5710,0,null);var context = cljs.core.nth.call(null,vec__5710,1,null);var c_width = cljs.core.nth.call(null,vec__5710,2,null);var c_height = cljs.core.nth.call(null,vec__5710,3,null);var c = vec__5710;setTimeout((function (){return game_loop.call(null,state,c);
}),10);
breakout.core.move_ball.call(null,state);
breakout.core.check_collisions.call(null,state,c);
context.clearRect(0,0,c_width,c_height);
return breakout.core.draw_everything.call(null,c,cljs.core.deref.call(null,state));
});
breakout.core.init = (function init(){var vec__5713 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__5713,0,null);var context = cljs.core.nth.call(null,vec__5713,1,null);var c_width = cljs.core.nth.call(null,vec__5713,2,null);var c_height = cljs.core.nth.call(null,vec__5713,3,null);var c = vec__5713;var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);cljs.core.swap_BANG_.call(null,state,breakout.core.init_round,c);
window.addEventListener("keydown",(function (p1__5711_SHARP_){return breakout.core.move_block.call(null,state,c,p1__5711_SHARP_);
}),false);
return breakout.core.game_loop.call(null,state,c);
});
goog.exportSymbol('breakout.core.init', breakout.core.init);
breakout.core.init.call(null);

//@ sourceMappingURL=core.js.map