const express = require("express")
const bountyRouter = express.Router()
//const { v4: uuidv4 } = require('uuid');
const Bounty = require("../models/bounty.js")

//Get all Bounties
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
  
    if(err){
      res.status(500)
      return next(err)
    }
    console.log(bounties)
    return res.status(200).send(bounties)
   
  })
 
})

// //Get one bounty
bountyRouter.get("/:bountyId", (req, res, next) => {
  const bountyId = req.params.bountyId
  const foundBounty = Bounty.find(bounty => bounty.id === bountyId)
  if(!foundBounty){
    const error = new Error(`The Bounty with ${bountyId} was not found, please try again. `)
    res.status(500)
    return next(error)
  }
})

//POST ONE
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save((err, savedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedBounty)
  })
})

//DELETE ONE
bountyRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete(
    {id: req.params.bountyId}, 
    (err, deletedBounty) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedBounty.title} from the database`)
  })
})

//PUT or UPDATE ONE
bountyRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    {id: req.params.bountyId}, //find this one to update
    req.body,    //update the body with this data
    {new: true},//sends back the updated version
    (err, updatedBounty) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedBounty)
    }
  )
})

module.exports = bountyRouter
