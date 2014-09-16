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