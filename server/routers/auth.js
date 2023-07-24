require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');
const authorize = require('../middleware/authorize');

const SALT = Number(process.env.SALT);

router.route('/login').get((req, res) => {
    res.send('Login');
}).post(async (req, res) => {
    const { email, password } = await req.body;
    console.log(req.body);
    if (!email || !password) {
        res.status(400).json({ error: "Please fill the email and password" })
    } else {
        User.findOne({ email: email }).then(data => {
            if (!data) {
                res.status(400).json({ message: "Invalid Credentials" });
            } else {
                bcrypt.compare(password, data.password, function (err, result) {
                    const token = data.genJWT().then(jwt_token => {
                        console.log(`—jwt_token: ${jwt_token}`);
                        if (data.email == email && result) {
                            res.cookie("jwt_token", jwt_token, {
                                expires: new Date(Date.now() + 25892000000),
                                httpOnly: true
                            }).json({ message: "Logged in successfull" })
                        } else {
                            res.status(401).json({ error: "Invalid Credentials auth-30" });
                        }
                    }).catch(err => {
                        console.log(`—token error ${err.message}`);
                    });
                })
            }
        })
    }
})

router.post('/registration', async (req, res) => {
    const { name, email, phone, work, password } = await req.body;
    console.log(req.body);
    User.findOne({ email: email }).then(data => {
        if (data) {
            res.send('User already exists!');
        } else {
            bcrypt.hash(password, SALT, function (err, hash) {
                if (err) {
                    console.log(`—error in registration post ${err.message}`);
                    res.status(422).json({ error: err.message });
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

router.get('/about', authorize, (req, res) => {
    res.send(req.rootUser);
})

router.get('/getdata', authorize, (req, res) => {
    res.send(req.rootUser);
})

router.post('/contact', authorize, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (name != "" || email != "" || phone != "" || message != "") {
            console.log(`—user id : ${req.userID}`);
            const userContact = await User.findOne({ _id: req.userID });
            if (userContact) {
                const userMessage = await userContact.addMessage(name, email, phone, message);
                await userContact.save();
                res.status(200).json({ message: "message sent successfully" })
            }
        } else {
            return res.json({ error: "Please fill the form properly" });
        }
    } catch (error) {
        console.log(`—router 97 : ${error}`);
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwt_token', { path: '/' });
    res.status(200).send('User Logout');
})

module.exports = router;