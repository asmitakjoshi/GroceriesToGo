const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the brand schema
const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
        // Add any additional properties for the brand
    }
});

// Create the Brand model
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
