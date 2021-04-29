const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    serviceId: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String
    },
    date: {
        type: Date
    }
})

const OrderModel = mongoose.model('serviceOrderModel', OrderSchema)

module.exports = OrderModel