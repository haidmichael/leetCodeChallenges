// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const raceCar = 'race car' // true
const manCan = "A man, a plan, a canal: Panama" // true
const emptyString = '' // true
const hello = 'hello' // false
const kayak = 'kayak' // true
const rotator = 'ROTAtor!' // true

const isPalindrome = (str) => {
    // Replace the non-alphanumeric characters and covert to lower case
    const cleaner = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    //return the string and compare it to the reversed string
    return cleaner === cleaner.split('').reverse().join('')
}

console.log(isPalindrome(raceCar))
console.log(isPalindrome(manCan))
console.log(isPalindrome(emptyString))
console.log(isPalindrome(hello))
console.log(isPalindrome(kayak))
console.log(isPalindrome(rotator))