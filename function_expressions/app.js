//normal function statement................................
function sayHi(){
    console.log('Hey');
}

sayHi();

//function expression.......................................
const sayBye = function(){
    console.log('bye bye');
};

sayBye();

//We can pass a function into another function e.g:..........
function callFunction(fun){
    fun();
}

var sayOkay = function(){
    console.log('Okay');
};

callFunction(sayOkay);