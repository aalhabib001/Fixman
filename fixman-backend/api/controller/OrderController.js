const OrderModel = require("../model/OrderModel")

const addOrder = (req, res) => {
    let newOrder = new OrderModel({
        serviceId: req.body.serviceName,
        name: req.body.name,
        email: req.body.email,
        price: req.body.price,
        status: req.body.status,
        date: req.body.date
    })

    console.log(newOrder)
    newOrder.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}

const getOrders = (req, res) => {
    OrderModel.find()
        .then(result => {
            res.json({
                massage: 'Order Found',
                result
            })
        })
}

const getOrderByEmail = (req, res) => {
    let email = req.params.email
    console.log(email);
    OrderModel.find({ email: email })
        .then(result => {
            res.json({
                massage: 'Order Found',
                result
            })
        })
        .catch(err => {
            res.json(err)
        })
}

const editStatus = (req, res) => {
    let orderId = req.params.orderId
    let status = req.body.status

    OrderModel.findOneAndUpdate(orderId, req.body)
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(err => {
            res.json(err)
        })


}

module.exports = {
    addOrder,
    getOrders,
    getOrderByEmail,
    editStatus
}