const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    serviceName: String,
    price: Number,
    serviceInfo: String,
    imageLink: String
})

const ServiceModel = mongoose.model('serviceModel', ServiceSchema)

module.exports = ServiceModel