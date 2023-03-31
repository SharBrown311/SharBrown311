const express = require('express')
const app = express()

//FAKE DATA
const users = [
  {name: "joe", age: 20},
  {name: "jim", age: 27},
  {name: "john", age: 22},
  {name: "sally", age: 35},
  {name: "max", age: 62},
  {name: "bridgette", age: 89},

]



app.get('/users', (req, res) => {
  res.send(users)
})



app.listen(5500)





