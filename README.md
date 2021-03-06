<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [corrected sample standard deviation][sample-stdev] over all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

<div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@03e3798c09b1c8873fbc09a227eb8c7e88d0b985/lib/node_modules/@stdlib/stats/iter/stdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-stdev
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var iterstdev = require( '@stdlib/stats-iter-stdev' );
```

#### iterstdev( iterator\[, mean] )

Computes the [corrected sample standard deviation][sample-stdev] over all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0 ] );

var s = iterstdev( arr );
// returns 1.0
```

If the mean is already known, provide a `mean` argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0 ] );

var s = iterstdev( arr, 2.0 );
// returns ~0.82
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var iterstdev = require( '@stdlib/stats-iter-stdev' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the corrected sample standard deviation:
var s = iterstdev( rand );
// returns <number>

console.log( 'stdev: %d.', s );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/mean`][@stdlib/stats/iter/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean over all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/variance`][@stdlib/stats/iter/variance]</span><span class="delimiter">: </span><span class="description">compute the unbiased sample variance over all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-stdev

[test-image]: https://github.com/stdlib-js/stats-iter-stdev/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-stdev/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-stdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-stdev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-stdev/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-stdev/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-stdev/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-iter-stdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-stdev/main/LICENSE

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/mean]: https://github.com/stdlib-js/stats-iter-mean

[@stdlib/stats/iter/variance]: https://github.com/stdlib-js/stats-iter-variance

<!-- </related-links> -->

</section>

<!-- /.links -->
