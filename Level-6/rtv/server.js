//import required modules

const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

const authRouter = require('./routes/authRouter.js');
const issueRouter = require('./routes/issueRouter.js');
const commentRouter = require('./routes/commentRouter.js');



//middleware
app.use(express.json())
app.use(morgan('dev'))


//connection to mongoDb
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ibgpire.mongodb.net/politicalPostsdb`,() => console.log("Mongoose Connected to DB"))

  //defining routes from Routers
  app.use('/auth', authRouter)
  app.use('/api/issue', issueRouter)
  app.use('/api/comment', commentRouter)


  // jwt({
  //   secret: "SECRET",
  //   algorithms: ["HS256"],
  // });


  //middleware error handler
  app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "Unauthorized"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })


  //Starting of the Server
app.listen(4000, console.log('App is Listening'))
