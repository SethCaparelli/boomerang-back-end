const createError = require("http-errors")

const express = require("express")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000;

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/api/users.route")
const spotsRouter = require("./routes/api/spots.route")

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'pug')

const dbConfig = require("./config/database.config.js")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...')
    process.exit()
})

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/spots", spotsRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.listen(port)
