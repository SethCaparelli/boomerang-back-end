const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SpotSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    location: {
        type: Object,
        default: {
            latitude: 0,
            longitude: 0
        }
    },
    picture: {
        type: String,
        default: ""
    },
    drinks: {
        type: Array,
        default: []
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Spots", SpotSchema)
