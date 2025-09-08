// Write a function called titleCase that takes in a string parameter and returns the string with the 
// first letter of each word upper case and the rest of the word lower case
// Hints: You can use built in JS functions toLowerCase/split/toUpperCase/slice/join

const teaPot = 'Im a little tea pot'
const shortStout = 'sHoRt AnD sToUt'
const allUpper = 'HERE IS MY HANDLE HERE IS MY SPOUT'

const titleCase = (str) => {
    // Create a variable to hold the string and covert it to lower case
    let toLower = str.toLowerCase().split(' ')
    // console.log(toLower)
    // Loop through the variable in order to return the first letter as upper case and add it to the string using slice()
    for (let i = 0; i < toLower.length; i++){
        toLower[i] = toLower[i][0].toUpperCase() + toLower[i].slice(1)
        // console.log(toLower[i] = toLower[i][0].toUpperCase() + toLower[i].slice(1))
    }
    // // return the joined string
    return toLower.join(' ')
}

console.log(titleCase(teaPot))
// console.log(titleCase(shortStout))
// console.log(titleCase(allUpper))