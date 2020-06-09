//Given n, take the sum of the digits of n. If that value has more than one digit, 
//continue reducing in this way until a single-digit number is produced. 
//This is only applicable to the natural numbers.

//https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
  console.log(digital_root(10))