//Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

//Your task is to make 'Past' function which returns time converted to milliseconds.

//Example:
//past(0, 1, 1) == 61000
//Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s) {
    return ((h*3600 + m*60)+s)
}
console.log(past(2, 2, 2))