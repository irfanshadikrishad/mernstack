require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./routers/auth');
// Constants
const PORT = process.env.PORT || 3001;
// Database Connections
mongoose.connect(process.env.DATABASE_URL).then(
    () => { console.log(`—connected to database`); }
).catch((err) => {
    console.log(`—database connection failed : ${err}`);
})
// Middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth);
// Listening
app.listen(PORT, () => {
    console.log(`—listening to ${PORT}`);
})