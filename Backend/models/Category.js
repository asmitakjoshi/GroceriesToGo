const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the category schema
const categorySchema = new Schema({
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
        // Add any additional properties for the category
    }
});

// Create the Category model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
