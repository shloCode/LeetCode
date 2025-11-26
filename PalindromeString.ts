function isPalindrome(str: string): boolean {
    return str === [...str].reverse().join('')
}
const isPalindromeOneLine = (str: string): boolean => str === [...str].reverse().join('')