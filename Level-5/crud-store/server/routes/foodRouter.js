const express = require('express')
const foodRouter = express.Router()
const Foods = require("../model/foods.js")
const { SchemaTypeOptions } = require('mongoose')

foodRouter.route("/")
  .get((req, res, next) => {
    Foods.find((err, foods) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(foods)
    })
  })
    .post((req, res, next) =>{
      const newFood = new Foods(req.body)
      newFood.save((err, savedFood) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(savedFood)
      })
    })
    foodRouter.route("/:foodId")
      .get((req, res, next) => {
        Foods.find({_id: req.params.foodId}, (err, foods) =>{
          if(err) {
            res.status(500)
            return next(err)
          }
          return res.status(200).send(foods)
        })
      })
      .put((req, res, next) =>{
        Foods.findOneAndUpdate(
          {_id: req.params.foodId}, 
          req.body, 
          {new: true}, 
          (err, updatedFood) =>{
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(201).send(updatedFood)
          })
      })
      .delete((req, res, next) => {
        Foods.findOneAndDelete(
          {_id: req.params.foodId},
          (err, deletedFood) => {
            if(err){
              res.status(500)
              return next(err)
            }
            return res.status(201).send(deletedFood)
          })
      })
      module.exports = foodRouter