const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const foodSchema = new Schema({
  name: {
    type: String, 
    required: true,
  }, 
  type: {
    type: String,
    required: true  
  } ,
  quantity: {
    type: Number, 
    required: true,
  },
  unitPrice: {
    type: Number, 
    required: true,
  }, 
  unit: {
    type: String, 
    required: true,
  }
})

const Foods = mongoose.model("Foods", foodSchema)

const favFood = new Foods({
  name: "blackberry", 
  type: "Fruit", 
  quantity: 28, 
  unitPrice: 6.99, 
  unit: "cartons",
  })

  favFood.save((err, new_food) => {
    console.log(new_food)
  })

  Foods.find({type: "fruit"}, (err, foods)=>{
    console.log(foods)
  })

  // Foods.findOne({name: "blackberry"}, (err, foods) => {
  //   foods.name++;
  //   foods.save((err, new_food  ) =>{
  //     console.log(new_food)
  //   })
  // })

  // Foods.findOne({name: "blackberry"}, (err, foods)=>{
  //   foods.remove(err => {
  //     console.log("Blackberries were deleted!")
  //   })
  // } )



module.exports = mongoose.model("Foods", foodSchema)