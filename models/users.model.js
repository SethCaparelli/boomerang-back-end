const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
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

module.exports = mongoose.model("User", UserSchema)
