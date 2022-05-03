const express = require('express');
const router = express.Router();
const User = require('../models/userModel');



router.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });

        if (result) {
            return res.send(result);
        } else {
            return res.status(400).send('Login Failure');
        }
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/register', async (req, res) => {
    try {
        const newUser = User(req.body);

        await newUser.save();

        res.send('Registration Successful');
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;



