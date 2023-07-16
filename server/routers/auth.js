require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

const SALT = Number(process.env.SALT);

router.route('/login').post((req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Please fill the email and password" })
    } else {
        User.findOne({ email: email }).then(data => {
            if (!data) {
                res.status(400).json({ message: "Invalid Credentials" });
            } else {
                bcrypt.compare(password, data.password, function (err, result) {
                    const token = data.genJWT();
                    if (data.email == email && result) {
                        res.status(200).send({ message: "Logged in successfull" })
                    } else {
                        res.status(400).json({ message: "Invalid Credentials" });
                    }
                })
            }
        })
    }
})

router.post('/registration', (req, res) => {
    const { name, email, phone, work, password } = req.body;
    User.findOne({ email: email }).then(data => {
        if (data) {
            res.send('User already exists!');
        } else {
            bcrypt.hash(password, SALT, function (err, hash) {
                if (err) {
                    res.status(401).json({ error: err.message });
                } else {
                    const user = new User({
                        name: name,
                        email: email,
                        phone: phone,
                        work: work,
                        password: hash
                    });
                    user.save().then(data => {
                        res.status(201).json({ message: `user saved successfully` })
                    }).catch(err => {
                        res.send(`user failed to save ${err.message}`)
                    })
                }
            })
        }
    }).catch(err => {
        res.status(500).json({ error: err.message });
    })
})

module.exports = router;