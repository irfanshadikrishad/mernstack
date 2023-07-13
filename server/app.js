require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(process.env.DATABASE_URL).then(
    () => { console.log(`—connected to database`); }
).catch((err) => {
    console.log(`—database connection failed : ${err}`);
})

app.get('/', (req, res) => {
    res.send('Hello, Express');
})
app.get('/about', (req, res) => {
    res.send('Hello, About Page');
})
app.get('/contact', (req, res) => {
    res.send('Hello, Contact Page');
})
app.get('/signin', (req, res) => {
    res.send('Hello, Login Page');
})
app.get('/signup', (req, res) => {
    res.send('Hello, Registration Page');
})

app.listen(PORT, () => {
    console.log(`—listening to ${PORT}`);
})