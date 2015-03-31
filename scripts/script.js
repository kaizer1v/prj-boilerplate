// your script here.

(function() {

	var globalVar = "I am Global";

	var one = function(param1) {
	  var inOne = "I am local";
	  console.log(inOne);
	  two(inOne);    
	}

	var two = function(param2) {
		console.log(param2);
	}

})();	// self invoking anonymous function

