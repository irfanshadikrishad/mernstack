const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.route('/login').post((req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Please fill the email and password" })
    } else {
        User.findOne({ email: email }).then(data => {
            if (!data) {
                res.status(400).json({ message: "Invalid Credentials" });
            } else {
                if (data.email == email && data.password == password) {
                    res.status(200).send({ message: "Logged in successfull" })
                } else {
                    res.status(400).json({ message: "Invalid Credentials" });
                }
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
            const user = new User(req.body);
            user.save().then(data => {
                console.log(`—registered successfully : ${email}`);
                res.status(201).json({ message: `user saved successfully` })
            }).catch(err => {
                res.send(`user failed to save ${err.message}`)
            })
        }
    }).catch(err => {
        res.status(500).json({ error: err.message });
    })
})

module.exports = router;