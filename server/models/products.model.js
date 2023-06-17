const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: mongoose.Schema.Types.Decimal
    },
    description: {
        type: String
    }
}, { timestamps: true }
);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;