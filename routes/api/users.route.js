const express = require("express")
const app = module.exports = express.Router()

const users = require('../../controllers/users.controller.js')

app.post('/', users.create)

app.get('/', users.findAll)

app.get('/:noteId', users.findOne)

app.put('/:noteId', users.update)

app.delete('/:noteId', users.delete)
