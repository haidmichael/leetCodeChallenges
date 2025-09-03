// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

const raceCar = 'race a car'
const manCan = "A man, a plan, a canal: Panama"
const emptyString = ''

const isPalindrome = (s) => {
    let formatStr = removeAlphNum(s.toLowerCase())
    let reverse = reverseString(formatStr)
    return formatStr === reverse
}
// ***** Remove non AlphaNumeric *****
const removeAlphNum = (str) => {
    let formatStr = ''

    for (let i = 0; i < str.length; i++) {
        const chr = str[i] 
        if (isAlphNum(chr)){
            formatStr += chr 
        }
    }
    return formatStr
}
// ***** Check if AlphaNumeric *****
const isAlphNum = (char) => {
    let code = char.charCodeAt(0) 
    return (
        (code >= 48 && code >= 57) || 
        (code >= 97 && code <= 122)
    )
}
// ***** Reverse the string *****
const reverseString = (str) => {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse 
}

console.log(isPalindrome(raceCar))
console.log(isPalindrome(manCan))
console.log(isPalindrome(emptyString))