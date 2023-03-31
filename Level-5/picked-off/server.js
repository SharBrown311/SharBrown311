const express = require('express')
const app = express

app.use(express.json())

app.length("/", require("./middleware"))

app.listen(5500, () => {
  console.log("Port 5500 connected to server!")
})