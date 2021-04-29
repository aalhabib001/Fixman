const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    email: String
})


const AdminModel = mongoose.model('adminModel', AdminSchema)

module.exports = AdminModel