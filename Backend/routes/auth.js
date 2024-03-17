const express = require("express")
const { query, body, validationResult } = require('express-validator');
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "asmita";
var fetchuser = require("../middleware/fetchuser")

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
router.post('/createuser', [
    body('name', 'Name must be greater than 3').isLength({ min: 3 }),
    body('email', "Email format is not valid ").isEmail(),
    body('password', 'password must be minimum of 5 chartacter').isLength({ min: 5 })
], async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email is already exists" });
        }

        const salt = await bcrypt.genSaltSync(10);
        const secpass = await bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)

        success = true
        res.json({ success, authToken })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})


router.post('/login', [
    body('email', "Email format is not valid ").isEmail(),
    body('password', "password can't be blank ").exists(),
], async (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "try with correct credentials" })

        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "try with correct credentials" })

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)

        res.json({ authToken })
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})


module.exports = router