/* Write a function called titleCase that takes in a string and returns the string with first letter of each word capitalized.
 *
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 * 
 * function titleCase(str: string): string;
 *  
### Examples
```js
 * titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
 * titleCase('sHoRt AnD sToUt'); // Short And Stout
 * titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
```
 * ### Constraints
 *  You may assume that each word consists of only letters and spaces
*/

const titleCase = (str) => {
    let word = str.toLowerCase().split(' ')
    // console.log(word)
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1)
        // console.log(word)
    }
    return word.join(' ')
}

 console.log(titleCase("I'm a little tea pot"))
 console.log(titleCase('sHoRt AnD sToUt'))
 console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'))