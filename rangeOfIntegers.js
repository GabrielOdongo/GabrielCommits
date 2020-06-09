/*
Implement a function named generateRange(min, max, step),
 which takes three arguments and generates a range of
  integers from min to max, with the step. The first integer 
  is the minimum value, the second is the maximum of the range
   and the third is the step. (min < max)

   link: https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
*/
function generateRange(min, max, step) {
    //code here
    let arr = [];
    for (let count = min; count <= max; count += step) {
        arr.push(count);
    }
    return arr;
}

let generate = generateRange(2, 10, 2);

console.log(generate);