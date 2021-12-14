const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('USER', usersSchema)
module.exports = User