const express= require("express")
const foods = express()
const port = process.env.PORT || 5500
var uuid = require('uuid');
const bodyParser = require("body-parser")
var uuidID = uuid.v4();

const foodInventory = [
    {type: "fruit" , name: "banana", price: 1.00, id: uuidID}, 
    {type: "fruit" , name: "banana", price: 1.00, id: uuidID}, 
    {type: "fruit" , name: "banana", price: 1.00, id: uuidID}, 
    {type: "fruit" , name: "banana", price: 1.00, id: uuidID}, 
    {type: "fruit" , name: "banana", price: 1.00, id: uuidID}, 
]

foods.use(bodyParser.json())



foods.use("/fruit", require("./routes/fruitRouter"))
foods.use("/vegetable", require("./routes/vegetableRouter"))


foods.listen(port, () =>{
    console.log("The server is listening on 5500")
})