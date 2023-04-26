const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo.js")


//Get all Todos

todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

//Add new todo 
todoRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newTodo = new Todo(req.body)
  newTodo.save((err, savedTodo) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTodo)
  })
})



//Delete todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    {_id: req.params.todoId , user: req.user._id}, 
    (err, deletedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted todo: ${deletedTodo.title}`)
    }

  )
})




//Edit/Update todo
todoRouter.put("/:todoId", (req, res, next) => {
  Todo.findOneAndUpdate(
    {_id: req.params.todoId, user: req.user._id}, 
    req.body, 
    { new: true}, 
    (err, updatedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTodo)
    }
  )
})





module.exports = todoRouter