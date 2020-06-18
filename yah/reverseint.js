/*----Directions
Given an integer,return an integer that is the reverse ordering of numbers
---Example
reverseInt(15)===51 */


let integer = 536
function reverse(int){
    let turn_to_string = int.toString();
    let new_integer = (turn_to_string.split("").reverse()).toString()
    
    return new_integer;
    
}

console.log(reverse(integer))

