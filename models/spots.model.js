const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SpotSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    location: {
        type: Object,
        default: {}
    },
    picture: {
        type: Object,
        default: {}
    },
    drinks: {
        type: Object,
        default: {}
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Spots", SpotSchema)
