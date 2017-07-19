OS Metrics
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Middleware plugin which collects OS metrics.


## Installation

``` bash
$ npm install monitor-plugin-os
```

## Usage

To use the module,

``` javascript
var plugin = require( 'monitor-plugin-os' );
```

The module exports the following method...


#### plugin( obj, clbk )

Appends [system metrics](https://github.com/kgryte/node-metrics-os) to an `object` and then invokes the provided callback.

``` javascript
plugin( {}, function next() {});
```


## Examples

``` javascript
var plugin = require( 'monitor-plugin-os' );

// Initialize a monitor object:
var monitor = {};

// Run the plugin:
plugin( monitor, function next() {
	console.log( JSON.stringify( monitor ) );
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The plugin will append a `system` property to the provided `object`. If a `system` property already exists, the property `value` will be overwritten.



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/monitor-plugin-os.svg
[npm-url]: https://npmjs.org/package/monitor-plugin-os

[travis-image]: http://img.shields.io/travis/kgryte/monitor-plugin-os/master.svg
[travis-url]: https://travis-ci.org/kgryte/monitor-plugin-os

[coveralls-image]: https://img.shields.io/coveralls/kgryte/monitor-plugin-os/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/monitor-plugin-os?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/monitor-plugin-os.svg
[dependencies-url]: https://david-dm.org/kgryte/monitor-plugin-os

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/monitor-plugin-os.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/monitor-plugin-os

[github-issues-image]: http://img.shields.io/github/issues/kgryte/monitor-plugin-os.svg
[github-issues-url]: https://github.com/kgryte/monitor-plugin-os/issues
