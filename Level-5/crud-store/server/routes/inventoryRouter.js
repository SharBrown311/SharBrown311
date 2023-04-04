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
 const foundItem = Item.find(item => item.id === itemId)
 if(!foundItem){
  const error = new Error(`The item with ${itemId} was not found, please try again.`)
  res.status(500)
  return next(error)
 }
})

//POST ONE
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Item(req.body)
  newItem.save((err, savedItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedItem)
  })
})

//DELETE ONE
inventoryRouter.delete("/:itemId", (req, res, next) =>{
  Item.findOneAndDelete({id: req.params.itemId}, (err, deletedItem)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedItem.item} from the database`)
  })
})
//PUT or UPDATE ONE

inventoryRouter.put("/:itemId", (req, res, next) =>{
  Item.findOneAndUpdate(
    {id: req.params.itemId}, 
    req.body, 
    {new: true}, 
    (err, updatedItem) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedItem)
    }
  )
})

module.exports = inventoryRouter