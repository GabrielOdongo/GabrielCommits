/* Write a function that accepts a positive number N. The function should console log a step shape with N levels
using the # character. Make sure the steps has spaces on the right hand side

Examples: steps(2) '#'
                   '##' */
let stepNum = 3;

function steps(num){
    for (i = 1; i <= num; i -= -1) {
console.log(("#").repeat(i))
    }
} 

console.log(steps(stepNum))
