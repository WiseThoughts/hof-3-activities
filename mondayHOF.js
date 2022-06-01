
//write function to log "hello codenation" to the console, then write a higher function which will run the basic function 5 times.
let times = (str) => {
    for (i = 0; i < 5; i++) {
        console.log(str);
    }
};
let str = (str, fn) => {
    fn(str);
};
str("Hello CodeNation", times);


// decalre a variable with 5 numbers as a array, then use .map to go through the array and multiply the numbers by 3
const array = [5, 15, 25, 35, 45];
const map = array.map(x => x * 3);
console.log(map);


//test the below function by passing a number through the doMaths function. 
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
};

console.log(doMaths(100))
console.log(doMaths(100)(20, add));
console.log(doMaths(100)(20, subtract));
console.log(doMaths(100)(20, multiply));
console.log(doMaths(100)(20, divide));