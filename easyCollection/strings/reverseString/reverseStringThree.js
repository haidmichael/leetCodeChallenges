
const backwords = ['b','a','c','k','w','o','d','s']

const reverseString =(str) => {
    let inReverse = ''

    for (let i = str.length - 1; i > 0; i--) {
        inReverse += str[i]
    }
    return inReverse.split(' ') 
}

console.log(reverseString(backwords))