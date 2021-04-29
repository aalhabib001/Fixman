const ReviewModel = require("../model/ReviewModel")

const addReview = (req, res) => {
    let newReview = new ReviewModel({
        name: req.body.name,
        rating: req.body.rating,
        comment: req.body.comment
    })

    console.log(newReview)
    newReview.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}

const getReviews = (req, res) => {
    ReviewModel.find()
        .then(result => {
            res.json({
                massage: 'Review Found',
                result
            })
        })
}


module.exports = {
    addReview,
    getReviews
}