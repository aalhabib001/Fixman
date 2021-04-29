const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController')

router.post('/orders', orderController.addOrder)

router.get('/orders', orderController.getOrders)

router.get('/order/:email', orderController.getOrderByEmail)

router.put('/order/:orderId', orderController.editStatus)


module.exports = router