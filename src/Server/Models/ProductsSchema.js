const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('PRODUCT', productsSchema)
module.exports = Product