"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(b,n){
var m=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,u=require('@stdlib/stats-incr-stdev/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e){var i,t;if(!m(r))throw new TypeError(a('1LP3v',r));if(arguments.length>1){if(!o(e))throw new TypeError(a('1LP4A',e));i=u(e)}else i=u();for(;t=r.next(),!t.done;)typeof t.value=="number"?i(t.value):i(NaN);return i()}n.exports=l
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
