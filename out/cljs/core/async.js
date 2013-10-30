goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11145 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11145');

/**
* @constructor
*/
cljs.core.async.t11145 = (function (f,fn_handler,meta11146){
this.f = f;
this.fn_handler = fn_handler;
this.meta11146 = meta11146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11145.cljs$lang$type = true;
cljs.core.async.t11145.cljs$lang$ctorStr = "cljs.core.async/t11145";
cljs.core.async.t11145.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11145");
});
cljs.core.async.t11145.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11147){var self__ = this;
var _11147__$1 = this;return self__.meta11146;
});
cljs.core.async.t11145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11147,meta11146__$1){var self__ = this;
var _11147__$1 = this;return (new cljs.core.async.t11145(self__.f,self__.fn_handler,meta11146__$1));
});
cljs.core.async.__GT_t11145 = (function __GT_t11145(f__$1,fn_handler__$1,meta11146){return (new cljs.core.async.t11145(f__$1,fn_handler__$1,meta11146));
});
}
return (new cljs.core.async.t11145(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11148 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11148);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11148);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__2952__auto__ = ret;if(cljs.core.truth_(and__2952__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__2952__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3717__auto___11149 = n;var x_11150 = 0;while(true){
if((x_11150 < n__3717__auto___11149))
{(a[x_11150] = 0);
{
var G__11151 = (x_11150 + 1);
x_11150 = G__11151;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11152 = (i + 1);
i = G__11152;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11156 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11156');

/**
* @constructor
*/
cljs.core.async.t11156 = (function (flag,alt_flag,meta11157){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11157 = meta11157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11156.cljs$lang$type = true;
cljs.core.async.t11156.cljs$lang$ctorStr = "cljs.core.async/t11156";
cljs.core.async.t11156.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11156");
});
cljs.core.async.t11156.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11158){var self__ = this;
var _11158__$1 = this;return self__.meta11157;
});
cljs.core.async.t11156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11158,meta11157__$1){var self__ = this;
var _11158__$1 = this;return (new cljs.core.async.t11156(self__.flag,self__.alt_flag,meta11157__$1));
});
cljs.core.async.__GT_t11156 = (function __GT_t11156(flag__$1,alt_flag__$1,meta11157){return (new cljs.core.async.t11156(flag__$1,alt_flag__$1,meta11157));
});
}
return (new cljs.core.async.t11156(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11162 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11162');

/**
* @constructor
*/
cljs.core.async.t11162 = (function (cb,flag,alt_handler,meta11163){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11163 = meta11163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11162.cljs$lang$type = true;
cljs.core.async.t11162.cljs$lang$ctorStr = "cljs.core.async/t11162";
cljs.core.async.t11162.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11162");
});
cljs.core.async.t11162.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11164){var self__ = this;
var _11164__$1 = this;return self__.meta11163;
});
cljs.core.async.t11162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11164,meta11163__$1){var self__ = this;
var _11164__$1 = this;return (new cljs.core.async.t11162(self__.cb,self__.flag,self__.alt_handler,meta11163__$1));
});
cljs.core.async.__GT_t11162 = (function __GT_t11162(cb__$1,flag__$1,alt_handler__$1,meta11163){return (new cljs.core.async.t11162(cb__$1,flag__$1,alt_handler__$1,meta11163));
});
}
return (new cljs.core.async.t11162(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11165_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11165_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__2961__auto__ = wport;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__11166 = (i + 1);
i = G__11166;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__2961__auto__ = ret;if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__2952__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__2952__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__2952__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11167){var map__11169 = p__11167;var map__11169__$1 = ((cljs.core.seq_QMARK_.call(null,map__11169))?cljs.core.apply.call(null,cljs.core.hash_map,map__11169):map__11169);var opts = map__11169__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11167 = null;if (arguments.length > 1) {
  p__11167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11167);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11170){
var ports = cljs.core.first(arglist__11170);
var p__11167 = cljs.core.rest(arglist__11170);
return alts_BANG___delegate(ports,p__11167);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11178 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11178');

/**
* @constructor
*/
cljs.core.async.t11178 = (function (ch,f,map_LT_,meta11179){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11179 = meta11179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11178.cljs$lang$type = true;
cljs.core.async.t11178.cljs$lang$ctorStr = "cljs.core.async/t11178";
cljs.core.async.t11178.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11178");
});
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11181 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11181');

/**
* @constructor
*/
cljs.core.async.t11181 = (function (fn1,_,meta11179,ch,f,map_LT_,meta11182){
this.fn1 = fn1;
this._ = _;
this.meta11179 = meta11179;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11182 = meta11182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11181.cljs$lang$type = true;
cljs.core.async.t11181.cljs$lang$ctorStr = "cljs.core.async/t11181";
cljs.core.async.t11181.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11181");
});
cljs.core.async.t11181.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11181.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11171_SHARP_){return f1.call(null,(((p1__11171_SHARP_ == null))?null:self__.f.call(null,p1__11171_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11183){var self__ = this;
var _11183__$1 = this;return self__.meta11182;
});
cljs.core.async.t11181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11183,meta11182__$1){var self__ = this;
var _11183__$1 = this;return (new cljs.core.async.t11181(self__.fn1,self__._,self__.meta11179,self__.ch,self__.f,self__.map_LT_,meta11182__$1));
});
cljs.core.async.__GT_t11181 = (function __GT_t11181(fn1__$1,___$2,meta11179__$1,ch__$2,f__$2,map_LT___$2,meta11182){return (new cljs.core.async.t11181(fn1__$1,___$2,meta11179__$1,ch__$2,f__$2,map_LT___$2,meta11182));
});
}
return (new cljs.core.async.t11181(fn1,___$1,self__.meta11179,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__2952__auto__ = ret;if(cljs.core.truth_(and__2952__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__2952__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11180){var self__ = this;
var _11180__$1 = this;return self__.meta11179;
});
cljs.core.async.t11178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11180,meta11179__$1){var self__ = this;
var _11180__$1 = this;return (new cljs.core.async.t11178(self__.ch,self__.f,self__.map_LT_,meta11179__$1));
});
cljs.core.async.__GT_t11178 = (function __GT_t11178(ch__$1,f__$1,map_LT___$1,meta11179){return (new cljs.core.async.t11178(ch__$1,f__$1,map_LT___$1,meta11179));
});
}
return (new cljs.core.async.t11178(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11187 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11187');

/**
* @constructor
*/
cljs.core.async.t11187 = (function (ch,f,map_GT_,meta11188){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11188 = meta11188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11187.cljs$lang$type = true;
cljs.core.async.t11187.cljs$lang$ctorStr = "cljs.core.async/t11187";
cljs.core.async.t11187.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11187");
});
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11189){var self__ = this;
var _11189__$1 = this;return self__.meta11188;
});
cljs.core.async.t11187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11189,meta11188__$1){var self__ = this;
var _11189__$1 = this;return (new cljs.core.async.t11187(self__.ch,self__.f,self__.map_GT_,meta11188__$1));
});
cljs.core.async.__GT_t11187 = (function __GT_t11187(ch__$1,f__$1,map_GT___$1,meta11188){return (new cljs.core.async.t11187(ch__$1,f__$1,map_GT___$1,meta11188));
});
}
return (new cljs.core.async.t11187(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11193 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11193');

/**
* @constructor
*/
cljs.core.async.t11193 = (function (ch,p,filter_GT_,meta11194){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11194 = meta11194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11193.cljs$lang$type = true;
cljs.core.async.t11193.cljs$lang$ctorStr = "cljs.core.async/t11193";
cljs.core.async.t11193.cljs$lang$ctorPrWriter = (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t11193");
});
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11195){var self__ = this;
var _11195__$1 = this;return self__.meta11194;
});
cljs.core.async.t11193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11195,meta11194__$1){var self__ = this;
var _11195__$1 = this;return (new cljs.core.async.t11193(self__.ch,self__.p,self__.filter_GT_,meta11194__$1));
});
cljs.core.async.__GT_t11193 = (function __GT_t11193(ch__$1,p__$1,filter_GT___$1,meta11194){return (new cljs.core.async.t11193(ch__$1,p__$1,filter_GT___$1,meta11194));
});
}
return (new cljs.core.async.t11193(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5225__auto___11270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11253){var state_val_11254 = (state_11253[1]);if((state_val_11254 === 1))
{var state_11253__$1 = state_11253;var statearr_11255_11271 = state_11253__$1;(statearr_11255_11271[2] = null);
(statearr_11255_11271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 2))
{var state_11253__$1 = state_11253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11253__$1,4,ch);
} else
{if((state_val_11254 === 3))
{var inst_11251 = (state_11253[2]);var state_11253__$1 = state_11253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11253__$1,inst_11251);
} else
{if((state_val_11254 === 4))
{var inst_11235 = (state_11253[5]);var inst_11235__$1 = (state_11253[2]);var inst_11236 = (inst_11235__$1 == null);var state_11253__$1 = (function (){var statearr_11256 = state_11253;(statearr_11256[5] = inst_11235__$1);
return statearr_11256;
})();if(cljs.core.truth_(inst_11236))
{var statearr_11257_11272 = state_11253__$1;(statearr_11257_11272[1] = 5);
} else
{var statearr_11258_11273 = state_11253__$1;(statearr_11258_11273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 5))
{var inst_11238 = cljs.core.async.close_BANG_.call(null,out);var state_11253__$1 = state_11253;var statearr_11259_11274 = state_11253__$1;(statearr_11259_11274[2] = inst_11238);
(statearr_11259_11274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 6))
{var inst_11235 = (state_11253[5]);var inst_11240 = p.call(null,inst_11235);var state_11253__$1 = state_11253;if(cljs.core.truth_(inst_11240))
{var statearr_11260_11275 = state_11253__$1;(statearr_11260_11275[1] = 8);
} else
{var statearr_11261_11276 = state_11253__$1;(statearr_11261_11276[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 7))
{var inst_11249 = (state_11253[2]);var state_11253__$1 = state_11253;var statearr_11262_11277 = state_11253__$1;(statearr_11262_11277[2] = inst_11249);
(statearr_11262_11277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 8))
{var inst_11235 = (state_11253[5]);var state_11253__$1 = state_11253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11253__$1,11,out,inst_11235);
} else
{if((state_val_11254 === 9))
{var state_11253__$1 = state_11253;var statearr_11263_11278 = state_11253__$1;(statearr_11263_11278[2] = null);
(statearr_11263_11278[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 10))
{var inst_11246 = (state_11253[2]);var state_11253__$1 = (function (){var statearr_11264 = state_11253;(statearr_11264[6] = inst_11246);
return statearr_11264;
})();var statearr_11265_11279 = state_11253__$1;(statearr_11265_11279[2] = null);
(statearr_11265_11279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11254 === 11))
{var inst_11243 = (state_11253[2]);var state_11253__$1 = state_11253;var statearr_11266_11280 = state_11253__$1;(statearr_11266_11280[2] = inst_11243);
(statearr_11266_11280[1] = 10);
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
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_11268 = (new Array(7));(statearr_11268[0] = state_machine__5176__auto__);
(statearr_11268[1] = 1);
return statearr_11268;
});
var state_machine__5176__auto____1 = (function (state_11253){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11253){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11269 = f__5226__auto__.call(null);(statearr_11269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___11270);
return statearr_11269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11428){var state_val_11429 = (state_11428[1]);if((state_val_11429 === 1))
{var state_11428__$1 = state_11428;var statearr_11430_11463 = state_11428__$1;(statearr_11430_11463[2] = null);
(statearr_11430_11463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 2))
{var state_11428__$1 = state_11428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11428__$1,4,in$);
} else
{if((state_val_11429 === 3))
{var inst_11426 = (state_11428[2]);var state_11428__$1 = state_11428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11428__$1,inst_11426);
} else
{if((state_val_11429 === 4))
{var inst_11374 = (state_11428[5]);var inst_11374__$1 = (state_11428[2]);var inst_11375 = (inst_11374__$1 == null);var state_11428__$1 = (function (){var statearr_11431 = state_11428;(statearr_11431[5] = inst_11374__$1);
return statearr_11431;
})();if(cljs.core.truth_(inst_11375))
{var statearr_11432_11464 = state_11428__$1;(statearr_11432_11464[1] = 5);
} else
{var statearr_11433_11465 = state_11428__$1;(statearr_11433_11465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 5))
{var inst_11377 = cljs.core.async.close_BANG_.call(null,out);var state_11428__$1 = state_11428;var statearr_11434_11466 = state_11428__$1;(statearr_11434_11466[2] = inst_11377);
(statearr_11434_11466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 6))
{var inst_11374 = (state_11428[5]);var inst_11379 = f.call(null,inst_11374);var inst_11384 = cljs.core.seq.call(null,inst_11379);var inst_11385 = inst_11384;var inst_11386 = null;var inst_11387 = 0;var inst_11388 = 0;var state_11428__$1 = (function (){var statearr_11435 = state_11428;(statearr_11435[6] = inst_11388);
(statearr_11435[7] = inst_11387);
(statearr_11435[8] = inst_11386);
(statearr_11435[9] = inst_11385);
return statearr_11435;
})();var statearr_11436_11467 = state_11428__$1;(statearr_11436_11467[2] = null);
(statearr_11436_11467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 7))
{var inst_11424 = (state_11428[2]);var state_11428__$1 = state_11428;var statearr_11437_11468 = state_11428__$1;(statearr_11437_11468[2] = inst_11424);
(statearr_11437_11468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 8))
{var inst_11388 = (state_11428[6]);var inst_11387 = (state_11428[7]);var inst_11390 = (inst_11388 < inst_11387);var inst_11391 = inst_11390;var state_11428__$1 = state_11428;if(cljs.core.truth_(inst_11391))
{var statearr_11438_11469 = state_11428__$1;(statearr_11438_11469[1] = 10);
} else
{var statearr_11439_11470 = state_11428__$1;(statearr_11439_11470[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 9))
{var inst_11421 = (state_11428[2]);var state_11428__$1 = (function (){var statearr_11440 = state_11428;(statearr_11440[10] = inst_11421);
return statearr_11440;
})();var statearr_11441_11471 = state_11428__$1;(statearr_11441_11471[2] = null);
(statearr_11441_11471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 10))
{var inst_11388 = (state_11428[6]);var inst_11386 = (state_11428[8]);var inst_11393 = cljs.core._nth.call(null,inst_11386,inst_11388);var state_11428__$1 = state_11428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11428__$1,13,out,inst_11393);
} else
{if((state_val_11429 === 11))
{var inst_11385 = (state_11428[9]);var inst_11399 = (state_11428[11]);var inst_11399__$1 = cljs.core.seq.call(null,inst_11385);var state_11428__$1 = (function (){var statearr_11445 = state_11428;(statearr_11445[11] = inst_11399__$1);
return statearr_11445;
})();if(inst_11399__$1)
{var statearr_11446_11472 = state_11428__$1;(statearr_11446_11472[1] = 14);
} else
{var statearr_11447_11473 = state_11428__$1;(statearr_11447_11473[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 12))
{var inst_11419 = (state_11428[2]);var state_11428__$1 = state_11428;var statearr_11448_11474 = state_11428__$1;(statearr_11448_11474[2] = inst_11419);
(statearr_11448_11474[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 13))
{var inst_11388 = (state_11428[6]);var inst_11387 = (state_11428[7]);var inst_11386 = (state_11428[8]);var inst_11385 = (state_11428[9]);var inst_11395 = (state_11428[2]);var inst_11396 = (inst_11388 + 1);var tmp11442 = inst_11387;var tmp11443 = inst_11386;var tmp11444 = inst_11385;var inst_11385__$1 = tmp11444;var inst_11386__$1 = tmp11443;var inst_11387__$1 = tmp11442;var inst_11388__$1 = inst_11396;var state_11428__$1 = (function (){var statearr_11449 = state_11428;(statearr_11449[6] = inst_11388__$1);
(statearr_11449[7] = inst_11387__$1);
(statearr_11449[8] = inst_11386__$1);
(statearr_11449[9] = inst_11385__$1);
(statearr_11449[12] = inst_11395);
return statearr_11449;
})();var statearr_11450_11475 = state_11428__$1;(statearr_11450_11475[2] = null);
(statearr_11450_11475[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 14))
{var inst_11399 = (state_11428[11]);var inst_11401 = cljs.core.chunked_seq_QMARK_.call(null,inst_11399);var state_11428__$1 = state_11428;if(inst_11401)
{var statearr_11451_11476 = state_11428__$1;(statearr_11451_11476[1] = 17);
} else
{var statearr_11452_11477 = state_11428__$1;(statearr_11452_11477[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 15))
{var state_11428__$1 = state_11428;var statearr_11453_11478 = state_11428__$1;(statearr_11453_11478[2] = null);
(statearr_11453_11478[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 16))
{var inst_11417 = (state_11428[2]);var state_11428__$1 = state_11428;var statearr_11454_11479 = state_11428__$1;(statearr_11454_11479[2] = inst_11417);
(statearr_11454_11479[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 17))
{var inst_11399 = (state_11428[11]);var inst_11403 = cljs.core.chunk_first.call(null,inst_11399);var inst_11404 = cljs.core.chunk_rest.call(null,inst_11399);var inst_11405 = cljs.core.count.call(null,inst_11403);var inst_11385 = inst_11404;var inst_11386 = inst_11403;var inst_11387 = inst_11405;var inst_11388 = 0;var state_11428__$1 = (function (){var statearr_11455 = state_11428;(statearr_11455[6] = inst_11388);
(statearr_11455[7] = inst_11387);
(statearr_11455[8] = inst_11386);
(statearr_11455[9] = inst_11385);
return statearr_11455;
})();var statearr_11456_11480 = state_11428__$1;(statearr_11456_11480[2] = null);
(statearr_11456_11480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 18))
{var inst_11399 = (state_11428[11]);var inst_11408 = cljs.core.first.call(null,inst_11399);var state_11428__$1 = state_11428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11428__$1,20,out,inst_11408);
} else
{if((state_val_11429 === 19))
{var inst_11414 = (state_11428[2]);var state_11428__$1 = state_11428;var statearr_11457_11481 = state_11428__$1;(statearr_11457_11481[2] = inst_11414);
(statearr_11457_11481[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11429 === 20))
{var inst_11399 = (state_11428[11]);var inst_11410 = (state_11428[2]);var inst_11411 = cljs.core.next.call(null,inst_11399);var inst_11385 = inst_11411;var inst_11386 = null;var inst_11387 = 0;var inst_11388 = 0;var state_11428__$1 = (function (){var statearr_11458 = state_11428;(statearr_11458[6] = inst_11388);
(statearr_11458[7] = inst_11387);
(statearr_11458[8] = inst_11386);
(statearr_11458[9] = inst_11385);
(statearr_11458[13] = inst_11410);
return statearr_11458;
})();var statearr_11459_11482 = state_11428__$1;(statearr_11459_11482[2] = null);
(statearr_11459_11482[1] = 8);
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
}
}
}
}
}
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
var state_machine__5176__auto____0 = (function (){var statearr_11461 = (new Array(14));(statearr_11461[0] = state_machine__5176__auto__);
(statearr_11461[1] = 1);
return statearr_11461;
});
var state_machine__5176__auto____1 = (function (state_11428){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11428){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11462 = f__5226__auto__.call(null);(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5225__auto___11555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11538){var state_val_11539 = (state_11538[1]);if((state_val_11539 === 1))
{var state_11538__$1 = state_11538;var statearr_11540_11556 = state_11538__$1;(statearr_11540_11556[2] = null);
(statearr_11540_11556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 2))
{var state_11538__$1 = state_11538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11538__$1,4,from);
} else
{if((state_val_11539 === 3))
{var inst_11536 = (state_11538[2]);var state_11538__$1 = state_11538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11538__$1,inst_11536);
} else
{if((state_val_11539 === 4))
{var inst_11521 = (state_11538[5]);var inst_11521__$1 = (state_11538[2]);var inst_11522 = (inst_11521__$1 == null);var state_11538__$1 = (function (){var statearr_11541 = state_11538;(statearr_11541[5] = inst_11521__$1);
return statearr_11541;
})();if(cljs.core.truth_(inst_11522))
{var statearr_11542_11557 = state_11538__$1;(statearr_11542_11557[1] = 5);
} else
{var statearr_11543_11558 = state_11538__$1;(statearr_11543_11558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 5))
{var state_11538__$1 = state_11538;if(cljs.core.truth_(close_QMARK_))
{var statearr_11544_11559 = state_11538__$1;(statearr_11544_11559[1] = 8);
} else
{var statearr_11545_11560 = state_11538__$1;(statearr_11545_11560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 6))
{var inst_11521 = (state_11538[5]);var state_11538__$1 = state_11538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11538__$1,11,to,inst_11521);
} else
{if((state_val_11539 === 7))
{var inst_11534 = (state_11538[2]);var state_11538__$1 = state_11538;var statearr_11546_11561 = state_11538__$1;(statearr_11546_11561[2] = inst_11534);
(statearr_11546_11561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 8))
{var inst_11525 = cljs.core.async.close_BANG_.call(null,to);var state_11538__$1 = state_11538;var statearr_11547_11562 = state_11538__$1;(statearr_11547_11562[2] = inst_11525);
(statearr_11547_11562[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 9))
{var state_11538__$1 = state_11538;var statearr_11548_11563 = state_11538__$1;(statearr_11548_11563[2] = null);
(statearr_11548_11563[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 10))
{var inst_11528 = (state_11538[2]);var state_11538__$1 = state_11538;var statearr_11549_11564 = state_11538__$1;(statearr_11549_11564[2] = inst_11528);
(statearr_11549_11564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11539 === 11))
{var inst_11531 = (state_11538[2]);var state_11538__$1 = (function (){var statearr_11550 = state_11538;(statearr_11550[6] = inst_11531);
return statearr_11550;
})();var statearr_11551_11565 = state_11538__$1;(statearr_11551_11565[2] = null);
(statearr_11551_11565[1] = 2);
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
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_11553 = (new Array(7));(statearr_11553[0] = state_machine__5176__auto__);
(statearr_11553[1] = 1);
return statearr_11553;
});
var state_machine__5176__auto____1 = (function (state_11538){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11538);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11538){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11554 = f__5226__auto__.call(null);(statearr_11554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___11555);
return statearr_11554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5225__auto___11644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11626){var state_val_11627 = (state_11626[1]);if((state_val_11627 === 1))
{var state_11626__$1 = state_11626;var statearr_11628_11645 = state_11626__$1;(statearr_11628_11645[2] = null);
(statearr_11628_11645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 2))
{var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11626__$1,4,ch);
} else
{if((state_val_11627 === 3))
{var inst_11624 = (state_11626[2]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else
{if((state_val_11627 === 4))
{var inst_11607 = (state_11626[5]);var inst_11607__$1 = (state_11626[2]);var inst_11608 = (inst_11607__$1 == null);var state_11626__$1 = (function (){var statearr_11629 = state_11626;(statearr_11629[5] = inst_11607__$1);
return statearr_11629;
})();if(cljs.core.truth_(inst_11608))
{var statearr_11630_11646 = state_11626__$1;(statearr_11630_11646[1] = 5);
} else
{var statearr_11631_11647 = state_11626__$1;(statearr_11631_11647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 5))
{var inst_11610 = cljs.core.async.close_BANG_.call(null,tc);var inst_11611 = cljs.core.async.close_BANG_.call(null,fc);var state_11626__$1 = (function (){var statearr_11632 = state_11626;(statearr_11632[6] = inst_11610);
return statearr_11632;
})();var statearr_11633_11648 = state_11626__$1;(statearr_11633_11648[2] = inst_11611);
(statearr_11633_11648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 6))
{var inst_11607 = (state_11626[5]);var inst_11613 = p.call(null,inst_11607);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11613))
{var statearr_11634_11649 = state_11626__$1;(statearr_11634_11649[1] = 9);
} else
{var statearr_11635_11650 = state_11626__$1;(statearr_11635_11650[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 7))
{var inst_11622 = (state_11626[2]);var state_11626__$1 = state_11626;var statearr_11636_11651 = state_11626__$1;(statearr_11636_11651[2] = inst_11622);
(statearr_11636_11651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 8))
{var inst_11619 = (state_11626[2]);var state_11626__$1 = (function (){var statearr_11637 = state_11626;(statearr_11637[7] = inst_11619);
return statearr_11637;
})();var statearr_11638_11652 = state_11626__$1;(statearr_11638_11652[2] = null);
(statearr_11638_11652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 9))
{var state_11626__$1 = state_11626;var statearr_11639_11653 = state_11626__$1;(statearr_11639_11653[2] = tc);
(statearr_11639_11653[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 10))
{var state_11626__$1 = state_11626;var statearr_11640_11654 = state_11626__$1;(statearr_11640_11654[2] = fc);
(statearr_11640_11654[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 11))
{var inst_11607 = (state_11626[5]);var inst_11617 = (state_11626[2]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11626__$1,8,inst_11617,inst_11607);
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
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_11642 = (new Array(8));(statearr_11642[0] = state_machine__5176__auto__);
(statearr_11642[1] = 1);
return statearr_11642;
});
var state_machine__5176__auto____1 = (function (state_11626){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11643 = f__5226__auto__.call(null);(statearr_11643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___11644);
return statearr_11643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11697){var state_val_11698 = (state_11697[1]);if((state_val_11698 === 7))
{var inst_11693 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11699_11711 = state_11697__$1;(statearr_11699_11711[2] = inst_11693);
(statearr_11699_11711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 6))
{var inst_11686 = (state_11697[5]);var inst_11683 = (state_11697[6]);var inst_11690 = f.call(null,inst_11683,inst_11686);var inst_11683__$1 = inst_11690;var state_11697__$1 = (function (){var statearr_11700 = state_11697;(statearr_11700[6] = inst_11683__$1);
return statearr_11700;
})();var statearr_11701_11712 = state_11697__$1;(statearr_11701_11712[2] = null);
(statearr_11701_11712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 5))
{var inst_11683 = (state_11697[6]);var state_11697__$1 = state_11697;var statearr_11702_11713 = state_11697__$1;(statearr_11702_11713[2] = inst_11683);
(statearr_11702_11713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 4))
{var inst_11686 = (state_11697[5]);var inst_11686__$1 = (state_11697[2]);var inst_11687 = (inst_11686__$1 == null);var state_11697__$1 = (function (){var statearr_11703 = state_11697;(statearr_11703[5] = inst_11686__$1);
return statearr_11703;
})();if(cljs.core.truth_(inst_11687))
{var statearr_11704_11714 = state_11697__$1;(statearr_11704_11714[1] = 5);
} else
{var statearr_11705_11715 = state_11697__$1;(statearr_11705_11715[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 3))
{var inst_11695 = (state_11697[2]);var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else
{if((state_val_11698 === 2))
{var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11697__$1,4,ch);
} else
{if((state_val_11698 === 1))
{var inst_11683 = init;var state_11697__$1 = (function (){var statearr_11706 = state_11697;(statearr_11706[6] = inst_11683);
return statearr_11706;
})();var statearr_11707_11716 = state_11697__$1;(statearr_11707_11716[2] = null);
(statearr_11707_11716[1] = 2);
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
var state_machine__5176__auto____0 = (function (){var statearr_11709 = (new Array(7));(statearr_11709[0] = state_machine__5176__auto__);
(statearr_11709[1] = 1);
return statearr_11709;
});
var state_machine__5176__auto____1 = (function (state_11697){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11710 = f__5226__auto__.call(null);(statearr_11710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_11710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5225__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_11774){var state_val_11775 = (state_11774[1]);if((state_val_11775 === 1))
{var inst_11754 = cljs.core.seq.call(null,coll);var inst_11755 = inst_11754;var state_11774__$1 = (function (){var statearr_11776 = state_11774;(statearr_11776[5] = inst_11755);
return statearr_11776;
})();var statearr_11777_11791 = state_11774__$1;(statearr_11777_11791[2] = null);
(statearr_11777_11791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 2))
{var inst_11755 = (state_11774[5]);var state_11774__$1 = state_11774;if(cljs.core.truth_(inst_11755))
{var statearr_11778_11792 = state_11774__$1;(statearr_11778_11792[1] = 4);
} else
{var statearr_11779_11793 = state_11774__$1;(statearr_11779_11793[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 3))
{var inst_11772 = (state_11774[2]);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11774__$1,inst_11772);
} else
{if((state_val_11775 === 4))
{var inst_11755 = (state_11774[5]);var inst_11758 = cljs.core.first.call(null,inst_11755);var state_11774__$1 = state_11774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11774__$1,7,ch,inst_11758);
} else
{if((state_val_11775 === 5))
{var state_11774__$1 = state_11774;if(cljs.core.truth_(close_QMARK_))
{var statearr_11780_11794 = state_11774__$1;(statearr_11780_11794[1] = 8);
} else
{var statearr_11781_11795 = state_11774__$1;(statearr_11781_11795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 6))
{var inst_11770 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11782_11796 = state_11774__$1;(statearr_11782_11796[2] = inst_11770);
(statearr_11782_11796[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 7))
{var inst_11755 = (state_11774[5]);var inst_11760 = (state_11774[2]);var inst_11761 = cljs.core.next.call(null,inst_11755);var inst_11755__$1 = inst_11761;var state_11774__$1 = (function (){var statearr_11783 = state_11774;(statearr_11783[5] = inst_11755__$1);
(statearr_11783[6] = inst_11760);
return statearr_11783;
})();var statearr_11784_11797 = state_11774__$1;(statearr_11784_11797[2] = null);
(statearr_11784_11797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 8))
{var inst_11765 = cljs.core.async.close_BANG_.call(null,ch);var state_11774__$1 = state_11774;var statearr_11785_11798 = state_11774__$1;(statearr_11785_11798[2] = inst_11765);
(statearr_11785_11798[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 9))
{var state_11774__$1 = state_11774;var statearr_11786_11799 = state_11774__$1;(statearr_11786_11799[2] = null);
(statearr_11786_11799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11775 === 10))
{var inst_11768 = (state_11774[2]);var state_11774__$1 = state_11774;var statearr_11787_11800 = state_11774__$1;(statearr_11787_11800[2] = inst_11768);
(statearr_11787_11800[1] = 6);
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
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_11789 = (new Array(7));(statearr_11789[0] = state_machine__5176__auto__);
(statearr_11789[1] = 1);
return statearr_11789;
});
var state_machine__5176__auto____1 = (function (state_11774){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_11774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_11774){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_11774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_11790 = f__5226__auto__.call(null);(statearr_11790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto__);
return statearr_11790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return c__5225__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__2952__auto__ = _;if(and__2952__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__2952__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3556__auto__ = (((_ == null))?null:_);return (function (){var or__2961__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12013 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12013');

/**
* @constructor
*/
cljs.core.async.t12013 = (function (cs,ch,mult,meta12014){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12014 = meta12014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12013.cljs$lang$type = true;
cljs.core.async.t12013.cljs$lang$ctorStr = "cljs.core.async/t12013";
cljs.core.async.t12013.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t12013");
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12013.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12015){var self__ = this;
var _12015__$1 = this;return self__.meta12014;
});})(cs))
;
cljs.core.async.t12013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12015,meta12014__$1){var self__ = this;
var _12015__$1 = this;return (new cljs.core.async.t12013(self__.cs,self__.ch,self__.mult,meta12014__$1));
});})(cs))
;
cljs.core.async.__GT_t12013 = ((function (cs){
return (function __GT_t12013(cs__$1,ch__$1,mult__$1,meta12014){return (new cljs.core.async.t12013(cs__$1,ch__$1,mult__$1,meta12014));
});})(cs))
;
}
return (new cljs.core.async.t12013(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5225__auto___12225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12143){var state_val_12144 = (state_12143[1]);if((state_val_12144 === 32))
{try{var inst_12018 = (state_12143[5]);var inst_12094 = (state_12143[6]);var inst_12100 = cljs.core.async.put_BANG_.call(null,inst_12094,inst_12018,done);var state_12143__$1 = state_12143;var statearr_12147_12226 = state_12143__$1;(statearr_12147_12226[2] = inst_12100);
(statearr_12147_12226[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12145){if((e12145 instanceof Object))
{var ex__5169__auto__ = e12145;var statearr_12146_12227 = state_12143;(statearr_12146_12227[1] = 31);
(statearr_12146_12227[2] = ex__5169__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12145;
} else
{return null;
}
}
}} else
{if((state_val_12144 === 1))
{var state_12143__$1 = state_12143;var statearr_12148_12228 = state_12143__$1;(statearr_12148_12228[2] = null);
(statearr_12148_12228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 33))
{var inst_12106 = (state_12143[7]);var inst_12108 = cljs.core.chunked_seq_QMARK_.call(null,inst_12106);var state_12143__$1 = state_12143;if(inst_12108)
{var statearr_12149_12229 = state_12143__$1;(statearr_12149_12229[1] = 36);
} else
{var statearr_12150_12230 = state_12143__$1;(statearr_12150_12230[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 2))
{var state_12143__$1 = state_12143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12143__$1,4,ch);
} else
{if((state_val_12144 === 34))
{var state_12143__$1 = state_12143;var statearr_12151_12231 = state_12143__$1;(statearr_12151_12231[2] = null);
(statearr_12151_12231[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 3))
{var inst_12141 = (state_12143[2]);var state_12143__$1 = state_12143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12143__$1,inst_12141);
} else
{if((state_val_12144 === 35))
{var inst_12130 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12152_12232 = state_12143__$1;(statearr_12152_12232[2] = inst_12130);
(statearr_12152_12232[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 4))
{var inst_12018 = (state_12143[5]);var inst_12018__$1 = (state_12143[2]);var inst_12019 = (inst_12018__$1 == null);var state_12143__$1 = (function (){var statearr_12153 = state_12143;(statearr_12153[5] = inst_12018__$1);
return statearr_12153;
})();if(cljs.core.truth_(inst_12019))
{var statearr_12154_12233 = state_12143__$1;(statearr_12154_12233[1] = 5);
} else
{var statearr_12155_12234 = state_12143__$1;(statearr_12155_12234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 36))
{var inst_12106 = (state_12143[7]);var inst_12110 = cljs.core.chunk_first.call(null,inst_12106);var inst_12111 = cljs.core.chunk_rest.call(null,inst_12106);var inst_12112 = cljs.core.count.call(null,inst_12110);var inst_12086 = inst_12111;var inst_12087 = inst_12110;var inst_12088 = inst_12112;var inst_12089 = 0;var state_12143__$1 = (function (){var statearr_12156 = state_12143;(statearr_12156[8] = inst_12088);
(statearr_12156[9] = inst_12089);
(statearr_12156[10] = inst_12086);
(statearr_12156[11] = inst_12087);
return statearr_12156;
})();var statearr_12157_12235 = state_12143__$1;(statearr_12157_12235[2] = null);
(statearr_12157_12235[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 5))
{var inst_12025 = cljs.core.deref.call(null,cs);var inst_12026 = cljs.core.seq.call(null,inst_12025);var inst_12027 = inst_12026;var inst_12028 = null;var inst_12029 = 0;var inst_12030 = 0;var state_12143__$1 = (function (){var statearr_12158 = state_12143;(statearr_12158[12] = inst_12028);
(statearr_12158[13] = inst_12029);
(statearr_12158[14] = inst_12027);
(statearr_12158[15] = inst_12030);
return statearr_12158;
})();var statearr_12159_12236 = state_12143__$1;(statearr_12159_12236[2] = null);
(statearr_12159_12236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 37))
{var inst_12106 = (state_12143[7]);var inst_12115 = cljs.core.first.call(null,inst_12106);var state_12143__$1 = (function (){var statearr_12160 = state_12143;(statearr_12160[16] = inst_12115);
return statearr_12160;
})();var statearr_12161_12237 = state_12143__$1;(statearr_12161_12237[2] = null);
(statearr_12161_12237[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 6))
{var inst_12077 = cljs.core.deref.call(null,cs);var inst_12078 = cljs.core.keys.call(null,inst_12077);var inst_12079 = cljs.core.count.call(null,inst_12078);var inst_12080 = cljs.core.reset_BANG_.call(null,dctr,inst_12079);var inst_12085 = cljs.core.seq.call(null,inst_12078);var inst_12086 = inst_12085;var inst_12087 = null;var inst_12088 = 0;var inst_12089 = 0;var state_12143__$1 = (function (){var statearr_12162 = state_12143;(statearr_12162[17] = inst_12080);
(statearr_12162[8] = inst_12088);
(statearr_12162[9] = inst_12089);
(statearr_12162[10] = inst_12086);
(statearr_12162[11] = inst_12087);
return statearr_12162;
})();var statearr_12163_12238 = state_12143__$1;(statearr_12163_12238[2] = null);
(statearr_12163_12238[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 38))
{var inst_12127 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12164_12239 = state_12143__$1;(statearr_12164_12239[2] = inst_12127);
(statearr_12164_12239[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 7))
{var inst_12139 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12165_12240 = state_12143__$1;(statearr_12165_12240[2] = inst_12139);
(statearr_12165_12240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 39))
{var inst_12106 = (state_12143[7]);var inst_12123 = (state_12143[2]);var inst_12124 = cljs.core.next.call(null,inst_12106);var inst_12086 = inst_12124;var inst_12087 = null;var inst_12088 = 0;var inst_12089 = 0;var state_12143__$1 = (function (){var statearr_12166 = state_12143;(statearr_12166[8] = inst_12088);
(statearr_12166[9] = inst_12089);
(statearr_12166[10] = inst_12086);
(statearr_12166[11] = inst_12087);
(statearr_12166[18] = inst_12123);
return statearr_12166;
})();var statearr_12167_12241 = state_12143__$1;(statearr_12167_12241[2] = null);
(statearr_12167_12241[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 8))
{var inst_12029 = (state_12143[13]);var inst_12030 = (state_12143[15]);var inst_12032 = (inst_12030 < inst_12029);var inst_12033 = inst_12032;var state_12143__$1 = state_12143;if(cljs.core.truth_(inst_12033))
{var statearr_12168_12242 = state_12143__$1;(statearr_12168_12242[1] = 10);
} else
{var statearr_12169_12243 = state_12143__$1;(statearr_12169_12243[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 40))
{var inst_12115 = (state_12143[16]);var inst_12116 = (state_12143[2]);var inst_12117 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12118 = cljs.core.async.untap_STAR_.call(null,m,inst_12115);var state_12143__$1 = (function (){var statearr_12170 = state_12143;(statearr_12170[19] = inst_12116);
(statearr_12170[20] = inst_12117);
return statearr_12170;
})();var statearr_12171_12244 = state_12143__$1;(statearr_12171_12244[2] = inst_12118);
(statearr_12171_12244[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 9))
{var inst_12075 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12172_12245 = state_12143__$1;(statearr_12172_12245[2] = inst_12075);
(statearr_12172_12245[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 41))
{try{var inst_12115 = (state_12143[16]);var inst_12018 = (state_12143[5]);var inst_12121 = cljs.core.async.put_BANG_.call(null,inst_12115,inst_12018,done);var state_12143__$1 = state_12143;var statearr_12175_12246 = state_12143__$1;(statearr_12175_12246[2] = inst_12121);
(statearr_12175_12246[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12173){if((e12173 instanceof Object))
{var ex__5169__auto__ = e12173;var statearr_12174_12247 = state_12143;(statearr_12174_12247[1] = 40);
(statearr_12174_12247[2] = ex__5169__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12173;
} else
{return null;
}
}
}} else
{if((state_val_12144 === 10))
{var inst_12028 = (state_12143[12]);var inst_12030 = (state_12143[15]);var inst_12036 = cljs.core._nth.call(null,inst_12028,inst_12030);var inst_12037 = cljs.core.nth.call(null,inst_12036,0,null);var inst_12038 = cljs.core.nth.call(null,inst_12036,1,null);var state_12143__$1 = (function (){var statearr_12176 = state_12143;(statearr_12176[21] = inst_12037);
return statearr_12176;
})();if(cljs.core.truth_(inst_12038))
{var statearr_12177_12248 = state_12143__$1;(statearr_12177_12248[1] = 13);
} else
{var statearr_12178_12249 = state_12143__$1;(statearr_12178_12249[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 42))
{var inst_12136 = (state_12143[2]);var state_12143__$1 = (function (){var statearr_12179 = state_12143;(statearr_12179[22] = inst_12136);
return statearr_12179;
})();var statearr_12180_12250 = state_12143__$1;(statearr_12180_12250[2] = null);
(statearr_12180_12250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 11))
{var inst_12027 = (state_12143[14]);var inst_12047 = (state_12143[23]);var inst_12047__$1 = cljs.core.seq.call(null,inst_12027);var state_12143__$1 = (function (){var statearr_12181 = state_12143;(statearr_12181[23] = inst_12047__$1);
return statearr_12181;
})();if(inst_12047__$1)
{var statearr_12182_12251 = state_12143__$1;(statearr_12182_12251[1] = 16);
} else
{var statearr_12183_12252 = state_12143__$1;(statearr_12183_12252[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 12))
{var inst_12073 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12184_12253 = state_12143__$1;(statearr_12184_12253[2] = inst_12073);
(statearr_12184_12253[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 13))
{var inst_12037 = (state_12143[21]);var inst_12040 = cljs.core.async.close_BANG_.call(null,inst_12037);var state_12143__$1 = state_12143;var statearr_12188_12254 = state_12143__$1;(statearr_12188_12254[2] = inst_12040);
(statearr_12188_12254[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 14))
{var state_12143__$1 = state_12143;var statearr_12189_12255 = state_12143__$1;(statearr_12189_12255[2] = null);
(statearr_12189_12255[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 15))
{var inst_12028 = (state_12143[12]);var inst_12029 = (state_12143[13]);var inst_12027 = (state_12143[14]);var inst_12030 = (state_12143[15]);var inst_12043 = (state_12143[2]);var inst_12044 = (inst_12030 + 1);var tmp12185 = inst_12028;var tmp12186 = inst_12029;var tmp12187 = inst_12027;var inst_12027__$1 = tmp12187;var inst_12028__$1 = tmp12185;var inst_12029__$1 = tmp12186;var inst_12030__$1 = inst_12044;var state_12143__$1 = (function (){var statearr_12190 = state_12143;(statearr_12190[12] = inst_12028__$1);
(statearr_12190[13] = inst_12029__$1);
(statearr_12190[14] = inst_12027__$1);
(statearr_12190[15] = inst_12030__$1);
(statearr_12190[24] = inst_12043);
return statearr_12190;
})();var statearr_12191_12256 = state_12143__$1;(statearr_12191_12256[2] = null);
(statearr_12191_12256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 16))
{var inst_12047 = (state_12143[23]);var inst_12049 = cljs.core.chunked_seq_QMARK_.call(null,inst_12047);var state_12143__$1 = state_12143;if(inst_12049)
{var statearr_12192_12257 = state_12143__$1;(statearr_12192_12257[1] = 19);
} else
{var statearr_12193_12258 = state_12143__$1;(statearr_12193_12258[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 17))
{var state_12143__$1 = state_12143;var statearr_12194_12259 = state_12143__$1;(statearr_12194_12259[2] = null);
(statearr_12194_12259[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 18))
{var inst_12071 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12195_12260 = state_12143__$1;(statearr_12195_12260[2] = inst_12071);
(statearr_12195_12260[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 19))
{var inst_12047 = (state_12143[23]);var inst_12051 = cljs.core.chunk_first.call(null,inst_12047);var inst_12052 = cljs.core.chunk_rest.call(null,inst_12047);var inst_12053 = cljs.core.count.call(null,inst_12051);var inst_12027 = inst_12052;var inst_12028 = inst_12051;var inst_12029 = inst_12053;var inst_12030 = 0;var state_12143__$1 = (function (){var statearr_12196 = state_12143;(statearr_12196[12] = inst_12028);
(statearr_12196[13] = inst_12029);
(statearr_12196[14] = inst_12027);
(statearr_12196[15] = inst_12030);
return statearr_12196;
})();var statearr_12197_12261 = state_12143__$1;(statearr_12197_12261[2] = null);
(statearr_12197_12261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 20))
{var inst_12047 = (state_12143[23]);var inst_12057 = cljs.core.first.call(null,inst_12047);var inst_12058 = cljs.core.nth.call(null,inst_12057,0,null);var inst_12059 = cljs.core.nth.call(null,inst_12057,1,null);var state_12143__$1 = (function (){var statearr_12198 = state_12143;(statearr_12198[25] = inst_12058);
return statearr_12198;
})();if(cljs.core.truth_(inst_12059))
{var statearr_12199_12262 = state_12143__$1;(statearr_12199_12262[1] = 22);
} else
{var statearr_12200_12263 = state_12143__$1;(statearr_12200_12263[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 21))
{var inst_12068 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12201_12264 = state_12143__$1;(statearr_12201_12264[2] = inst_12068);
(statearr_12201_12264[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 22))
{var inst_12058 = (state_12143[25]);var inst_12061 = cljs.core.async.close_BANG_.call(null,inst_12058);var state_12143__$1 = state_12143;var statearr_12202_12265 = state_12143__$1;(statearr_12202_12265[2] = inst_12061);
(statearr_12202_12265[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 23))
{var state_12143__$1 = state_12143;var statearr_12203_12266 = state_12143__$1;(statearr_12203_12266[2] = null);
(statearr_12203_12266[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 24))
{var inst_12047 = (state_12143[23]);var inst_12064 = (state_12143[2]);var inst_12065 = cljs.core.next.call(null,inst_12047);var inst_12027 = inst_12065;var inst_12028 = null;var inst_12029 = 0;var inst_12030 = 0;var state_12143__$1 = (function (){var statearr_12204 = state_12143;(statearr_12204[26] = inst_12064);
(statearr_12204[12] = inst_12028);
(statearr_12204[13] = inst_12029);
(statearr_12204[14] = inst_12027);
(statearr_12204[15] = inst_12030);
return statearr_12204;
})();var statearr_12205_12267 = state_12143__$1;(statearr_12205_12267[2] = null);
(statearr_12205_12267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 25))
{var inst_12088 = (state_12143[8]);var inst_12089 = (state_12143[9]);var inst_12091 = (inst_12089 < inst_12088);var inst_12092 = inst_12091;var state_12143__$1 = state_12143;if(cljs.core.truth_(inst_12092))
{var statearr_12206_12268 = state_12143__$1;(statearr_12206_12268[1] = 27);
} else
{var statearr_12207_12269 = state_12143__$1;(statearr_12207_12269[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 26))
{var inst_12134 = (state_12143[2]);var state_12143__$1 = (function (){var statearr_12208 = state_12143;(statearr_12208[27] = inst_12134);
return statearr_12208;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12143__$1,42,dchan);
} else
{if((state_val_12144 === 27))
{var inst_12089 = (state_12143[9]);var inst_12087 = (state_12143[11]);var inst_12094 = cljs.core._nth.call(null,inst_12087,inst_12089);var state_12143__$1 = (function (){var statearr_12209 = state_12143;(statearr_12209[6] = inst_12094);
return statearr_12209;
})();var statearr_12210_12270 = state_12143__$1;(statearr_12210_12270[2] = null);
(statearr_12210_12270[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 28))
{var inst_12106 = (state_12143[7]);var inst_12086 = (state_12143[10]);var inst_12106__$1 = cljs.core.seq.call(null,inst_12086);var state_12143__$1 = (function (){var statearr_12214 = state_12143;(statearr_12214[7] = inst_12106__$1);
return statearr_12214;
})();if(inst_12106__$1)
{var statearr_12215_12271 = state_12143__$1;(statearr_12215_12271[1] = 33);
} else
{var statearr_12216_12272 = state_12143__$1;(statearr_12216_12272[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 29))
{var inst_12132 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12217_12273 = state_12143__$1;(statearr_12217_12273[2] = inst_12132);
(statearr_12217_12273[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 30))
{var inst_12088 = (state_12143[8]);var inst_12089 = (state_12143[9]);var inst_12086 = (state_12143[10]);var inst_12087 = (state_12143[11]);var inst_12102 = (state_12143[2]);var inst_12103 = (inst_12089 + 1);var tmp12211 = inst_12088;var tmp12212 = inst_12086;var tmp12213 = inst_12087;var inst_12086__$1 = tmp12212;var inst_12087__$1 = tmp12213;var inst_12088__$1 = tmp12211;var inst_12089__$1 = inst_12103;var state_12143__$1 = (function (){var statearr_12218 = state_12143;(statearr_12218[28] = inst_12102);
(statearr_12218[8] = inst_12088__$1);
(statearr_12218[9] = inst_12089__$1);
(statearr_12218[10] = inst_12086__$1);
(statearr_12218[11] = inst_12087__$1);
return statearr_12218;
})();var statearr_12219_12274 = state_12143__$1;(statearr_12219_12274[2] = null);
(statearr_12219_12274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 31))
{var inst_12094 = (state_12143[6]);var inst_12095 = (state_12143[2]);var inst_12096 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12097 = cljs.core.async.untap_STAR_.call(null,m,inst_12094);var state_12143__$1 = (function (){var statearr_12220 = state_12143;(statearr_12220[29] = inst_12096);
(statearr_12220[30] = inst_12095);
return statearr_12220;
})();var statearr_12221_12275 = state_12143__$1;(statearr_12221_12275[2] = inst_12097);
(statearr_12221_12275[1] = 30);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5176__auto____0 = (function (){var statearr_12223 = (new Array(31));(statearr_12223[0] = state_machine__5176__auto__);
(statearr_12223[1] = 1);
return statearr_12223;
});
var state_machine__5176__auto____1 = (function (state_12143){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12143);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12143){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12224 = f__5226__auto__.call(null);(statearr_12224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___12225);
return statearr_12224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__2952__auto__ = m;if(and__2952__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3556__auto__ = (((m == null))?null:m);return (function (){var or__2961__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12381 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12381');

/**
* @constructor
*/
cljs.core.async.t12381 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12382){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12382 = meta12382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12381.cljs$lang$type = true;
cljs.core.async.t12381.cljs$lang$ctorStr = "cljs.core.async/t12381";
cljs.core.async.t12381.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t12381");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12383){var self__ = this;
var _12383__$1 = this;return self__.meta12382;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12383,meta12382__$1){var self__ = this;
var _12383__$1 = this;return (new cljs.core.async.t12381(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12382__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12381 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12381(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12382){return (new cljs.core.async.t12381(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12382));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12381(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5225__auto___12486 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12448){var state_val_12449 = (state_12448[1]);if((state_val_12449 === 1))
{var inst_12387 = (state_12448[5]);var inst_12387__$1 = calc_state.call(null);var inst_12388 = cljs.core.seq_QMARK_.call(null,inst_12387__$1);var state_12448__$1 = (function (){var statearr_12450 = state_12448;(statearr_12450[5] = inst_12387__$1);
return statearr_12450;
})();if(inst_12388)
{var statearr_12451_12487 = state_12448__$1;(statearr_12451_12487[1] = 2);
} else
{var statearr_12452_12488 = state_12448__$1;(statearr_12452_12488[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 2))
{var inst_12387 = (state_12448[5]);var inst_12390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12387);var state_12448__$1 = state_12448;var statearr_12453_12489 = state_12448__$1;(statearr_12453_12489[2] = inst_12390);
(statearr_12453_12489[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 3))
{var inst_12387 = (state_12448[5]);var state_12448__$1 = state_12448;var statearr_12454_12490 = state_12448__$1;(statearr_12454_12490[2] = inst_12387);
(statearr_12454_12490[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 4))
{var inst_12387 = (state_12448[5]);var inst_12393 = (state_12448[2]);var inst_12394 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12395 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12396 = cljs.core.get.call(null,inst_12393,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12397 = inst_12387;var state_12448__$1 = (function (){var statearr_12455 = state_12448;(statearr_12455[6] = inst_12396);
(statearr_12455[7] = inst_12397);
(statearr_12455[8] = inst_12394);
(statearr_12455[9] = inst_12395);
return statearr_12455;
})();var statearr_12456_12491 = state_12448__$1;(statearr_12456_12491[2] = null);
(statearr_12456_12491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 5))
{var inst_12397 = (state_12448[7]);var inst_12400 = cljs.core.seq_QMARK_.call(null,inst_12397);var state_12448__$1 = state_12448;if(inst_12400)
{var statearr_12457_12492 = state_12448__$1;(statearr_12457_12492[1] = 7);
} else
{var statearr_12458_12493 = state_12448__$1;(statearr_12458_12493[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 6))
{var inst_12446 = (state_12448[2]);var state_12448__$1 = state_12448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12448__$1,inst_12446);
} else
{if((state_val_12449 === 7))
{var inst_12397 = (state_12448[7]);var inst_12402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12397);var state_12448__$1 = state_12448;var statearr_12459_12494 = state_12448__$1;(statearr_12459_12494[2] = inst_12402);
(statearr_12459_12494[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 8))
{var inst_12397 = (state_12448[7]);var state_12448__$1 = state_12448;var statearr_12460_12495 = state_12448__$1;(statearr_12460_12495[2] = inst_12397);
(statearr_12460_12495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 9))
{var inst_12405 = (state_12448[10]);var inst_12405__$1 = (state_12448[2]);var inst_12406 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12407 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12408 = cljs.core.get.call(null,inst_12405__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12448__$1 = (function (){var statearr_12461 = state_12448;(statearr_12461[11] = inst_12407);
(statearr_12461[12] = inst_12408);
(statearr_12461[10] = inst_12405__$1);
return statearr_12461;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12448__$1,10,inst_12406);
} else
{if((state_val_12449 === 10))
{var inst_12413 = (state_12448[13]);var inst_12412 = (state_12448[14]);var inst_12411 = (state_12448[2]);var inst_12412__$1 = cljs.core.nth.call(null,inst_12411,0,null);var inst_12413__$1 = cljs.core.nth.call(null,inst_12411,1,null);var inst_12414 = (inst_12412__$1 == null);var inst_12415 = cljs.core._EQ_.call(null,inst_12413__$1,change);var inst_12416 = (inst_12414) || (inst_12415);var state_12448__$1 = (function (){var statearr_12462 = state_12448;(statearr_12462[13] = inst_12413__$1);
(statearr_12462[14] = inst_12412__$1);
return statearr_12462;
})();if(cljs.core.truth_(inst_12416))
{var statearr_12463_12496 = state_12448__$1;(statearr_12463_12496[1] = 11);
} else
{var statearr_12464_12497 = state_12448__$1;(statearr_12464_12497[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 11))
{var inst_12412 = (state_12448[14]);var inst_12418 = (inst_12412 == null);var state_12448__$1 = state_12448;if(cljs.core.truth_(inst_12418))
{var statearr_12465_12498 = state_12448__$1;(statearr_12465_12498[1] = 14);
} else
{var statearr_12466_12499 = state_12448__$1;(statearr_12466_12499[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 12))
{var inst_12427 = (state_12448[15]);var inst_12408 = (state_12448[12]);var inst_12413 = (state_12448[13]);var inst_12427__$1 = inst_12408.call(null,inst_12413);var state_12448__$1 = (function (){var statearr_12467 = state_12448;(statearr_12467[15] = inst_12427__$1);
return statearr_12467;
})();if(cljs.core.truth_(inst_12427__$1))
{var statearr_12468_12500 = state_12448__$1;(statearr_12468_12500[1] = 17);
} else
{var statearr_12469_12501 = state_12448__$1;(statearr_12469_12501[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 13))
{var inst_12444 = (state_12448[2]);var state_12448__$1 = state_12448;var statearr_12470_12502 = state_12448__$1;(statearr_12470_12502[2] = inst_12444);
(statearr_12470_12502[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 14))
{var inst_12413 = (state_12448[13]);var inst_12420 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12413);var state_12448__$1 = state_12448;var statearr_12471_12503 = state_12448__$1;(statearr_12471_12503[2] = inst_12420);
(statearr_12471_12503[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 15))
{var state_12448__$1 = state_12448;var statearr_12472_12504 = state_12448__$1;(statearr_12472_12504[2] = null);
(statearr_12472_12504[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 16))
{var inst_12423 = (state_12448[2]);var inst_12424 = calc_state.call(null);var inst_12397 = inst_12424;var state_12448__$1 = (function (){var statearr_12473 = state_12448;(statearr_12473[7] = inst_12397);
(statearr_12473[16] = inst_12423);
return statearr_12473;
})();var statearr_12474_12505 = state_12448__$1;(statearr_12474_12505[2] = null);
(statearr_12474_12505[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 17))
{var inst_12427 = (state_12448[15]);var state_12448__$1 = state_12448;var statearr_12475_12506 = state_12448__$1;(statearr_12475_12506[2] = inst_12427);
(statearr_12475_12506[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 18))
{var inst_12407 = (state_12448[11]);var inst_12408 = (state_12448[12]);var inst_12413 = (state_12448[13]);var inst_12430 = cljs.core.empty_QMARK_.call(null,inst_12408);var inst_12431 = inst_12407.call(null,inst_12413);var inst_12432 = cljs.core.not.call(null,inst_12431);var inst_12433 = (inst_12430) && (inst_12432);var state_12448__$1 = state_12448;var statearr_12476_12507 = state_12448__$1;(statearr_12476_12507[2] = inst_12433);
(statearr_12476_12507[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 19))
{var inst_12435 = (state_12448[2]);var state_12448__$1 = state_12448;if(cljs.core.truth_(inst_12435))
{var statearr_12477_12508 = state_12448__$1;(statearr_12477_12508[1] = 20);
} else
{var statearr_12478_12509 = state_12448__$1;(statearr_12478_12509[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 20))
{var inst_12412 = (state_12448[14]);var state_12448__$1 = state_12448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12448__$1,23,out,inst_12412);
} else
{if((state_val_12449 === 21))
{var state_12448__$1 = state_12448;var statearr_12479_12510 = state_12448__$1;(statearr_12479_12510[2] = null);
(statearr_12479_12510[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 22))
{var inst_12405 = (state_12448[10]);var inst_12441 = (state_12448[2]);var inst_12397 = inst_12405;var state_12448__$1 = (function (){var statearr_12480 = state_12448;(statearr_12480[7] = inst_12397);
(statearr_12480[17] = inst_12441);
return statearr_12480;
})();var statearr_12481_12511 = state_12448__$1;(statearr_12481_12511[2] = null);
(statearr_12481_12511[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12449 === 23))
{var inst_12438 = (state_12448[2]);var state_12448__$1 = state_12448;var statearr_12482_12512 = state_12448__$1;(statearr_12482_12512[2] = inst_12438);
(statearr_12482_12512[1] = 22);
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
}
}
}
}
}
}
}
}
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
var state_machine__5176__auto____0 = (function (){var statearr_12484 = (new Array(18));(statearr_12484[0] = state_machine__5176__auto__);
(statearr_12484[1] = 1);
return statearr_12484;
});
var state_machine__5176__auto____1 = (function (state_12448){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12485 = f__5226__auto__.call(null);(statearr_12485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___12486);
return statearr_12485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__2952__auto__ = p;if(and__2952__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__2952__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3556__auto__ = (((p == null))?null:p);return (function (){var or__2961__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__2952__auto__ = p;if(and__2952__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__2952__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3556__auto__ = (((p == null))?null:p);return (function (){var or__2961__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__2952__auto__ = p;if(and__2952__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__2952__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3556__auto__ = (((p == null))?null:p);return (function (){var or__2961__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__2952__auto__ = p;if(and__2952__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__2952__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3556__auto__ = (((p == null))?null:p);return (function (){var or__2961__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3556__auto__)]);if(or__2961__auto__)
{return or__2961__auto__;
} else
{var or__2961__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__2961__auto____$1)
{return or__2961__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__2961__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__2961__auto__))
{return or__2961__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__2961__auto__,mults){
return (function (p1__12513_SHARP_){if(cljs.core.truth_(p1__12513_SHARP_.call(null,topic)))
{return p1__12513_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12513_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2961__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12637 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12637');

/**
* @constructor
*/
cljs.core.async.t12637 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12638){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12638 = meta12638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12637.cljs$lang$type = true;
cljs.core.async.t12637.cljs$lang$ctorStr = "cljs.core.async/t12637";
cljs.core.async.t12637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3497__auto__,writer__3498__auto__,opt__3499__auto__){return cljs.core._write.call(null,writer__3498__auto__,"cljs.core.async/t12637");
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12639){var self__ = this;
var _12639__$1 = this;return self__.meta12638;
});})(mults,ensure_mult))
;
cljs.core.async.t12637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12639,meta12638__$1){var self__ = this;
var _12639__$1 = this;return (new cljs.core.async.t12637(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12638__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12637 = ((function (mults,ensure_mult){
return (function __GT_t12637(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12638){return (new cljs.core.async.t12637(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12638));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12637(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5225__auto___12760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12712){var state_val_12713 = (state_12712[1]);if((state_val_12713 === 1))
{var state_12712__$1 = state_12712;var statearr_12714_12761 = state_12712__$1;(statearr_12714_12761[2] = null);
(statearr_12714_12761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 2))
{var state_12712__$1 = state_12712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12712__$1,4,ch);
} else
{if((state_val_12713 === 3))
{var inst_12710 = (state_12712[2]);var state_12712__$1 = state_12712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12712__$1,inst_12710);
} else
{if((state_val_12713 === 4))
{var inst_12642 = (state_12712[5]);var inst_12642__$1 = (state_12712[2]);var inst_12643 = (inst_12642__$1 == null);var state_12712__$1 = (function (){var statearr_12715 = state_12712;(statearr_12715[5] = inst_12642__$1);
return statearr_12715;
})();if(cljs.core.truth_(inst_12643))
{var statearr_12716_12762 = state_12712__$1;(statearr_12716_12762[1] = 5);
} else
{var statearr_12717_12763 = state_12712__$1;(statearr_12717_12763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 5))
{var inst_12649 = cljs.core.deref.call(null,mults);var inst_12650 = cljs.core.vals.call(null,inst_12649);var inst_12651 = cljs.core.seq.call(null,inst_12650);var inst_12652 = inst_12651;var inst_12653 = null;var inst_12654 = 0;var inst_12655 = 0;var state_12712__$1 = (function (){var statearr_12718 = state_12712;(statearr_12718[6] = inst_12655);
(statearr_12718[7] = inst_12654);
(statearr_12718[8] = inst_12653);
(statearr_12718[9] = inst_12652);
return statearr_12718;
})();var statearr_12719_12764 = state_12712__$1;(statearr_12719_12764[2] = null);
(statearr_12719_12764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 6))
{var inst_12692 = (state_12712[10]);var inst_12642 = (state_12712[5]);var inst_12690 = (state_12712[11]);var inst_12690__$1 = topic_fn.call(null,inst_12642);var inst_12691 = cljs.core.deref.call(null,mults);var inst_12692__$1 = cljs.core.get.call(null,inst_12691,inst_12690__$1);var state_12712__$1 = (function (){var statearr_12720 = state_12712;(statearr_12720[10] = inst_12692__$1);
(statearr_12720[11] = inst_12690__$1);
return statearr_12720;
})();if(cljs.core.truth_(inst_12692__$1))
{var statearr_12721_12765 = state_12712__$1;(statearr_12721_12765[1] = 19);
} else
{var statearr_12722_12766 = state_12712__$1;(statearr_12722_12766[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 7))
{var inst_12708 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12723_12767 = state_12712__$1;(statearr_12723_12767[2] = inst_12708);
(statearr_12723_12767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 8))
{var inst_12655 = (state_12712[6]);var inst_12654 = (state_12712[7]);var inst_12657 = (inst_12655 < inst_12654);var inst_12658 = inst_12657;var state_12712__$1 = state_12712;if(cljs.core.truth_(inst_12658))
{var statearr_12727_12768 = state_12712__$1;(statearr_12727_12768[1] = 10);
} else
{var statearr_12728_12769 = state_12712__$1;(statearr_12728_12769[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 9))
{var inst_12688 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12729_12770 = state_12712__$1;(statearr_12729_12770[2] = inst_12688);
(statearr_12729_12770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 10))
{var inst_12655 = (state_12712[6]);var inst_12654 = (state_12712[7]);var inst_12653 = (state_12712[8]);var inst_12652 = (state_12712[9]);var inst_12660 = cljs.core._nth.call(null,inst_12653,inst_12655);var inst_12661 = cljs.core.async.muxch_STAR_.call(null,inst_12660);var inst_12662 = cljs.core.async.close_BANG_.call(null,inst_12661);var inst_12663 = (inst_12655 + 1);var tmp12724 = inst_12654;var tmp12725 = inst_12653;var tmp12726 = inst_12652;var inst_12652__$1 = tmp12726;var inst_12653__$1 = tmp12725;var inst_12654__$1 = tmp12724;var inst_12655__$1 = inst_12663;var state_12712__$1 = (function (){var statearr_12730 = state_12712;(statearr_12730[6] = inst_12655__$1);
(statearr_12730[12] = inst_12662);
(statearr_12730[7] = inst_12654__$1);
(statearr_12730[8] = inst_12653__$1);
(statearr_12730[9] = inst_12652__$1);
return statearr_12730;
})();var statearr_12731_12771 = state_12712__$1;(statearr_12731_12771[2] = null);
(statearr_12731_12771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 11))
{var inst_12666 = (state_12712[13]);var inst_12652 = (state_12712[9]);var inst_12666__$1 = cljs.core.seq.call(null,inst_12652);var state_12712__$1 = (function (){var statearr_12732 = state_12712;(statearr_12732[13] = inst_12666__$1);
return statearr_12732;
})();if(inst_12666__$1)
{var statearr_12733_12772 = state_12712__$1;(statearr_12733_12772[1] = 13);
} else
{var statearr_12734_12773 = state_12712__$1;(statearr_12734_12773[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 12))
{var inst_12686 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12735_12774 = state_12712__$1;(statearr_12735_12774[2] = inst_12686);
(statearr_12735_12774[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 13))
{var inst_12666 = (state_12712[13]);var inst_12668 = cljs.core.chunked_seq_QMARK_.call(null,inst_12666);var state_12712__$1 = state_12712;if(inst_12668)
{var statearr_12736_12775 = state_12712__$1;(statearr_12736_12775[1] = 16);
} else
{var statearr_12737_12776 = state_12712__$1;(statearr_12737_12776[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 14))
{var state_12712__$1 = state_12712;var statearr_12738_12777 = state_12712__$1;(statearr_12738_12777[2] = null);
(statearr_12738_12777[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 15))
{var inst_12684 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12739_12778 = state_12712__$1;(statearr_12739_12778[2] = inst_12684);
(statearr_12739_12778[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 16))
{var inst_12666 = (state_12712[13]);var inst_12670 = cljs.core.chunk_first.call(null,inst_12666);var inst_12671 = cljs.core.chunk_rest.call(null,inst_12666);var inst_12672 = cljs.core.count.call(null,inst_12670);var inst_12652 = inst_12671;var inst_12653 = inst_12670;var inst_12654 = inst_12672;var inst_12655 = 0;var state_12712__$1 = (function (){var statearr_12740 = state_12712;(statearr_12740[6] = inst_12655);
(statearr_12740[7] = inst_12654);
(statearr_12740[8] = inst_12653);
(statearr_12740[9] = inst_12652);
return statearr_12740;
})();var statearr_12741_12779 = state_12712__$1;(statearr_12741_12779[2] = null);
(statearr_12741_12779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 17))
{var inst_12666 = (state_12712[13]);var inst_12675 = cljs.core.first.call(null,inst_12666);var inst_12676 = cljs.core.async.muxch_STAR_.call(null,inst_12675);var inst_12677 = cljs.core.async.close_BANG_.call(null,inst_12676);var inst_12678 = cljs.core.next.call(null,inst_12666);var inst_12652 = inst_12678;var inst_12653 = null;var inst_12654 = 0;var inst_12655 = 0;var state_12712__$1 = (function (){var statearr_12742 = state_12712;(statearr_12742[6] = inst_12655);
(statearr_12742[7] = inst_12654);
(statearr_12742[8] = inst_12653);
(statearr_12742[9] = inst_12652);
(statearr_12742[14] = inst_12677);
return statearr_12742;
})();var statearr_12743_12780 = state_12712__$1;(statearr_12743_12780[2] = null);
(statearr_12743_12780[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 18))
{var inst_12681 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12744_12781 = state_12712__$1;(statearr_12744_12781[2] = inst_12681);
(statearr_12744_12781[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 19))
{var state_12712__$1 = state_12712;var statearr_12745_12782 = state_12712__$1;(statearr_12745_12782[2] = null);
(statearr_12745_12782[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 20))
{var state_12712__$1 = state_12712;var statearr_12746_12783 = state_12712__$1;(statearr_12746_12783[2] = null);
(statearr_12746_12783[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 21))
{var inst_12705 = (state_12712[2]);var state_12712__$1 = (function (){var statearr_12747 = state_12712;(statearr_12747[15] = inst_12705);
return statearr_12747;
})();var statearr_12748_12784 = state_12712__$1;(statearr_12748_12784[2] = null);
(statearr_12748_12784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 22))
{var inst_12702 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12749_12785 = state_12712__$1;(statearr_12749_12785[2] = inst_12702);
(statearr_12749_12785[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 23))
{var inst_12690 = (state_12712[11]);var inst_12694 = (state_12712[2]);var inst_12695 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12690);var state_12712__$1 = (function (){var statearr_12750 = state_12712;(statearr_12750[16] = inst_12694);
return statearr_12750;
})();var statearr_12751_12786 = state_12712__$1;(statearr_12751_12786[2] = inst_12695);
(statearr_12751_12786[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12713 === 24))
{try{var inst_12692 = (state_12712[10]);var inst_12642 = (state_12712[5]);var inst_12698 = cljs.core.async.muxch_STAR_.call(null,inst_12692);var state_12712__$1 = state_12712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12712__$1,25,inst_12698,inst_12642);
}catch (e12752){if((e12752 instanceof Object))
{var ex__5169__auto__ = e12752;var statearr_12753_12787 = state_12712;(statearr_12753_12787[1] = 23);
(statearr_12753_12787[2] = ex__5169__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12752;
} else
{return null;
}
}
}} else
{if((state_val_12713 === 25))
{try{var inst_12700 = (state_12712[2]);var state_12712__$1 = state_12712;var statearr_12756_12788 = state_12712__$1;(statearr_12756_12788[2] = inst_12700);
(statearr_12756_12788[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12754){if((e12754 instanceof Object))
{var ex__5169__auto__ = e12754;var statearr_12755_12789 = state_12712;(statearr_12755_12789[1] = 23);
(statearr_12755_12789[2] = ex__5169__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12754;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5176__auto____0 = (function (){var statearr_12758 = (new Array(17));(statearr_12758[0] = state_machine__5176__auto__);
(statearr_12758[1] = 1);
return statearr_12758;
});
var state_machine__5176__auto____1 = (function (state_12712){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12712);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12712){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12759 = f__5226__auto__.call(null);(statearr_12759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___12760);
return statearr_12759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5225__auto___12920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_12892){var state_val_12893 = (state_12892[1]);if((state_val_12893 === 1))
{var state_12892__$1 = state_12892;var statearr_12894_12921 = state_12892__$1;(statearr_12894_12921[2] = null);
(statearr_12894_12921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 2))
{var inst_12856 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12857 = 0;var state_12892__$1 = (function (){var statearr_12895 = state_12892;(statearr_12895[5] = inst_12856);
(statearr_12895[6] = inst_12857);
return statearr_12895;
})();var statearr_12896_12922 = state_12892__$1;(statearr_12896_12922[2] = null);
(statearr_12896_12922[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 3))
{var inst_12890 = (state_12892[2]);var state_12892__$1 = state_12892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12892__$1,inst_12890);
} else
{if((state_val_12893 === 4))
{var inst_12857 = (state_12892[6]);var inst_12859 = (inst_12857 < cnt);var state_12892__$1 = state_12892;if(cljs.core.truth_(inst_12859))
{var statearr_12897_12923 = state_12892__$1;(statearr_12897_12923[1] = 6);
} else
{var statearr_12898_12924 = state_12892__$1;(statearr_12898_12924[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 5))
{var inst_12876 = (state_12892[2]);var state_12892__$1 = (function (){var statearr_12899 = state_12892;(statearr_12899[7] = inst_12876);
return statearr_12899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12892__$1,12,dchan);
} else
{if((state_val_12893 === 6))
{var state_12892__$1 = state_12892;var statearr_12900_12925 = state_12892__$1;(statearr_12900_12925[2] = null);
(statearr_12900_12925[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 7))
{var state_12892__$1 = state_12892;var statearr_12901_12926 = state_12892__$1;(statearr_12901_12926[2] = null);
(statearr_12901_12926[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 8))
{var inst_12874 = (state_12892[2]);var state_12892__$1 = state_12892;var statearr_12902_12927 = state_12892__$1;(statearr_12902_12927[2] = inst_12874);
(statearr_12902_12927[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 9))
{var inst_12857 = (state_12892[6]);var inst_12869 = (state_12892[2]);var inst_12870 = (inst_12857 + 1);var inst_12857__$1 = inst_12870;var state_12892__$1 = (function (){var statearr_12903 = state_12892;(statearr_12903[6] = inst_12857__$1);
(statearr_12903[8] = inst_12869);
return statearr_12903;
})();var statearr_12904_12928 = state_12892__$1;(statearr_12904_12928[2] = null);
(statearr_12904_12928[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 10))
{var inst_12861 = (state_12892[2]);var inst_12862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12892__$1 = (function (){var statearr_12905 = state_12892;(statearr_12905[9] = inst_12861);
return statearr_12905;
})();var statearr_12906_12929 = state_12892__$1;(statearr_12906_12929[2] = inst_12862);
(statearr_12906_12929[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 11))
{try{var inst_12857 = (state_12892[6]);var inst_12865 = chs__$1.call(null,inst_12857);var inst_12866 = done.call(null,inst_12857);var inst_12867 = cljs.core.async.take_BANG_.call(null,inst_12865,inst_12866);var state_12892__$1 = state_12892;var statearr_12909_12930 = state_12892__$1;(statearr_12909_12930[2] = inst_12867);
(statearr_12909_12930[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12907){if((e12907 instanceof Object))
{var ex__5169__auto__ = e12907;var statearr_12908_12931 = state_12892;(statearr_12908_12931[1] = 10);
(statearr_12908_12931[2] = ex__5169__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12907;
} else
{return null;
}
}
}} else
{if((state_val_12893 === 12))
{var inst_12878 = (state_12892[10]);var inst_12878__$1 = (state_12892[2]);var inst_12879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12878__$1);var state_12892__$1 = (function (){var statearr_12910 = state_12892;(statearr_12910[10] = inst_12878__$1);
return statearr_12910;
})();if(cljs.core.truth_(inst_12879))
{var statearr_12911_12932 = state_12892__$1;(statearr_12911_12932[1] = 13);
} else
{var statearr_12912_12933 = state_12892__$1;(statearr_12912_12933[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 13))
{var inst_12881 = cljs.core.async.close_BANG_.call(null,out);var state_12892__$1 = state_12892;var statearr_12913_12934 = state_12892__$1;(statearr_12913_12934[2] = inst_12881);
(statearr_12913_12934[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 14))
{var inst_12878 = (state_12892[10]);var inst_12883 = cljs.core.apply.call(null,f,inst_12878);var state_12892__$1 = state_12892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12892__$1,16,out,inst_12883);
} else
{if((state_val_12893 === 15))
{var inst_12888 = (state_12892[2]);var state_12892__$1 = state_12892;var statearr_12914_12935 = state_12892__$1;(statearr_12914_12935[2] = inst_12888);
(statearr_12914_12935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12893 === 16))
{var inst_12885 = (state_12892[2]);var state_12892__$1 = (function (){var statearr_12915 = state_12892;(statearr_12915[11] = inst_12885);
return statearr_12915;
})();var statearr_12916_12936 = state_12892__$1;(statearr_12916_12936[2] = null);
(statearr_12916_12936[1] = 2);
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
}
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
var state_machine__5176__auto____0 = (function (){var statearr_12918 = (new Array(12));(statearr_12918[0] = state_machine__5176__auto__);
(statearr_12918[1] = 1);
return statearr_12918;
});
var state_machine__5176__auto____1 = (function (state_12892){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_12892);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_12892){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_12892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_12919 = f__5226__auto__.call(null);(statearr_12919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___12920);
return statearr_12919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5225__auto___13036 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5226__auto__ = (function (){var switch__5175__auto__ = (function (state_13016){var state_val_13017 = (state_13016[1]);if((state_val_13017 === 1))
{var inst_12987 = cljs.core.vec.call(null,chs);var inst_12988 = inst_12987;var state_13016__$1 = (function (){var statearr_13018 = state_13016;(statearr_13018[5] = inst_12988);
return statearr_13018;
})();var statearr_13019_13037 = state_13016__$1;(statearr_13019_13037[2] = null);
(statearr_13019_13037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 2))
{var inst_12988 = (state_13016[5]);var inst_12990 = cljs.core.count.call(null,inst_12988);var inst_12991 = (inst_12990 > 0);var state_13016__$1 = state_13016;if(cljs.core.truth_(inst_12991))
{var statearr_13020_13038 = state_13016__$1;(statearr_13020_13038[1] = 4);
} else
{var statearr_13021_13039 = state_13016__$1;(statearr_13021_13039[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 3))
{var inst_13014 = (state_13016[2]);var state_13016__$1 = state_13016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13016__$1,inst_13014);
} else
{if((state_val_13017 === 4))
{var inst_12988 = (state_13016[5]);var state_13016__$1 = state_13016;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13016__$1,7,inst_12988);
} else
{if((state_val_13017 === 5))
{var inst_13010 = cljs.core.async.close_BANG_.call(null,out);var state_13016__$1 = state_13016;var statearr_13022_13040 = state_13016__$1;(statearr_13022_13040[2] = inst_13010);
(statearr_13022_13040[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 6))
{var inst_13012 = (state_13016[2]);var state_13016__$1 = state_13016;var statearr_13023_13041 = state_13016__$1;(statearr_13023_13041[2] = inst_13012);
(statearr_13023_13041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 7))
{var inst_12995 = (state_13016[6]);var inst_12996 = (state_13016[7]);var inst_12995__$1 = (state_13016[2]);var inst_12996__$1 = cljs.core.nth.call(null,inst_12995__$1,0,null);var inst_12997 = cljs.core.nth.call(null,inst_12995__$1,1,null);var inst_12998 = (inst_12996__$1 == null);var state_13016__$1 = (function (){var statearr_13024 = state_13016;(statearr_13024[6] = inst_12995__$1);
(statearr_13024[7] = inst_12996__$1);
(statearr_13024[8] = inst_12997);
return statearr_13024;
})();if(cljs.core.truth_(inst_12998))
{var statearr_13025_13042 = state_13016__$1;(statearr_13025_13042[1] = 8);
} else
{var statearr_13026_13043 = state_13016__$1;(statearr_13026_13043[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 8))
{var inst_12995 = (state_13016[6]);var inst_12988 = (state_13016[5]);var inst_12996 = (state_13016[7]);var inst_12997 = (state_13016[8]);var inst_13000 = (function (){var c = inst_12997;var v = inst_12996;var vec__12993 = inst_12995;var cs = inst_12988;return ((function (c,v,vec__12993,cs,inst_12995,inst_12988,inst_12996,inst_12997,state_val_13017){
return (function (p1__12937_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12937_SHARP_);
});
;})(c,v,vec__12993,cs,inst_12995,inst_12988,inst_12996,inst_12997,state_val_13017))
})();var inst_13001 = cljs.core.filterv.call(null,inst_13000,inst_12988);var inst_12988__$1 = inst_13001;var state_13016__$1 = (function (){var statearr_13027 = state_13016;(statearr_13027[5] = inst_12988__$1);
return statearr_13027;
})();var statearr_13028_13044 = state_13016__$1;(statearr_13028_13044[2] = null);
(statearr_13028_13044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 9))
{var inst_12996 = (state_13016[7]);var state_13016__$1 = state_13016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13016__$1,11,out,inst_12996);
} else
{if((state_val_13017 === 10))
{var inst_13008 = (state_13016[2]);var state_13016__$1 = state_13016;var statearr_13030_13045 = state_13016__$1;(statearr_13030_13045[2] = inst_13008);
(statearr_13030_13045[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13017 === 11))
{var inst_12988 = (state_13016[5]);var inst_13005 = (state_13016[2]);var tmp13029 = inst_12988;var inst_12988__$1 = tmp13029;var state_13016__$1 = (function (){var statearr_13031 = state_13016;(statearr_13031[9] = inst_13005);
(statearr_13031[5] = inst_12988__$1);
return statearr_13031;
})();var statearr_13032_13046 = state_13016__$1;(statearr_13032_13046[2] = null);
(statearr_13032_13046[1] = 2);
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
}
}
}
}
});return ((function (switch__5175__auto__){
return (function() {
var state_machine__5176__auto__ = null;
var state_machine__5176__auto____0 = (function (){var statearr_13034 = (new Array(10));(statearr_13034[0] = state_machine__5176__auto__);
(statearr_13034[1] = 1);
return statearr_13034;
});
var state_machine__5176__auto____1 = (function (state_13016){while(true){
var result__5177__auto__ = switch__5175__auto__.call(null,state_13016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5177__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5177__auto__;
}
break;
}
});
state_machine__5176__auto__ = function(state_13016){
switch(arguments.length){
case 0:
return state_machine__5176__auto____0.call(this);
case 1:
return state_machine__5176__auto____1.call(this,state_13016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5176__auto____0;
state_machine__5176__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5176__auto____1;
return state_machine__5176__auto__;
})()
;})(switch__5175__auto__))
})();var state__5227__auto__ = (function (){var statearr_13035 = f__5226__auto__.call(null);(statearr_13035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5225__auto___13036);
return statearr_13035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5227__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});

//@ sourceMappingURL=async.js.map