import{l as s,d as ii}from"../preact-bfe5487e.js";var y,e,V,P,b=0,J=[],H=[],T=s.__b,z=s.__r,B=s.diffed,G=s.__c,D=s.unmount;function S(t,i){s.__h&&s.__h(e,t,b||i),b=0;var n=e.__H||(e.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:H}),n.__[t]}function si(t){return b=1,ti(K,t)}function ti(t,i,n){var o=S(y++,2);if(o.t=t,!o.__c&&(o.__=[n?n(i):K(void 0,i),function(r){var f=o.__N?o.__N[0]:o.__[0],h=o.t(f,r);f!==h&&(o.__N=[h,o.__[1]],o.__c.setState({}))}],o.__c=e,!e.u)){e.u=!0;var _=e.shouldComponentUpdate;e.shouldComponentUpdate=function(r,f,h){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(c){return c.__c});if(a.every(function(c){return!c.__N}))return!_||_.call(this,r,f,h);var d=!1;return a.forEach(function(c){if(c.__N){var Z=c.__[0];c.__=c.__N,c.__N=void 0,Z!==c.__[0]&&(d=!0)}}),!(!d&&o.__c.props===r)&&(!_||_.call(this,r,f,h))}}return o.__N||o.__}function vi(t,i){var n=S(y++,3);!s.__s&&q(n.__H,i)&&(n.__=t,n.i=i,e.__H.__h.push(n))}function hi(t,i){var n=S(y++,4);!s.__s&&q(n.__H,i)&&(n.__=t,n.i=i,e.__h.push(n))}function ci(t){return b=5,U(function(){return{current:t}},[])}function U(t,i){var n=S(y++,7);return q(n.__H,i)?(n.__V=t(),n.i=i,n.__h=t,n.__V):n.__}function ai(t,i){return b=8,U(function(){return t},i)}function di(t){var i=e.context[t.__c],n=S(y++,9);return n.c=t,i?(n.__==null&&(n.__=!0,i.sub(e)),i.props.value):t.__}function ni(){for(var t;t=J.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(w),t.__H.__h.forEach(A),t.__H.__h=[]}catch(i){t.__H.__h=[],s.__e(i,t.__v)}}s.__b=function(t){e=null,T&&T(t)},s.__r=function(t){z&&z(t),y=0;var i=(e=t.__c).__H;i&&(V===e?(i.__h=[],e.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=H,n.__N=n.i=void 0})):(i.__h.forEach(w),i.__h.forEach(A),i.__h=[])),V=e},s.diffed=function(t){B&&B(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(J.push(i)!==1&&P===s.requestAnimationFrame||((P=s.requestAnimationFrame)||oi)(ni)),i.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==H&&(n.__=n.__V),n.i=void 0,n.__V=H})),V=e=null},s.__c=function(t,i){i.some(function(n){try{n.__h.forEach(w),n.__h=n.__h.filter(function(o){return!o.__||A(o)})}catch(o){i.some(function(_){_.__h&&(_.__h=[])}),i=[],s.__e(o,n.__v)}}),G&&G(t,i)},s.unmount=function(t){D&&D(t);var i,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{w(o)}catch(_){i=_}}),n.__H=void 0,i&&s.__e(i,n.__v))};var I=typeof requestAnimationFrame=="function";function oi(t){var i,n=function(){clearTimeout(o),I&&cancelAnimationFrame(i),setTimeout(t)},o=setTimeout(n,100);I&&(i=requestAnimationFrame(n))}function w(t){var i=e,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),e=i}function A(t){var i=e;t.__c=t.__(),e=i}function q(t,i){return!t||t.length!==i.length||i.some(function(n,o){return n!==t[o]})}function K(t,i){return typeof i=="function"?i(t):i}function E(){throw new Error("Cycle detected")}function O(){if(l>1)l--;else{for(var t,i=!1;m!==void 0;){var n=m;for(m=void 0,F++;n!==void 0;){var o=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Q(n))try{n.c()}catch(_){i||(t=_,i=!0)}n=o}}if(F=0,l--,i)throw t}}var u=void 0,m=void 0,l=0,F=0,N=0;function L(t){if(u!==void 0){var i=t.n;if(i===void 0||i.t!==u)return i={i:0,S:t,p:u.s,n:void 0,t:u,e:void 0,x:void 0,r:i},u.s!==void 0&&(u.s.n=i),u.s=i,t.n=i,32&u.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=u.s,i.n=void 0,u.s.n=i,u.s=i),i}}function v(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}v.prototype.h=function(){return!0};v.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};v.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};v.prototype.subscribe=function(t){var i=this;return C(function(){var n=i.value,o=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=o}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.peek=function(){return this.v};Object.defineProperty(v.prototype,"value",{get:function(){var t=L(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){F>100&&E(),this.v=t,this.i++,N++,l++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{O()}}}});function M(t){return new v(t)}function Q(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function R(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function W(t){for(var i=t.s,n=void 0;i!==void 0;){var o=i.p;i.i===-1?(i.S.U(i),o!==void 0&&(o.n=i.n),i.n!==void 0&&(i.n.p=o)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=o}t.s=n}function p(t){v.call(this,void 0),this.x=t,this.s=void 0,this.g=N-1,this.f=4}(p.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===N))return!0;if(this.g=N,this.f|=1,this.i>0&&!Q(this))return this.f&=-2,!0;var t=u;try{R(this),u=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return u=t,W(this),this.f&=-2,!0};p.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}v.prototype.S.call(this,t)};p.prototype.U=function(t){if(this.t!==void 0&&(v.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};p.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};p.prototype.peek=function(){if(this.h()||E(),16&this.f)throw this.v;return this.v};Object.defineProperty(p.prototype,"value",{get:function(){1&this.f&&E();var t=L(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function ri(t){return new p(t)}function X(t){var i=t.u;if(t.u=void 0,typeof i=="function"){l++;var n=u;u=void 0;try{i()}catch(o){throw t.f&=-2,t.f|=8,j(t),o}finally{u=n,O()}}}function j(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,X(t)}function _i(t){if(u!==this)throw new Error("Out-of-order effect");W(this),u=t,this.f&=-2,8&this.f&&j(this),O()}function g(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}g.prototype.c=function(){var t=this.S();try{!(8&this.f)&&this.x!==void 0&&(this.u=this.x())}finally{t()}};g.prototype.S=function(){1&this.f&&E(),this.f|=1,this.f&=-9,X(this),R(this),l++;var t=u;return u=this,_i.bind(this,t)};g.prototype.N=function(){2&this.f||(this.f|=2,this.o=m,m=this)};g.prototype.d=function(){this.f|=8,1&this.f||j(this)};function C(t){var i=new g(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}var k;function $(t,i){s[t]=i.bind(null,s[t]||function(){})}function x(t){k&&k(),k=t&&t.S()}function Y(t){var i=this,n=t.data,o=ei(n);o.value=n;var _=U(function(){for(var r=i.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return i.__$u.c=function(){i.base.data=_.peek()},ri(function(){var f=o.value.value;return f===0?0:f===!0?"":f||""})},[]);return _.value}Y.displayName="_st";Object.defineProperties(v.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Y},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});$("__b",function(t,i){if(typeof i.type=="string"){var n,o=i.props;for(var _ in o)if(_!=="children"){var r=o[_];r instanceof v&&(n||(i.__np=n={}),n[_]=r,o[_]=r.peek())}}t(i)});$("__r",function(t,i){x();var n,o=i.__c;o&&(o.__$f&=-2,(n=o.__$u)===void 0&&(o.__$u=n=function(_){var r;return C(function(){r=this}),r.c=function(){o.__$f|=1,o.setState({})},r}())),x(n),t(i)});$("__e",function(t,i,n,o){x(),t(i,n,o)});$("diffed",function(t,i){x();var n;if(typeof i.type=="string"&&(n=i.__e)){var o=i.__np,_=i.props;if(o){var r=n.U;if(r)for(var f in r){var h=r[f];h!==void 0&&!(f in o)&&(h.d(),r[f]=void 0)}else n.U=r={};for(var a in o){var d=r[a],c=o[a];d===void 0?(d=fi(n,a,c,_),r[a]=d):d.o(c,_)}}}t(i)});function fi(t,i,n,o){var _=i in t&&t.ownerSVGElement===void 0,r=M(n);return{o:function(f,h){r.value=f,o=h},d:C(function(){var f=r.value.value;o[i]!==f&&(o[i]=f,_?t[i]=f:f?t.setAttribute(i,f):t.removeAttribute(i))})}}$("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var o=n.U;if(o){n.U=void 0;for(var _ in o){var r=o[_];r&&r.d()}}}}else{var f=i.__c;if(f){var h=f.__$u;h&&(f.__$u=void 0,h.d())}}t(i)});$("__h",function(t,i,n,o){o<3&&(i.__$f|=2),t(i,n,o)});ii.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in i)return!0;for(var _ in t)if(_!=="__source"&&t[_]!==this.props[_])return!0;for(var r in this.props)if(!(r in t))return!0;return!1};function ei(t){return U(function(){return M(t)},[])}export{U as F,ai as T,ci as _,C as a,ei as b,vi as h,si as p,di as q,hi as s,M as u};
