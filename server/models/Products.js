const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: false
    },
    inStock: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgUrl: Array,
    date: {
        type: Date,
        default: Date.now
    },
    productDetails: {
        neckLength: {
            type: Number,
            required: true
        },
        handedness: {
            type: String,
            required: true
        },
        colors: Array
    },
    image:{
        type: String,
        required: false
    }  
});

module.exports = mongoose.model('products', productSchema);
