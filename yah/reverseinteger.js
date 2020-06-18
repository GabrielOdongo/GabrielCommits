/*Given an integer, return a new integer with the reversed order of numbers
-- Examples: reverseInt(51) === 15 */

let myInteger = 51

function reverseInt(int) {
    let result = [];
    let intArrayVersion = (int.toString().split("").reverse().map((e, i) => e));
    result.push(intArrayVersion);
    return result.toString().valueOf();
}

console.log(reverseInt(myInteger))