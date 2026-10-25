"use strict";var v=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var s=v(function(b,n){
var m=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,u=require('@stdlib/stats-incr-stdev/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function l(i,e){var r,t;if(!m(i))throw new TypeError(a('1LP3v',i));if(arguments.length>1){if(!o(e))throw new TypeError(a('1LP4A',e));r=u(e)}else r=u();for(;t=i.next(),!t.done;)typeof t.value=="number"?r(t.value):r(NaN);return r()}n.exports=l
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
