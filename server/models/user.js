require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: { type: String, required: true }
    }]
})

userSchema.methods.genJWT = async function () {
    try {
        let token = await jwt.sign({
            _id: this._id,
        }, process.env.JWT_TOKEN)
        this.tokens = this.tokens.concat({ token: token })
        this.save().then(data => {
            console.log(`—token saved successfully ${data}`);
        }).catch(err => {
            console.log(`—failed to save token ${err.message}`);
        })
        return token;
    } catch (err) {
        console.log(err);
    }
}

const User = model('User', userSchema);

module.exports = User;