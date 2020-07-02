/* Check to see if two provided strings are anagrams of each other. One string is an anagram of 
another if it uses the same characters in the same quantity. Only consider characters, not spaces 
or punctuation. Consider capital letters to be the same as lower case.

Examples: anagrams('rail safety', 'fairy tales') --> True*/

/*function anagrams(str1, str2){
     for (let char of str1)
     if ([^str1] === [^str2])
     if (str1[...] === str2[...]){
        //console.log(str1 + ' and ' + str2 + ' are anagrams')
   } else{
        //console.log(str1 + ' and ' + str2 + ' are not anagrams')
   }
}*/


function anagrams(str1, str2){
     let checker = str2.split("");
     for (let char of str1.toLowerCase()){
          if (checker.includes(char)) 
          console.log(str1 + ' and ' + str2 + ' are anagrams')
          else
          console.log(str1 + ' and ' + str2 + ' are not anagrams')
     }
}

console.log(anagrams('moke opondo', 'fairy tales'))