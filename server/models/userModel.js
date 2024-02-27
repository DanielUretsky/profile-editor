const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    gender: {type: String, required: true},
    registrationDate: {type: Date, default: Date.now},
    coinsBalance: {type: Number, default: 100},
    image: {type: String, default: null}
}, {
    versionKey: false,
    strict: true
});

const User = mongoose.model("user", userSchema, "users");

module.exports = User;  