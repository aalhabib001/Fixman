const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    name: String,
    rating: Number,
    comment: String
})

const ReviewModel = mongoose.model('reviewModel', ReviewSchema)

module.exports = ReviewModel