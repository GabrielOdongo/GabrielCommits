/*Given a string, return a new string with the reversed order of characters
-- Examples: reverseStr('apple') === 'leppa' */

let myString = 'apple'

function reverseStr(str) {
    let result = [];
    let strArrayVersion = (str.split("").reverse().map((e, i) => e));
    result.push(strArrayVersion);
    return result.toString();
}

console.log(reverseStr(myString))