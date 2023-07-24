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
    messages: [{
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
        message: {
            type: String,
            required: true
        }
    }],
    tokens: [{
        token: { type: String, required: true }
    }]
}, { timestamps: true })

userSchema.methods.genJWT = async function () {
    try {
        let token = await jwt.sign({
            _id: this._id,
        }, process.env.JWT_TOKEN)
        this.tokens = this.tokens.concat({ token: token })
        this.save().then(data => {
            console.log(`—token generated successfully`);
        }).catch(err => {
            console.log(`—failed to save token ${err.message}`);
        })
        return token;
    } catch (err) {
        console.log(err);
    }
}

userSchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save().then(data => {
            console.log(`—schema : messege sent successfully`);
        });
        return this.message;
    } catch (error) {
        console.log(`—failed saving message : ${error}`);
    }
}

const User = model('User', userSchema);

module.exports = User;