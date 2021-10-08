let x = function() {
    console.log("i am called from the inside a function")
};

let y = function(callback){
    console.log('do something');
    callback();
}

y(x);

/*
let calc = function(num1, num2, calcType){

    if (calcType === "add"){
        return num1 + num2;
    } else if (calcType === "multiply") {
        return num1*num2;
    }
};


console.log(calc(2, 3, 'add')); //should equal 5
*/

let add = function(a, b){
    return a+b;
};

let multiply = function(a, b){
    return a*b;
};

let doWhatever = function(a, b){
    console.log(`here are your two numbers back ${a}, ${b}`)
}

let calc = function(num1, num2, callback){
    if(typeof callback === "function"){
        return callback(num1, num2);
    } else {
        return "error"
    }
};


console.log(calc(2, 3, add));
console.log(calc(2, 3, multiply)); 

//calling two whole functions back
// this is called an anonymous function
// its good for only a single use
console.log(calc(2, 3, function(a, b) {return a-b}));

// insure that global variables are defined first
// make variables that make sense
//plan steps first
//  what does project need
//      how do you do each step
//      I need a function with a callback
//      
function innercallback() = {
    var otherVar = "new variable";
    //because of scope the vaeriable will only be inside the bracets

    function nestedFunction() {
        return "hi"
    }
    return otherVar;
};

Pickles()
function hamburger(nestedFunction) {
    return "second"
}

//return is ALWAYS tje last line of the function