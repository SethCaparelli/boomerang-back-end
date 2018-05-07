const express = require("express")
const app = module.exports = express.Router()

const users = require('../../controllers/users.controller.js')

app.post('/', users.create)

app.get('/', users.findAll)

app.get('/:fbId', users.findOne)

app.put('/:fbId', users.update)

app.delete('/:_id', users.delete)
