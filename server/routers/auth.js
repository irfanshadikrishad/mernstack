const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
    res.send('router');
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