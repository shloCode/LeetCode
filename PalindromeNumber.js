// dont convert it to a string that is no fun :-)
function isPalidrome(num) {
    // use modolo to get the remainder, rec
    // Count the occourence of each number in each remainder it like
    // each sub-number minus its predecessor must be modolo 0 with 10*(index+1)
    var divisor = 10
    var digits = []
    while (num > divisor) {
        var remainder = num % divisor
        console.log(remainder)
        digits.push(remainder)
        divisor = divisor * 10
    }
    console.log(digits)
}

isPalidrome(21719)