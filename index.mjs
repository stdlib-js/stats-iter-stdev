// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-stdev@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function i(i,n){var o,d;if(!e(i))throw new TypeError(r("0fb48",i));if(arguments.length>1){if(!t(n))throw new TypeError(r("0fb4N",n));o=s(n)}else o=s();for(;!(d=i.next()).done;)"number"==typeof d.value?o(d.value):o(NaN);return o()}export{i as default};
//# sourceMappingURL=index.mjs.map
