// your script here.

var globalVar = "I am Global";

function one(param1) {
  var inOne = "I am local";
  console.log(inOne);

  two(inOne);    
}

function two(param2) {
    console.log(param2);
}
