const express = require('express')
const cardsRouter = express.Router()
const Flashcard = require("../models/flashcard.js")
const {expressjwt} = require('express-jwt')


//Get all cards
cardsRouter.get("/", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}),
async (req, res, next) => {
    try{
        const cards = await Flashcard.find()
        return res.status(200).send(cards)
    }
    catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get by Deck
cardsRouter.get("/:deckId",
expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}), 
(req, res, next) => {
    Flashcard.find({ deckId : req.params.deckId }, (err, Flashcard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Flashcard)
    })
})

//Post one
cardsRouter.post("/", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}), (req, res, next) => {
    const newCard = new Flashcard(req.body)
    newCard.save((err, savedCard) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedCard)
    })
})

// delete function
cardsRouter.delete( "/:cardId",expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}), async (req, res, next) =>{
    Flashcard.findByIdAndDelete( {_id: req.params.cardId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item: ${deletedItem} from the database.`)
    })
})

//update one card
cardsRouter.put("/:cardId" , expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req, res, next) => {
    Flashcard.findOneAndUpdate(
        {_id : req.params.cardId},
        req.body,
        {new: true},
        (err, updatedCard) => {
            if(err){
                res.status(500)
                return next(err)
            }

        return res.status(201).send(updatedCard)
        }
    )
})


module.exports = cardsRouter


//Postman flashcard input form
// {
//     "question": "fake Data",
//     "answer": "more  useless data",
//     "deckId": ""
//     }