const AdminModel = require("../model/AdminModel")

const addAdmin = (req, res) => {
    let newAdmin = new AdminModel({
        email: req.body.email
    })

    console.log(newAdmin)
    newAdmin.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}

const getAllAdmin = (req, res) => {
    AdminModel.find()
        .then(result => {
            res.json({
                massage: 'Admin Found',
                result
            })
        })
}

const getAdmin = (req, res) => {
    let email = req.params.email

    AdminModel.findOne({email})
        .then(result => {

            if (result == null) {
                res.status(400).json({
                    massage: 'Admin Not Found',
                    status: 400,
                    result
                })
            } else {
                res.status(200).json({
                    massage: 'Admin Found',
                    status: 200,
                    result
                })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


module.exports = {
    addAdmin,
    getAllAdmin,
    getAdmin
}