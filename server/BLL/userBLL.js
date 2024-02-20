require('dotenv').config();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registration = async (userData) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        console.log(userData);
        const newUser = new userModel({ ...userData, password: hashedPassword });
        await newUser.save();

        return "Created succedfully";
    } catch (err) {
        console.log(err);
    }
}

const login = async (email, password) => {
    try {
        const user = await userModel.findOne({ email });
        const ifPasswordMatches = await bcrypt.compare(password, user.password) 
        
        if(!user || !ifPasswordMatches) return 'Unknown email or password!';
        const tokenPayload = { email : user.email }
        const accessToken = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET);

        return {accessToken};

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    registration,
    login
}