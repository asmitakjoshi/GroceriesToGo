const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// GET all brands
router.get('/', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// GET single brand by ID
router.get('/:id', async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({ msg: 'Brand not found' });
        }
        res.json(brand);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// POST create new brand
router.post('/', async (req, res) => {
    try {
        const newBrand = new Brand({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        });
        const brand = await newBrand.save();
        res.json(brand);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// PUT update brand by ID
router.put('/:id', async (req, res) => {
    try {
        let brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({ msg: 'Brand not found' });
        }
        brand.name = req.body.name;
        brand.description = req.body.description;
        brand.imageUrl = req.body.imageUrl;
        await brand.save();
        res.json(brand);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// DELETE brand by ID
router.delete('/:id', async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({ msg: 'Brand not found' });
        }
        await brand.remove();
        res.json({ msg: 'Brand removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
    