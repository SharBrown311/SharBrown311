var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


// //splits input into an array 
const inputSplit = input.split('')

// //Assigns ASCII codes for input
const inputToAscii = inputSplit.map((item) =>(
  item.charCodeAt(0)
))

// //Checks if ascii codes applies the shift
// //if value passed "z" the alphabet resets, all other chars remain the same

const shiftAscii = inputToAscii.map((item) =>{
  if(item >= 97 && item <= 122 && (item + shift > 122)){
    return (item - 26) + shift
  }else if(item >= 97 && item <= 122){
    return item + shift
  }else{
    return item
  }
})


// //assigns letters to ascii codes
const asciiToAlpha = shiftAscii.map((item) => (String.fromCharCode(item)))


// //joins array to string w/o
const alphaToWords = asciiToAlpha.join("")


//completed Ascii cipher using node index
console.log(`Cipher Process Successful: ${alphaToWords}`)

