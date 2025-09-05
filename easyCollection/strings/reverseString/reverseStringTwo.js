
const hannah = ["h","a","n","n","a","H"]

const reverseString = (str) => {
    let reverse = ''
    for (let i = str.length -1; i > 0; i--) {
        reverse += str[i]
    }
    return reverse.split('')
}

console.log(reverseString(hannah))