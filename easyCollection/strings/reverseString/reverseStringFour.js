
const readMe = 'read me in reverse'

const reverseStr = (str) => {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse //.split('')
}

// var reverseStr = function (s) {
//   let left = 0 
//   let right = s.length - 1 

//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]] 
//     left++ 
//     right-- 
//   }
//   return s 
// }

console.log(reverseStr(readMe))