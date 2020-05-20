var UTIL = require('./util');

var myArgs = process.argv.slice(2);
if(myArgs.length<1) 
	process.exit();

console.log( UTIL.getJSON( myArgs[0]) );
