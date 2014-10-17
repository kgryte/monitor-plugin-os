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

	var // OS module:
		os = require( 'os' );


	// FUNCTIONS //

	/**
	* FUNCTION: getLoad()
	*	Returns the CPU load. Note: does not work on Windows platforms.
	*
	* @returns {Object} CPU load averages for 1, 5, and 15 minutes
	*/
	function getLoad() {
		var load = os.loadavg(); // [...]
		return {
			'1m': load[ 0 ],
			'5m': load[ 1 ],
			'15m': load[ 2 ]
		};
	} // end FUNCTION getLoad()

	/**
	* FUNCTION: getMemory()
	*	Returns memory usage metrics.
	*
	* @returns {Object} memory usage metrics: `memTotal`, `memFree`, `ramUtilization`.
	*/
	function getMemory() {
		var total = os.totalmem(),
			free = os.freemem();
		return {
			'memTotal': total,
			'memFree': free,
			'ramUtilization': ( total-free ) / total
		};
	} // end FUNCTION getMemory()

	/**
	* FUNCTION: getCPU()
	*	Returns CPU metrics.
	*
	* @returns {Array} CPU metrics
	*/
	function getCPU() {
		var arr = os.cpus(), // [...]
			len = arr.length,
			data = new Array( len ),
			N = 0,
			mapping = {},
			keys,
			numKeys,
			key,
			aKey,
			delta,
			avgs,
			d,
			tmp,
			i, j, k;

		mapping = {
			'user': 'user',
			'nice': 'nice',
			'sys': 'system',
			'idle': 'idle',
			'irq': 'irq'
		};
		
		keys = Object.keys( mapping );
		numKeys = keys.length;

		avgs = {};
		for ( i = 0; i < numKeys; i++ ) {
			aKey = mapping[ keys[ i ] ] + 'Average';
			avgs[ aKey ] = 0;
		}
		for ( j = 0; j < len; j++ ) {
			d = arr[ j ].times;
			tmp = {};
			N += 1;
			for ( k = 0; k < numKeys; k++ ) {
				key = keys[ k ];
				tmp[ mapping[ key ] ] = d[ key ];

				aKey = mapping[ key ] + 'Average';
				delta = d[ key ] - avgs[ aKey ];
				avgs[ aKey ] += delta / N;
			}
			data[ j ] = tmp;
		}
		data.push( avgs );
		return data;
	} // end FUNCTION getCPU()


	// PLUGIN //

	/**
	* FUNCTION: plugin( monitor, next )
	*	Middleware plugin which collects OS metrics.
	*
	* @param {Object} monitor - object to which metrics are appended
	* @param {Function} next - callback to be invoked upon collecting metrics
	*/
	function plugin( monitor, next ) {
		var sys = {};

		// [1] Get the number of milliseconds the system has been running:
		sys.uptime = os.uptime() * 1000;

		// [2] Get CPU load averages:
		sys.load = getLoad();

		// [3] Get memory metrics:
		sys.mem = getMemory();

		// [4] Get CPU metrics:
		sys.cpu = getCPU();

		// Append the metrics:
		monitor.system = sys;

		// Done:
		next();
	} // end FUNCTION plugin()


	// EXPORTS //

	module.exports = plugin;

})();