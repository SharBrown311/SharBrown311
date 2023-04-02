const express = require("express")
const inventoryRouter = express.Router()

const Item = require("../models/inventory.js")

//Get all items
inventoryRouter.get("/", (req, res, next) =>{
  Item.find((err, items) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})

//Get one item
inventoryRouter.get("/:itemId", (req, res, next) => {
  const itemId = req.params.itemId
 const foundItem = Item.find(item => item._id === itemId)
 if(!foundItem){
  const error = new Error(`The item with ${itemId} was not found, please try again.`)
  res.status(500)
  return next(error)
 }
})

//POST ONE
inventoryRouter.post("")


module.exports = inventoryRouter