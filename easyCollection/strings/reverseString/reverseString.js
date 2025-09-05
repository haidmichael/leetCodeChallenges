/*
 * Write a function that reverses a string. The input string is given as an array of characters s
 *
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1: 
 *  Input: s = ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 *  Input: s = ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 * 
 * Constraints: 
 *  1 <= s.length <= 10 to the fith
 *  s[i] is a printable ascii character.
 */

//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
const hello = ["h","e","l","l","o"]
const hannah = ["h","a","n","n","a","H"]
function reverseString(s){
    // ***** 1st answer and it passed both cases *****
    // return s.reverse()

    // ***** 2nd answer it works but doesn't pass leet code test. 
    // I think it returns a string not array. Will try to do it that returns to an array. ******
    let backwords = ''
    for (let i = s.length - 1; i >= 0; i--){
        // console.log(s[i].split(' '))
        backwords += s[i] //.split('')
        // console.log(backwords)
    }
    return backwords.split('')
}

console.log(reverseString(hello))
console.log(reverseString(hannah))

// reverseString(["h","e","l","l","o"])
// reverseString(["h","a","n","n","a","H"])