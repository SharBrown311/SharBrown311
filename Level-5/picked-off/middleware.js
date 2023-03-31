const express = require("express")
const middleWareRouter = express.Router()

const data = {
  name: "Grumpy Bear", 
  image: "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/29337/1502219615-24261-1031/GRUM.jpg", 
  age: 150,
}

middleWareRouter.use((req, res, next) => {
  req.body = {...data, location: "Care-a-lot", food: "the souls of innocent children."}
})

middleWareRouter.use((req, res) => {
  res.send(req.body)
})
module.exports = middleWareRouter