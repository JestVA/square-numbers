// arg will be an array that stores whatever arguments are passed in command line
const arg = process.argv;

// filter this array only for numbers and store into parse only the first number (index = 0). This is nice as it does not interfere with how process.argv works (ref. index allocation 0 => node, 1 => filename, 2 ... N => arguments). And we also make this a number (as the terminal is returning a string (that looks like a number :))
const parse = Number(arg.filter(Number)[0]);  

// We now have a number
// We want to take this number and fill an array with it's value
// we initialize a new array and make it store the previous value
const myArray = Array(parse).fill('placeholder').map((e, k) => Math.pow(k + 1, 2));
// and we tell the program to map elements up to the value for the array and bring them to the power
// we print the results to the console
console.log(...myArray)
// the script is ready