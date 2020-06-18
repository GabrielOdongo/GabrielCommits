// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let string = "gabriel"

function palindrome(str){
  let originalStr = str.split("").toString().toUpperCase(); //Shall create an array ('M','i','k','e')
  let reversedStr = (str.split("")).reverse().toString().toUpperCase() //Shall create an array ['M','i','k','e'] => then reverse it ('e','k','i','M')
if (Object.is(originalStr,reversedStr)) //Its going to compare the two to see if they're equivalent to each other
console.log(str + " is a Palindrome")
else 
console.log(str + " is not a Palindrome") 
}

console.log(palindrome(string))
