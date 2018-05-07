const express = require("express")
const app = module.exports = express.Router()

const spots = require('../../controllers/spots.controller.js')

app.post('/', spots.create)

app.get('/', spots.findAll)

app.get('/:_id', spots.findOne)

app.put('/:_id', spots.update)

app.delete('/:_id', spots.delete)
