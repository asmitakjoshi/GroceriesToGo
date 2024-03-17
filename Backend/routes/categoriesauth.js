const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// GET single category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// POST create new category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        });
        const category = await newCategory.save();
        res.json(category);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// PUT update category by ID
router.put('/:id', async (req, res) => {
    try {
        let category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        category.name = req.body.name;
        category.description = req.body.description;
        category.imageUrl = req.body.imageUrl;
        await category.save();
        res.json(category);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// DELETE category by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        await category.remove();
        res.json({ msg: 'Category removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
