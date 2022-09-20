const readline = require('readline-sync')

const input = require('readline-sync')
let num1 = input.question('Can you enter your first number please?')

let num2 = input.question('Can you enter your second number please?')
const operator = input.keyIn("do you want to (a)dd, (s)ubract, (m)ultiply, or (d)ivide?")

if(operator === "a"){
 console.log("The result is: " + add(num1, num2))
}else if (operator === "s"){
        console.log("The result is: " + subtract(num1 , num2))
}else if (operator === "m"){
        console.log("The result is: " + multiply(num1 , num2))
}else if (operator === "d"){
        console.log("The result is: " + divide(num1 , num2))
        
}else {
        console.log("yeah...that's not going to work")
}


function add(num1, num2){
        return parseInt(num1) + parseInt(num2)
}
function subtract(num1 , num2){
        return parseInt(num1) - parseInt(num2)
}
function multiply(num1 , num2){
        return (num1 * num2)
}function divide(num1 , num2){
        return (num1 / num2)
}