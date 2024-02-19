const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "username": {type: String, required: true},
    "email": {type: String, required: true},
    "password": {type: String, required: true},
}, {
    versionKey: false,
    strict: true
});

const User = mongoose.model("user", userSchema, "users");

module.exports = User;