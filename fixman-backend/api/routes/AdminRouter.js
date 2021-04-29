const express = require('express');
const router = express.Router();

const adminController = require('../controller/AdminController')

router.post('/admins', adminController.addAdmin)

router.get('/admins', adminController.getAllAdmin)

router.get('/admin/:email', adminController.getAdmin)


module.exports = router