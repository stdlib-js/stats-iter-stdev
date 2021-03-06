/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var incrstdev = require( '@stdlib/stats-incr-stdev' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Computes the corrected sample standard deviation over all iterated values.
*
* @param {Iterator} iterator - input iterator
* @param {number} [mean] - mean value
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a number
* @returns {(number|null)} corrected sample standard deviation
*
* @example
* var runif = require( '@stdlib/random-iter-uniform' );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var s = iterstdev( rand );
* // returns <number>
*/
function iterstdev( iterator, mean ) {
	var acc;
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator. Value: `%s`.', iterator ) );
	}
	if ( arguments.length > 1 ) {
		if ( !isNumber( mean ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a number. Value: `%s`.', mean ) );
		}
		acc = incrstdev( mean );
	} else {
		acc = incrstdev();
	}
	while ( true ) {
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		if ( typeof v.value === 'number' ) {
			acc( v.value );
		} else {
			acc( NaN );
		}
	}
	return acc();
}


// EXPORTS //

module.exports = iterstdev;
