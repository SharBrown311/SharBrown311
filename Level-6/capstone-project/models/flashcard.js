const mongoose = require('mongoose')
const Schema = mongoose.Schema


const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    created: {
        type: Date, 
        required: true
    },
    deckId: {
        type: String,
        required: true
    },
    // deck: {
    //     type: Schema.Types.ObjectId, 
    //     ref: "Deck", 
    //     required: true,
    // }
})



module.exports = mongoose.model("Flashcard", flashcardSchema)