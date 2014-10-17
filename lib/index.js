/**
*
*	PLUGIN: OS metrics
*
*
*	DESCRIPTION:
*		- Middleware plugin which collects OS metrics.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com.
*
*/

(function() {
	'use strict';

	// MODULES //

	var getMetrics = require( 'metrics-os' );


	// PLUGIN //

	/**
	* FUNCTION: plugin( monitor, next )
	*	Middleware plugin which collects OS metrics.
	*
	* @param {Object} monitor - object to which metrics are appended
	* @param {Function} next - callback to be invoked upon collecting metrics
	*/
	function plugin( monitor, next ) {
		monitor.system = getMetrics();
		next();
	} // end FUNCTION plugin()


	// EXPORTS //

	module.exports = plugin;

})();