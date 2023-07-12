require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

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