const express = require('express');
const router = express.Router();
const serviceController = require('../controller/ServiceController')

router.post('/services', serviceController.addService)

router.get('/services', serviceController.getServiceList)

router.get('/services/:serviceId', serviceController.getServiceList)

module.exports = router