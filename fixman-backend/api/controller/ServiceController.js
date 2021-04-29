const ServiceModel = require('../model/ServiceModel')

const addService = (req, res) => {

    let newService = new ServiceModel({
        serviceName: req.body.serviceName,
        price: req.body.price,
        serviceInfo: req.body.serviceInfo,
        imageLink: req.body.imageLink
    })

    newService.save()
        .then(result => {
            res.status(201).json({
                massage: 'Service Added',
                data: result
            })
        })
        .catch(err => {
            res.json(err)
        })
}

const getServiceList = (req, res) => {
    if(req.params.serviceId){
        ServiceModel.findOne({_id: req.params.serviceId})
            .then(result => {
                res.json({
                    massage: 'Service Found',
                    result
                })
            })
    }
    else {
        ServiceModel.find()
            .then(result => {
                res.json({
                    massage: 'Service Found',
                    result
                })
            })
    }


}

module.exports = {
    addService,
    getServiceList
}