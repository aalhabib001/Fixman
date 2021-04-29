const express = require('express');
const router = express.Router();
const reviewController = require('../controller/ReviewController')

router.post('/reviews', reviewController.addReview )

router.get('/reviews', reviewController.getReviews )


module.exports = router