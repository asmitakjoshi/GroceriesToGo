const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the product schema
const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId, // Use ObjectId type for references
        ref: 'Brand',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantityAvailable: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, // Use ObjectId type for references
        ref: 'Category',
        required: true
    }
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
