const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');


const registration = async (userData) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

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
        
        console.log(user.password);
        const ifPasswordMatches = await bcrypt.compare(password, user.password) 
        if(!user || !ifPasswordMatches) return 'Unknown email or password!';

        return user;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    registration,
    login
}