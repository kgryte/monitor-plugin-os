
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	plugin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'monitor-os-plugin', function tests() {
	'use strict';

	// SETUP //

	var monitor;

	beforeEach( function() {
		monitor = {};
	});


	// TESTS //

	it( 'should export a function', function test() {
		expect( plugin ).to.be.a( 'function' );
	});

	it( 'should have an arity of 2', function test() {
		assert.strictEqual( plugin.length, 2 );
	});

	it( 'should append the monitor object', function test() {
		plugin( monitor, next );
		function next() {
			expect( monitor.system ).to.be.an( 'object' );
		}
	});

});