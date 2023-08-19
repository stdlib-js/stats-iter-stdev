// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&f&&f.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[m],u=m,r=null!=(o=t)&&d.call(o,u);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=s();function _(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function h(t){return y(t)||_(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",_);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof O?O:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,B=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var L=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",L);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function C(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=L.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var k="function"==typeof t||"object"==typeof B||"function"==typeof T?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function G(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===k(t)}(t.next)}function I(t){return"number"==typeof t}var F=Number,R=F.prototype.toString;var U=s();function q(t){return"object"==typeof t&&(t instanceof F||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function H(t){return I(t)||q(t)}p(H,"isPrimitive",I),p(H,"isObject",q);var X=Math.sqrt;function z(t){return t!=t}function D(t){var r,e,n,o;if(n=0,o=0,arguments.length){if(!I(t))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+t+"`.");return e=t,i}return e=0,u;function u(t){return 0===arguments.length?0===o?null:1===o?z(n)?NaN:0:X(n/(o-1)):(n+=(r=t-e)*(t-(e+=r/(o+=1))),o<2?z(n)?NaN:0:X(n/(o-1)))}function i(t){return 0===arguments.length?0===o?null:X(n/o):X((n+=(r=t-e)*r)/(o+=1))}}function J(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function K(t,r){var e,n;if(!G(t))throw new TypeError(J("1LP3v,IA",t));if(arguments.length>1){if(!I(r))throw new TypeError(J("1LP4A,Hr",r));e=D(r)}else e=D();for(;!(n=t.next()).done;)"number"==typeof n.value?e(n.value):e(NaN);return e()}export{K as default};
//# sourceMappingURL=mod.js.map