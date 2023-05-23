const express = require('express')
const decksRouter = express.Router()
const Deck = require("../models/deck.js")

//get all decks
//api/decks
//works

decksRouter.get("/", async(req, res, next) => {
    console.log(typeof(Deck))
    Deck.find((err, Deck) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Deck)
    })
})

//get one deck
//api/decks/deckId
//works
decksRouter.get("/:deckId", (req, res, next) => {
    Deck.findOne({ _id: req.params.deckId }, (err, Deck) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Deck)
    })
})

//get deck by search terms
decksRouter.get("/search", (req, res, next) => {
    const {deck} = req.query
    const pattern = new RegExp(deck)
    Deck.find(
        { title: { $regex: pattern, $options: 'i' } },
        (err, decks) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(decks)
        }
    )
})

//get by query. example of a search funciton: localhost:9000/deck/search?deck=2
//doesnt work
decksRouter.get("/search", (req, res, next) => {
    const { deck } = req.query
    const pattern = new RegExp(deck)
    Deck.find({ title: {$regex: pattern, $options: 'i'} }, (err,decks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send (decks)
    })
})

//post one new deck
//works

decksRouter.post("/", (req, res, next) => {
    const newDeck = new Deck(req.body)
    newDeck.save((err, savedDeck) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedDeck._id)
    })
})

//delete one
//works
decksRouter.delete("/:deckId", (req, res, next) =>{
    Deck.deleteMany({ _id: req.params.deckId }, (err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})

//update function
//works
decksRouter.put("/:deckId", (req, res, next) => {
    Deck.findOneAndUpdate(
        {_id : req.params.deckId},
        req.body,
        {new: true},
        (err, updatedDeck) => {
            if(err){
                res.status(500)
                return next(err)
            }
        return res.status(201).send(updatedDeck, `Deck has been updated.`)
        }
    )
})


module.exports = decksRouter
