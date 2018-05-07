const mongoose = require("mongoose")

const SpotSchema = new mongoose.Schema({
    fbId: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    picture: {
        type: Object,
        default: {}
    },
    friends: {
        type: Array,
        default: []
    },
    boomerangReceived: {
        type: Array,
        default: []
    },
    boomerangSent: {
        type: Array,
        default: []
    },
    spots: {
        type: Array,
        default: []
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Spots", SpotSchema)
