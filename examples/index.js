var plugin = require( './../lib' );

// Create a mock monitor object:
var monitor = {};

// Run the plugin:
plugin( monitor, function next() {
	console.log( JSON.stringify( monitor ) );
});