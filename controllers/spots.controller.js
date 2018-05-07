const Spots = require("../models/spots.model")

exports.create = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Spot name cannot be empty"
        })
    }

    const spot = new Spots({
        name: req.body.name,
        location: req.body.location,
        drinks: req.body.drinks,
        picture: req.body.picture,
    })

    spot.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Spot."
        })
    })
}

exports.findAll = (req, res) => {
    Spots.find()
    .populate("user")
    .then(spots => {
        res.send(spots)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving spots."
        })
    })
}

exports.findOne = (req, res) => {
    Spots.findById(req.params._id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Spots not found with id " + req.params._id
            })
        }
        res.send(user)
    }).catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "User not found with id " + req.params._id
            })
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params._id
        })
    })
}

exports.update = (req, res) => {
     if(!req.body.name) {
        return res.status(400).send({
            message: "User name cannot be empty"
        })
    }

    Spots.findOneAndUpdate(req.params._id, {
        name: req.body.name,
        location: req.body.location,
        drinks: req.body.drinks,
        picture: req.body.picture,
        user: req.body._id
    }, {new: true})
    .then(spot => {
        if(!spot) {
            return res.status(404).send({
                message: "Spot not found with id " + req.params._id
            })
        }
        res.send(spot)
    }).catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Spot not found with id " + req.params._id
            })
        }
        console.log(err)
        return res.status(500).send({
            message: "Error updating spot with id " + req.params._id
        })
    })
}

exports.delete = (req, res) => {
    Spots.findByIdAndRemove(req.params._id)
    .then(spot => {
        if(!spot) {
            return res.status(404).send({
                message: "Spot not found with id " + req.params._id
            })
        }
        res.send({message: "Spot deleted successfully!"})
    }).catch(err => {
        if(err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "spot not found with id " + req.params._id
            })
        }
        return res.status(500).send({
            message: "Could not delete spot with id " + req.params._id
        })
    })
}