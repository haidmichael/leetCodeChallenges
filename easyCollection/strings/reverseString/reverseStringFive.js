
const reveseMe = 'Reverse ME'

const trackBack = (string) => {
    let backTrack = ''
    for (let i = string.length - 1; i >= 0; i--) {
        backTrack += string[i]
    }
    return backTrack.toLowerCase()
}

console.log(trackBack(reveseMe))