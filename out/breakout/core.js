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
breakout.core.channel = cljs.core.async.chan.call(null,1000);
breakout.core.draw_mult = cljs.core.async.mult.call(null,breakout.core.channel);
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
breakout.core.log_list = (function log_list(items){return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__29826(s__29827){return (new cljs.core.LazySeq(null,(function (){var s__29827__$1 = s__29827;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29827__$1);if(temp__4092__auto__)
{var s__29827__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29827__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__29827__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__29829 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__29828 = 0;while(true){
if((i__29828 < size__3638__auto__))
{var vec__29832 = cljs.core._nth.call(null,c__3637__auto__,i__29828);var x = cljs.core.nth.call(null,vec__29832,0,null);var y = cljs.core.nth.call(null,vec__29832,1,null);var dx = cljs.core.nth.call(null,vec__29832,2,null);var dy = cljs.core.nth.call(null,vec__29832,3,null);cljs.core.chunk_append.call(null,b__29829,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})());
{
var G__29834 = (i__29828 + 1);
i__29828 = G__29834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29829),iter__29826.call(null,cljs.core.chunk_rest.call(null,s__29827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29829),null);
}
} else
{var vec__29833 = cljs.core.first.call(null,s__29827__$2);var x = cljs.core.nth.call(null,vec__29833,0,null);var y = cljs.core.nth.call(null,vec__29833,1,null);var dx = cljs.core.nth.call(null,vec__29833,2,null);var dy = cljs.core.nth.call(null,vec__29833,3,null);return cljs.core.cons.call(null,(function (){breakout.core.log.call(null,x);
return breakout.core.log.call(null,y);
})(),iter__29826.call(null,cljs.core.rest.call(null,s__29827__$2)));
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
breakout.core.draw_sized_circle = (function draw_sized_circle(p__29835,p__29836,color,radius){var vec__29839 = p__29835;var ball_x = cljs.core.nth.call(null,vec__29839,0,null);var ball_y = cljs.core.nth.call(null,vec__29839,1,null);var dx = cljs.core.nth.call(null,vec__29839,2,null);var dy = cljs.core.nth.call(null,vec__29839,3,null);var vec__29840 = p__29836;var canvas = cljs.core.nth.call(null,vec__29840,0,null);var context = cljs.core.nth.call(null,vec__29840,1,null);var c_width = cljs.core.nth.call(null,vec__29840,2,null);var c_height = cljs.core.nth.call(null,vec__29840,3,null);var c = vec__29840;context.beginPath();
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
breakout.core.draw_brick = (function draw_brick(p__29841,p__29842,color){var vec__29845 = p__29841;var brick_x = cljs.core.nth.call(null,vec__29845,0,null);var brick_y = cljs.core.nth.call(null,vec__29845,1,null);var vec__29846 = p__29842;var canvas = cljs.core.nth.call(null,vec__29846,0,null);var context = cljs.core.nth.call(null,vec__29846,1,null);var c_width = cljs.core.nth.call(null,vec__29846,2,null);var c_height = cljs.core.nth.call(null,vec__29846,3,null);var c = vec__29846;context.fillStyle = color;
return context.fillRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.erase_brick = (function erase_brick(p__29847,p__29848,color){var vec__29851 = p__29847;var brick_x = cljs.core.nth.call(null,vec__29851,0,null);var brick_y = cljs.core.nth.call(null,vec__29851,1,null);var vec__29852 = p__29848;var canvas = cljs.core.nth.call(null,vec__29852,0,null);var context = cljs.core.nth.call(null,vec__29852,1,null);var c_width = cljs.core.nth.call(null,vec__29852,2,null);var c_height = cljs.core.nth.call(null,vec__29852,3,null);var c = vec__29852;return context.clearRect(brick_x,brick_y,breakout.core.brick_width,breakout.core.brick_height);
});
breakout.core.draw_everything = (function draw_everything(state){var vec__29867 = breakout.core.get_context.call(null);var canvas = cljs.core.nth.call(null,vec__29867,0,null);var context = cljs.core.nth.call(null,vec__29867,1,null);var c_width = cljs.core.nth.call(null,vec__29867,2,null);var c_height = cljs.core.nth.call(null,vec__29867,3,null);var c = vec__29867;var vec__29868 = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var block_x = cljs.core.nth.call(null,vec__29868,0,null);var block_y = cljs.core.nth.call(null,vec__29868,1,null);var balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));context.clearRect(0,0,c_width,c_height);
context.fillRect(block_x,block_y,breakout.core.block_width,breakout.core.block_height);
cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__29869(s__29870){return (new cljs.core.LazySeq(null,(function (){var s__29870__$1 = s__29870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29870__$1);if(temp__4092__auto__)
{var s__29870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29870__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__29870__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__29872 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__29871 = 0;while(true){
if((i__29871 < size__3638__auto__))
{var vec__29875 = cljs.core._nth.call(null,c__3637__auto__,i__29871);var brick_x = cljs.core.nth.call(null,vec__29875,0,null);var brick_y = cljs.core.nth.call(null,vec__29875,1,null);var brick = vec__29875;cljs.core.chunk_append.call(null,b__29872,breakout.core.draw_brick.call(null,brick,c,"black"));
{
var G__29881 = (i__29871 + 1);
i__29871 = G__29881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29872),iter__29869.call(null,cljs.core.chunk_rest.call(null,s__29870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29872),null);
}
} else
{var vec__29876 = cljs.core.first.call(null,s__29870__$2);var brick_x = cljs.core.nth.call(null,vec__29876,0,null);var brick_y = cljs.core.nth.call(null,vec__29876,1,null);var brick = vec__29876;return cljs.core.cons.call(null,breakout.core.draw_brick.call(null,brick,c,"black"),iter__29869.call(null,cljs.core.rest.call(null,s__29870__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,bricks);
})());
return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__29877(s__29878){return (new cljs.core.LazySeq(null,(function (){var s__29878__$1 = s__29878;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29878__$1);if(temp__4092__auto__)
{var s__29878__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29878__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__29878__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__29880 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__29879 = 0;while(true){
if((i__29879 < size__3638__auto__))
{var ball = cljs.core._nth.call(null,c__3637__auto__,i__29879);cljs.core.chunk_append.call(null,b__29880,breakout.core.draw_ball.call(null,ball,c,"black"));
{
var G__29882 = (i__29879 + 1);
i__29879 = G__29882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29880),iter__29877.call(null,cljs.core.chunk_rest.call(null,s__29878__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29880),null);
}
} else
{var ball = cljs.core.first.call(null,s__29878__$2);return cljs.core.cons.call(null,breakout.core.draw_ball.call(null,ball,c,"black"),iter__29877.call(null,cljs.core.rest.call(null,s__29878__$2)));
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
breakout.core.init_bricks = (function init_bricks(p__29883){var vec__29891 = p__29883;var canvas = cljs.core.nth.call(null,vec__29891,0,null);var context = cljs.core.nth.call(null,vec__29891,1,null);var c_width = cljs.core.nth.call(null,vec__29891,2,null);var c_height = cljs.core.nth.call(null,vec__29891,3,null);var iter__3639__auto__ = (function iter__29892(s__29893){return (new cljs.core.LazySeq(null,(function (){var s__29893__$1 = s__29893;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29893__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var corner_x = cljs.core.first.call(null,xs__4579__auto__);var iterys__3635__auto__ = ((function (s__29893__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function iter__29894(s__29895){return (new cljs.core.LazySeq(null,((function (s__29893__$1,corner_x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__29895__$1 = s__29895;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29895__$1);if(temp__4092__auto____$1)
{var s__29895__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29895__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__29895__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__29897 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__29896 = 0;while(true){
if((i__29896 < size__3638__auto__))
{var corner_y = cljs.core._nth.call(null,c__3637__auto__,i__29896);cljs.core.chunk_append.call(null,b__29897,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true));
{
var G__29898 = (i__29896 + 1);
i__29896 = G__29898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29897),iter__29894.call(null,cljs.core.chunk_rest.call(null,s__29895__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29897),null);
}
} else
{var corner_y = cljs.core.first.call(null,s__29895__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([corner_x,corner_y], true),iter__29894.call(null,cljs.core.rest.call(null,s__29895__$2)));
}
} else
{return null;
}
break;
}
});})(s__29893__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__29893__$1,corner_x,xs__4579__auto__,temp__4092__auto__))
;var fs__3636__auto__ = cljs.core.seq.call(null,iterys__3635__auto__.call(null,cljs.core.range.call(null,0,(c_height / 3),(breakout.core.brick_height + breakout.core.brick_space))));if(fs__3636__auto__)
{return cljs.core.concat.call(null,fs__3636__auto__,iter__29892.call(null,cljs.core.rest.call(null,s__29893__$1)));
} else
{{
var G__29899 = cljs.core.rest.call(null,s__29893__$1);
s__29893__$1 = G__29899;
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
breakout.core.init_block = (function init_block(p__29900){var vec__29902 = p__29900;var canvas = cljs.core.nth.call(null,vec__29902,0,null);var context = cljs.core.nth.call(null,vec__29902,1,null);var c_width = cljs.core.nth.call(null,vec__29902,2,null);var c_height = cljs.core.nth.call(null,vec__29902,3,null);return cljs.core.PersistentVector.fromArray([0,(c_height - breakout.core.block_height)], true);
});
breakout.core.init_balls = (function init_balls(p__29903){var vec__29905 = p__29903;var canvas = cljs.core.nth.call(null,vec__29905,0,null);var context = cljs.core.nth.call(null,vec__29905,1,null);var c_width = cljs.core.nth.call(null,vec__29905,2,null);var c_height = cljs.core.nth.call(null,vec__29905,3,null);var center_x = (c_width / 2);var center_y = (c_height / 2);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([center_x,center_y,3,4.5], true),cljs.core.PersistentVector.fromArray([150,center_y,-5,5], true),cljs.core.PersistentVector.fromArray([350,center_y,-4,-3.1], true)], true);
});
breakout.core.init_round = (function init_round(c){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"block","block",1107736575),breakout.core.init_block.call(null,c),new cljs.core.Keyword(null,"bricks","bricks",3928069060),cljs.core.set.call(null,breakout.core.init_bricks.call(null,c)),new cljs.core.Keyword(null,"balls","balls",1107406278),breakout.core.init_balls.call(null,c)], true);
});
breakout.core.get_curr_time = (function get_curr_time(){return Date.now();
});
breakout.core.move_ball = (function move_ball(i){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_29963){var state_val_29964 = (state_29963[1]);if((state_val_29964 === 2))
{var inst_29941 = (state_29963[2]);var inst_29942 = inst_29941.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var inst_29943 = cljs.core.nth.call(null,inst_29942,i);var inst_29944 = cljs.core.nth.call(null,inst_29943,0,null);var inst_29945 = cljs.core.nth.call(null,inst_29943,1,null);var inst_29946 = cljs.core.nth.call(null,inst_29943,2,null);var inst_29947 = cljs.core.nth.call(null,inst_29943,3,null);var inst_29948 = breakout.core.get_curr_time.call(null);var inst_29949 = (inst_29946 + inst_29944);var inst_29950 = (inst_29947 + inst_29945);var inst_29951 = cljs.core.vector.call(null,inst_29949,inst_29950,inst_29946,inst_29947);var inst_29952 = cljs.core.assoc.call(null,inst_29942,i,inst_29951);var inst_29953 = cljs.core.assoc.call(null,inst_29941,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_29952);var inst_29959 = cljs.core.async.chan.call(null,1);var inst_29960 = (function (){var new_state = inst_29953;var old_balls = inst_29942;var old_dy = inst_29947;var old_ball_y = inst_29945;var state = inst_29941;var old_dx = inst_29946;var old_ball_x = inst_29944;var vec__29939 = inst_29943;var new_ball = inst_29951;var curr_time = inst_29948;var new_balls = inst_29952;var old_ball = inst_29943;var c__5225__auto____$1 = inst_29959;return ((function (new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964){
return (function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = ((function (new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964){
return (function (state_29957){var state_val_29958 = (state_29957[1]);if((state_val_29958 === 2))
{var inst_29955 = (state_29957[2]);var state_29957__$1 = state_29957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29957__$1,inst_29955);
} else
{if((state_val_29958 === 1))
{var state_29957__$1 = state_29957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29957__$1,2,breakout.core.channel,new_state);
} else
{return null;
}
}
});})(new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964))
;return ((function (switch__5175__auto__,new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_29966 = (new Array(5));(statearr_29966[0] = state_machine__5176__auto__);
(statearr_29966[1] = 1);
return statearr_29966;
});
var state_machine__5176__auto____1 = (function (state_29957){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_29957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_29957){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_29957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__,new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964))
})();var state__5227__auto__ = (function (){var statearr_29967 = f__5226__auto__.call(null);(statearr_29967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto____$1);
return statearr_29967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
});
;})(new_state,old_balls,old_dy,old_ball_y,state,old_dx,old_ball_x,vec__29939,new_ball,curr_time,new_balls,old_ball,c__5225__auto____$1,inst_29941,inst_29942,inst_29943,inst_29944,inst_29945,inst_29946,inst_29947,inst_29948,inst_29949,inst_29950,inst_29951,inst_29952,inst_29953,inst_29959,state_val_29964))
})();var inst_29961 = cljs.core.async.impl.dispatch.run.call(null,inst_29960);var state_29963__$1 = (function (){var statearr_29968 = state_29963;(statearr_29968[5] = inst_29961);
return statearr_29968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29963__$1,inst_29959);
} else
{if((state_val_29964 === 1))
{var state_29963__$1 = state_29963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29963__$1,2,breakout.core.channel);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_29970 = (new Array(6));(statearr_29970[0] = state_machine__5176__auto__);
(statearr_29970[1] = 1);
return statearr_29970;
});
var state_machine__5176__auto____1 = (function (state_29963){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_29963);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_29963){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_29963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_29971 = f__5226__auto__.call(null);(statearr_29971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_29971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.get_four_points = (function get_four_points(p__29972){var vec__29974 = p__29972;var ball_x = cljs.core.nth.call(null,vec__29974,0,null);var ball_y = cljs.core.nth.call(null,vec__29974,1,null);var dx = cljs.core.nth.call(null,vec__29974,2,null);var dy = cljs.core.nth.call(null,vec__29974,3,null);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([(ball_x + breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([(ball_x - breakout.core.ball_radius),ball_y], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y + breakout.core.ball_radius)], true),cljs.core.PersistentVector.fromArray([ball_x,(ball_y - breakout.core.ball_radius)], true)], true);
});
breakout.core.in_bound_QMARK_ = (function in_bound_QMARK_(diff,bound){return ((diff <= bound)) && ((diff >= 0));
});
breakout.core.boundary_within_rect_QMARK_ = (function boundary_within_rect_QMARK_(p__29975,p__29976,rect_width,rect_height){var vec__29979 = p__29975;var x = cljs.core.nth.call(null,vec__29979,0,null);var y = cljs.core.nth.call(null,vec__29979,1,null);var vec__29980 = p__29976;var rect_x = cljs.core.nth.call(null,vec__29980,0,null);var rect_y = cljs.core.nth.call(null,vec__29980,1,null);var x_diff = (x - rect_x);var y_diff = (y - rect_y);var and__2952__auto__ = breakout.core.in_bound_QMARK_.call(null,x_diff,rect_width);if(cljs.core.truth_(and__2952__auto__))
{return breakout.core.in_bound_QMARK_.call(null,y_diff,rect_height);
} else
{return and__2952__auto__;
}
});
breakout.core.ball_rectangle_collision = (function ball_rectangle_collision(rect,rect_width,rect_height,ball){var ball_four_points = breakout.core.get_four_points.call(null,ball);return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__29981_SHARP_){return breakout.core.boundary_within_rect_QMARK_.call(null,p1__29981_SHARP_,rect,rect_width,rect_height);
}),ball_four_points));
});
/**
* direction-to-reverse is either :dx or :dy
*/
breakout.core.reverse_ball_direction = (function reverse_ball_direction(old_balls,p__29982,i,direction_to_reverse){var vec__29984 = p__29982;var ball_x = cljs.core.nth.call(null,vec__29984,0,null);var ball_y = cljs.core.nth.call(null,vec__29984,1,null);var dx = cljs.core.nth.call(null,vec__29984,2,null);var dy = cljs.core.nth.call(null,vec__29984,3,null);var ball = vec__29984;if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dy","dy",1013907463)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,dx,(-1 * dy)], true));
} else
{if(cljs.core._EQ_.call(null,direction_to_reverse,new cljs.core.Keyword(null,"dx","dx",1013907462)))
{return cljs.core.assoc.call(null,old_balls,i,cljs.core.PersistentVector.fromArray([ball_x,ball_y,(-1 * dx),dy], true));
} else
{return null;
}
}
});
breakout.core.check_ball_block_vertical_collision = (function check_ball_block_vertical_collision(state,i){var block = state.call(null,new cljs.core.Keyword(null,"block","block",1107736575));var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var vec__30004 = cljs.core.nth.call(null,old_balls,i);var ball_x = cljs.core.nth.call(null,vec__30004,0,null);var ball_y = cljs.core.nth.call(null,vec__30004,1,null);var old_dx = cljs.core.nth.call(null,vec__30004,2,null);var old_dy = cljs.core.nth.call(null,vec__30004,3,null);var ball = vec__30004;if(cljs.core.truth_(breakout.core.ball_rectangle_collision.call(null,block,breakout.core.block_width,breakout.core.block_height,ball)))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30010){var state_val_30011 = (state_30010[1]);if((state_val_30011 === 2))
{var inst_30008 = (state_30010[2]);var state_30010__$1 = state_30010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30010__$1,inst_30008);
} else
{if((state_val_30011 === 1))
{var inst_30005 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_30006 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_30005);var state_30010__$1 = state_30010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30010__$1,2,breakout.core.channel,inst_30006);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30013 = (new Array(5));(statearr_30013[0] = state_machine__5176__auto__);
(statearr_30013[1] = 1);
return statearr_30013;
});
var state_machine__5176__auto____1 = (function (state_30010){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30010);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30010){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30014 = f__5226__auto__.call(null);(statearr_30014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30018){var state_val_30019 = (state_30018[1]);if((state_val_30019 === 2))
{var inst_30016 = (state_30018[2]);var state_30018__$1 = state_30018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30018__$1,inst_30016);
} else
{if((state_val_30019 === 1))
{var state_30018__$1 = state_30018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30018__$1,2,breakout.core.channel,state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30021 = (new Array(5));(statearr_30021[0] = state_machine__5176__auto__);
(statearr_30021[1] = 1);
return statearr_30021;
});
var state_machine__5176__auto____1 = (function (state_30018){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30018){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30022 = f__5226__auto__.call(null);(statearr_30022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
}
});
breakout.core.check_ball_block_collision = (function check_ball_block_collision(state,i){return breakout.core.check_ball_block_vertical_collision.call(null,state,i);
});
breakout.core.get_collided_bricks = (function get_collided_bricks(ball,bricks){return cljs.core.filter.call(null,(function (p1__30023_SHARP_){return breakout.core.ball_rectangle_collision.call(null,p1__30023_SHARP_,breakout.core.brick_width,breakout.core.brick_height,ball);
}),bricks);
});
breakout.core.check_ball_brick_collision = (function check_ball_brick_collision(state,c,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var all_bricks = state.call(null,new cljs.core.Keyword(null,"bricks","bricks",3928069060));var collided_bricks = breakout.core.get_collided_bricks.call(null,ball,all_bricks);if(!(cljs.core.empty_QMARK_.call(null,collided_bricks)))
{cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__30048(s__30049){return (new cljs.core.LazySeq(null,(function (){var s__30049__$1 = s__30049;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30049__$1);if(temp__4092__auto__)
{var s__30049__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30049__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__30049__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__30051 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__30050 = 0;while(true){
if((i__30050 < size__3638__auto__))
{var brick = cljs.core._nth.call(null,c__3637__auto__,i__30050);cljs.core.chunk_append.call(null,b__30051,breakout.core.erase_brick.call(null,brick,c,i));
{
var G__30072 = (i__30050 + 1);
i__30050 = G__30072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30051),iter__30048.call(null,cljs.core.chunk_rest.call(null,s__30049__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30051),null);
}
} else
{var brick = cljs.core.first.call(null,s__30049__$2);return cljs.core.cons.call(null,breakout.core.erase_brick.call(null,brick,c,i),iter__30048.call(null,cljs.core.rest.call(null,s__30049__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3639__auto__.call(null,collided_bricks);
})());
var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30059){var state_val_30060 = (state_30059[1]);if((state_val_30060 === 2))
{var inst_30057 = (state_30059[2]);var state_30059__$1 = state_30059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30059__$1,inst_30057);
} else
{if((state_val_30060 === 1))
{var inst_30052 = cljs.core.set.call(null,collided_bricks);var inst_30053 = clojure.set.difference.call(null,all_bricks,inst_30052);var inst_30054 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_30055 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bricks","bricks",3928069060),inst_30053,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_30054);var state_30059__$1 = state_30059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30059__$1,2,breakout.core.channel,inst_30055);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30062 = (new Array(5));(statearr_30062[0] = state_machine__5176__auto__);
(statearr_30062[1] = 1);
return statearr_30062;
});
var state_machine__5176__auto____1 = (function (state_30059){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30059);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30059){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30063 = f__5226__auto__.call(null);(statearr_30063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30067){var state_val_30068 = (state_30067[1]);if((state_val_30068 === 2))
{var inst_30065 = (state_30067[2]);var state_30067__$1 = state_30067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else
{if((state_val_30068 === 1))
{var state_30067__$1 = state_30067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,2,breakout.core.channel,state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30070 = (new Array(5));(statearr_30070[0] = state_machine__5176__auto__);
(statearr_30070[1] = 1);
return statearr_30070;
});
var state_machine__5176__auto____1 = (function (state_30067){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30071 = f__5226__auto__.call(null);(statearr_30071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
}
});
breakout.core.hit_side_wall_QMARK_ = (function hit_side_wall_QMARK_(p__30073,c_width){var vec__30075 = p__30073;var x = cljs.core.nth.call(null,vec__30075,0,null);var y = cljs.core.nth.call(null,vec__30075,1,null);return ((x <= 0)) || ((x >= c_width));
});
breakout.core.check_side_wall_collision = (function check_side_wall_collision(state,i,c_width){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__30076_SHARP_){return breakout.core.hit_side_wall_QMARK_.call(null,p1__30076_SHARP_,c_width);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30100){var state_val_30101 = (state_30100[1]);if((state_val_30101 === 2))
{var inst_30098 = (state_30100[2]);var state_30100__$1 = state_30100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30100__$1,inst_30098);
} else
{if((state_val_30101 === 1))
{var inst_30095 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dx","dx",1013907462));var inst_30096 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_30095);var state_30100__$1 = state_30100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30100__$1,2,breakout.core.channel,inst_30096);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30103 = (new Array(5));(statearr_30103[0] = state_machine__5176__auto__);
(statearr_30103[1] = 1);
return statearr_30103;
});
var state_machine__5176__auto____1 = (function (state_30100){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30100){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30104 = f__5226__auto__.call(null);(statearr_30104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30108){var state_val_30109 = (state_30108[1]);if((state_val_30109 === 2))
{var inst_30106 = (state_30108[2]);var state_30108__$1 = state_30108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30108__$1,inst_30106);
} else
{if((state_val_30109 === 1))
{var state_30108__$1 = state_30108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30108__$1,2,breakout.core.channel,state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30111 = (new Array(5));(statearr_30111[0] = state_machine__5176__auto__);
(statearr_30111[1] = 1);
return statearr_30111;
});
var state_machine__5176__auto____1 = (function (state_30108){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30108);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30108){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30112 = f__5226__auto__.call(null);(statearr_30112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
}
});
breakout.core.hit_top_wall_QMARK_ = (function hit_top_wall_QMARK_(p__30113){var vec__30115 = p__30113;var x = cljs.core.nth.call(null,vec__30115,0,null);var y = cljs.core.nth.call(null,vec__30115,1,null);return (y <= 0);
});
breakout.core.check_top_wall_collision = (function check_top_wall_collision(state,i){var old_balls = state.call(null,new cljs.core.Keyword(null,"balls","balls",1107406278));var ball = cljs.core.nth.call(null,old_balls,i);var ball_four_points = breakout.core.get_four_points.call(null,ball);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__30116_SHARP_){return breakout.core.hit_top_wall_QMARK_.call(null,p1__30116_SHARP_);
}),ball_four_points))))
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30140){var state_val_30141 = (state_30140[1]);if((state_val_30141 === 2))
{var inst_30138 = (state_30140[2]);var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30140__$1,inst_30138);
} else
{if((state_val_30141 === 1))
{var inst_30135 = breakout.core.reverse_ball_direction.call(null,old_balls,ball,i,new cljs.core.Keyword(null,"dy","dy",1013907463));var inst_30136 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"balls","balls",1107406278),inst_30135);var state_30140__$1 = state_30140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30140__$1,2,breakout.core.channel,inst_30136);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30143 = (new Array(5));(statearr_30143[0] = state_machine__5176__auto__);
(statearr_30143[1] = 1);
return statearr_30143;
});
var state_machine__5176__auto____1 = (function (state_30140){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30140){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30144 = f__5226__auto__.call(null);(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
} else
{var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30148){var state_val_30149 = (state_30148[1]);if((state_val_30149 === 2))
{var inst_30146 = (state_30148[2]);var state_30148__$1 = state_30148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30148__$1,inst_30146);
} else
{if((state_val_30149 === 1))
{var state_30148__$1 = state_30148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30148__$1,2,breakout.core.channel,state);
} else
{return null;
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30151 = (new Array(5));(statearr_30151[0] = state_machine__5176__auto__);
(statearr_30151[1] = 1);
return statearr_30151;
});
var state_machine__5176__auto____1 = (function (state_30148){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30148){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30152 = f__5226__auto__.call(null);(statearr_30152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
}
});
breakout.core.check_collisions = (function check_collisions(i,p__30153){var vec__30176 = p__30153;var canvas = cljs.core.nth.call(null,vec__30176,0,null);var context = cljs.core.nth.call(null,vec__30176,1,null);var c_width = cljs.core.nth.call(null,vec__30176,2,null);var c_height = cljs.core.nth.call(null,vec__30176,3,null);var c = vec__30176;var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30190){var state_val_30191 = (state_30190[1]);if((state_val_30191 === 5))
{var inst_30187 = (state_30190[2]);var inst_30188 = breakout.core.check_top_wall_collision.call(null,inst_30187,i);var state_30190__$1 = state_30190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30190__$1,inst_30188);
} else
{if((state_val_30191 === 4))
{var inst_30184 = (state_30190[2]);var inst_30185 = breakout.core.check_side_wall_collision.call(null,inst_30184,i,c_width);var state_30190__$1 = (function (){var statearr_30192 = state_30190;(statearr_30192[5] = inst_30185);
return statearr_30192;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30190__$1,5,breakout.core.game_tap);
} else
{if((state_val_30191 === 3))
{var inst_30181 = (state_30190[2]);var inst_30182 = breakout.core.check_ball_brick_collision.call(null,inst_30181,c,i);var state_30190__$1 = (function (){var statearr_30193 = state_30190;(statearr_30193[6] = inst_30182);
return statearr_30193;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30190__$1,4,breakout.core.game_tap);
} else
{if((state_val_30191 === 2))
{var inst_30178 = (state_30190[2]);var inst_30179 = breakout.core.check_ball_block_collision.call(null,inst_30178,i);var state_30190__$1 = (function (){var statearr_30194 = state_30190;(statearr_30194[7] = inst_30179);
return statearr_30194;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30190__$1,3,breakout.core.game_tap);
} else
{if((state_val_30191 === 1))
{var state_30190__$1 = state_30190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30190__$1,2,breakout.core.game_tap);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_30196 = (new Array(8));(statearr_30196[0] = state_machine__5176__auto__);
(statearr_30196[1] = 1);
return statearr_30196;
});
var state_machine__5176__auto____1 = (function (state_30190){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30190);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30190){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30197 = f__5226__auto__.call(null);(statearr_30197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.tick_one_ball = (function tick_one_ball(c,i){breakout.core.move_ball.call(null,i);
return breakout.core.check_collisions.call(null,i,c);
});
breakout.core.game = (function game(p__30198,num_balls){var vec__30204 = p__30198;var canvas = cljs.core.nth.call(null,vec__30204,0,null);var context = cljs.core.nth.call(null,vec__30204,1,null);var c_width = cljs.core.nth.call(null,vec__30204,2,null);var c_height = cljs.core.nth.call(null,vec__30204,3,null);var c = vec__30204;return cljs.core.dorun.call(null,(function (){var iter__3639__auto__ = (function iter__30205(s__30206){return (new cljs.core.LazySeq(null,(function (){var s__30206__$1 = s__30206;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30206__$1);if(temp__4092__auto__)
{var s__30206__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30206__$2))
{var c__3637__auto__ = cljs.core.chunk_first.call(null,s__30206__$2);var size__3638__auto__ = cljs.core.count.call(null,c__3637__auto__);var b__30208 = cljs.core.chunk_buffer.call(null,size__3638__auto__);if((function (){var i__30207 = 0;while(true){
if((i__30207 < size__3638__auto__))
{var i = cljs.core._nth.call(null,c__3637__auto__,i__30207);cljs.core.chunk_append.call(null,b__30208,breakout.core.tick_one_ball.call(null,c,i));
{
var G__30209 = (i__30207 + 1);
i__30207 = G__30209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30208),iter__30205.call(null,cljs.core.chunk_rest.call(null,s__30206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30208),null);
}
} else
{var i = cljs.core.first.call(null,s__30206__$2);return cljs.core.cons.call(null,breakout.core.tick_one_ball.call(null,c,i),iter__30205.call(null,cljs.core.rest.call(null,s__30206__$2)));
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
breakout.core.draw_looper = (function draw_looper(){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30246){var state_val_30247 = (state_30246[1]);if((state_val_30247 === 7))
{var inst_30237 = (state_30246[2]);var inst_30238 = breakout.core.draw_everything.call(null,inst_30237);var state_30246__$1 = (function (){var statearr_30248 = state_30246;(statearr_30248[5] = inst_30238);
return statearr_30248;
})();var statearr_30249_30258 = state_30246__$1;(statearr_30249_30258[2] = null);
(statearr_30249_30258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30247 === 6))
{var inst_30242 = (state_30246[2]);var state_30246__$1 = state_30246;var statearr_30250_30259 = state_30246__$1;(statearr_30250_30259[2] = inst_30242);
(statearr_30250_30259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30247 === 5))
{var state_30246__$1 = state_30246;var statearr_30251_30260 = state_30246__$1;(statearr_30251_30260[2] = null);
(statearr_30251_30260[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30247 === 4))
{var state_30246__$1 = state_30246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,7,breakout.core.draw_tap);
} else
{if((state_val_30247 === 3))
{var inst_30244 = (state_30246[2]);var state_30246__$1 = state_30246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else
{if((state_val_30247 === 2))
{var state_30246__$1 = state_30246;if(true)
{var statearr_30252_30261 = state_30246__$1;(statearr_30252_30261[1] = 4);
} else
{var statearr_30253_30262 = state_30246__$1;(statearr_30253_30262[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30247 === 1))
{var state_30246__$1 = state_30246;var statearr_30254_30263 = state_30246__$1;(statearr_30254_30263[2] = null);
(statearr_30254_30263[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_30256 = (new Array(6));(statearr_30256[0] = state_machine__5176__auto__);
(statearr_30256[1] = 1);
return statearr_30256;
});
var state_machine__5176__auto____1 = (function (state_30246){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30257 = f__5226__auto__.call(null);(statearr_30257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_30257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
breakout.core.draw_looper.call(null);
var vec__30264_30296 = breakout.core.get_context.call(null);var canvas_30297 = cljs.core.nth.call(null,vec__30264_30296,0,null);var context_30298 = cljs.core.nth.call(null,vec__30264_30296,1,null);var c_width_30299 = cljs.core.nth.call(null,vec__30264_30296,2,null);var c_height_30300 = cljs.core.nth.call(null,vec__30264_30296,3,null);var c_30301 = vec__30264_30296;var init_state_30302 = breakout.core.init_round.call(null,c_30301);var c__5225__auto___30303 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_30282){var state_val_30283 = (state_30282[1]);if((state_val_30283 === 8))
{var inst_30274 = (state_30282[2]);var state_30282__$1 = (function (){var statearr_30284 = state_30282;(statearr_30284[5] = inst_30274);
return statearr_30284;
})();var statearr_30285_30304 = state_30282__$1;(statearr_30285_30304[2] = null);
(statearr_30285_30304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30283 === 7))
{var inst_30278 = (state_30282[2]);var state_30282__$1 = state_30282;var statearr_30286_30305 = state_30282__$1;(statearr_30286_30305[2] = inst_30278);
(statearr_30286_30305[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30283 === 6))
{var state_30282__$1 = state_30282;var statearr_30287_30306 = state_30282__$1;(statearr_30287_30306[2] = null);
(statearr_30287_30306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30283 === 5))
{var inst_30269 = new cljs.core.Keyword(null,"balls","balls",1107406278).cljs$core$IFn$_invoke$arity$1(init_state_30302);var inst_30270 = cljs.core.count.call(null,inst_30269);var inst_30271 = breakout.core.game.call(null,c_30301,inst_30270);var inst_30272 = cljs.core.async.timeout.call(null,4);var state_30282__$1 = (function (){var statearr_30288 = state_30282;(statearr_30288[6] = inst_30271);
return statearr_30288;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30282__$1,8,inst_30272);
} else
{if((state_val_30283 === 4))
{var inst_30280 = (state_30282[2]);var state_30282__$1 = state_30282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30282__$1,inst_30280);
} else
{if((state_val_30283 === 3))
{var state_30282__$1 = state_30282;if(true)
{var statearr_30289_30307 = state_30282__$1;(statearr_30289_30307[1] = 5);
} else
{var statearr_30290_30308 = state_30282__$1;(statearr_30290_30308[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30283 === 2))
{var inst_30266 = (state_30282[2]);var state_30282__$1 = (function (){var statearr_30291 = state_30282;(statearr_30291[7] = inst_30266);
return statearr_30291;
})();var statearr_30292_30309 = state_30282__$1;(statearr_30292_30309[2] = null);
(statearr_30292_30309[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30283 === 1))
{var state_30282__$1 = state_30282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30282__$1,2,breakout.core.channel,init_state_30302);
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
var state_machine__5176__auto____0 = (function (){var statearr_30294 = (new Array(8));(statearr_30294[0] = state_machine__5176__auto__);
(statearr_30294[1] = 1);
return statearr_30294;
});
var state_machine__5176__auto____1 = (function (state_30282){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_30282);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_30282){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_30282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_30295 = f__5226__auto__.call(null);(statearr_30295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___30303);
return statearr_30295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));

//@ sourceMappingURL=core.js.map