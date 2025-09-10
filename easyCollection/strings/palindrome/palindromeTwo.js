// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const raceCar = 'race a car'
const manCan = "A man, a plan, a canal: Panama"
const emptyString = ''

const isPalindrome = (s) => {
    // Remove all non-alphanumeric char and covert the string to lowercase, save to varible called formattedStr
    const formattedStr = removeAlphNum(s.toLowerCase())
    // Reverse the string and save to a variable
    const reverse = reverseString(formattedStr)
    // Return the formatted string equal to teh reversed string
    return formattedStr === reverse
}
// ***** Remove non AlphaNumeric *****
const removeAlphNum = (str) => {
    // Declare a variable to store the formatted string
    // Loop through the string and save to the variable char
    // for () {// If the current char is alphanumeric, add it to the formatted string}
    // Return the formatted string
}

// ***** Check if AlphaNumeric *****
const isAlphNum = (char) => {
    // Get the character code and save to a variable called code 
        // Hint: use built in func charCodeAt() to find the unicode (UTF-16) value of character
    // Return whether the character is alphanumeric
    // return(
    // Code is greater or equal to 48 and code is greater or equal to 59 and
    // Code is greater or equal to 97 and code is less or equal to 122
    // )
}
// ***** Reverse the string *****
const reverseString = (str) => {
    // Declare a variable to store the reversed string
    // Loop through the string backwards
    // Return the reversed string
}

console.log(isPalindrome(raceCar))
console.log(isPalindrome(manCan))
console.log(isPalindrome(emptyString))