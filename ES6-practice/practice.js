//ES6 Part 1


//const and let
var name = 'Steve'

const firstName = 'Joe';     //const = constant
firstName = 'Steve'          //this would break our program
let age = 12;
    age = 13                //this would change the variable value just like var.



    //Global & Local Scoping
    function sum(a, b){
        return a + b 
    }
    console.log(a)   //returns undefined because the console.log is out of scope


    function someFunc(){
        if (2 ===2){
            var a = 'hello'
        }
        console.log(a)
    }
    someFunc()