const Users = require("../models/users.model")

exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content cannot be empty"
        })
    }

    const user = new Users({
        fbId: req.body.fbId,
        name: req.body.name,
        email: req.body.email
    })

    user.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        })
    })
}

exports.findAll = (req, res) => {
    Users.find()
    .then(users => {
        res.send(users)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        })
    })
}

exports.findOne = (req, res) => {
    Users.findById(req.params.noteId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            })
        }
        res.send(user)
    }).catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        })
    })
}

exports.update = (req, res) => {
     if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        })
    }

    Users.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            })
        }
        res.send(user)
    }).catch(err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        })
    })
}

exports.delete = (req, res) => {
    Users.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            })
        }
        res.send({message: "user deleted successfully!"})
    }).catch(err => {
        if(err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            })
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        })
    })
}