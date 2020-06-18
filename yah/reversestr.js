/*---Directions
Given a string, return a new string with the reversed order  of characters.
---Exzamples
reverse ('apple')==='leppa'
revere ('hello')==='olleh'
reverse ('Greetings') === 'isgniteerg' */


let string = "Black"
function reverse(str){
    new_string = (str.split("").reverse()).toString()
    
    return new_string;
    
}

console.log(reverse(string))

