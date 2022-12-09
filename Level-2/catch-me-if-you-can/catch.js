//Part 1a:
function sum(x, y) {
  //check data types first and throw error
  if (typeof x === "number" && typeof y === "number") {
      return x + y;
  } else {
      throw "One or both of your variables are not a number"
  }
 
}
//console.log(sum(2,4))//test output = 6
//console.log(sum('hello' , 8))//test 2 output = /home/sharon/development/assignments/catch-me-if-you-can/catch.js:7
                            // throw "One or both of your variables are not a number"
                            // ^
                            // One or both of your variables are not a number
                            // (Use `node --trace-uncaught ...` to show where the exception was thrown)


//Part 1b: 

try {
  sum("1","2")
} catch (err) {
  console.log(err)
}
//output = One or both of your variables are not a number


//Part 2a: 

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if(username === user.username && password === user.password){
    console.log('successful login')
  }else{
    throw 'you have entered an incorrect username and/or password'
  }
}

//Part 2b: 

try{
  login('sam' , '123abc')//output = successful login
  login('lisa' , 'abcdef')//output = you have entered an incorrect username and/or password
}catch(err){
console.log(err)
}
  