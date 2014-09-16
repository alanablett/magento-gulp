(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Here we're exporting an object which we can then pull into another file
 * in this case we pull it into main.js. We then have access to the object
 * and its public methods.
 */
module.exports = {
	
	someMethod : function(){
		return 'Some method return value';
	}

}
},{}],2:[function(require,module,exports){
var another = require('./another.js');

console.log('Calling required module method');
console.log( another.someMethod() );
},{"./another.js":1}]},{},[2])