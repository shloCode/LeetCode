// dont convert it to a string that is no fun :-)
function isPalindrome(num) {
    if (num < 0) return false //The minus is part of the number
    var digits = []
    while (num > 0) {
        digits.push(num % 10)
        num = Math.floor(num / 10)
    }
    console.log(digits)
}

isPalindrome(21719)