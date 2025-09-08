
const readMe = 'read me in reverse'

const reverseStr = (str) => {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse.split('')
}
console.log(reverseStr(readMe))