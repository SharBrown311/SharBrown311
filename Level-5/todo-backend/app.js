const express = require('express')
const {v4: uuidv4} = require('uuid')

const app = express()
app.use(express.json())

let todos = [];


//Creates a new todo

app.post('/todos', (req, res) => {
  const {name, description, imageUrl} = req.body
  const todo = {
    name, 
    description, 
    imageUrl, 
    completed: false, 
    _id: uuidv4()
  }
  todos.push(todo)
  res.json(todo)
})


//GET all todos
app.get('/todos', (req, res) => {
  res.json(todos)
});

//GET a single todo by id
app.get('/todos/:id', (req, res) => {
  const { id } = req.params
  const todo = todos.find(todo => todo._id === id)
  if(todo) {
    res.json(todo)
  }else{
    res.status(404).json({ message: 'Todo not found' })
  }
})


//Update / PUT a todo by id
app.put('/todos/:id', (req, res) => {
  const { id } = req.params
  const { name, description, imageUrl, completed } = req.body
  const todo = todos.find(todo => todo._id === id);
  if (todo) {
    todo.name = name || todo.name;
    todo.description = description || todo.description;
    todo.imageUrl = imageUrl || todo.imageUrl;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  }else{
    res.status(404).json({message: ' Todo not found' })
  }
})

//DELETE a todo by id

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params 
  const index = todos.findIndex(todo => todo._id === id) 
  if(index !== -1){
    todos.splice(index, 1)
    res.json({message: 'Todo deleted'})
  }else{
    res.status(404).json({message: 'Todo not found'})
  }
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})