require('dotenv').config();

const userModel = require('../models/userModel');
const purchaseModel = require('../models/purchaseModel');

const getOneUser = async (id) => {
    try {
        const user = await userModel.findOne({ _id: id });
        return user;
    } catch (err) {
        throw err;
    }
}

const getUserPurchases = async (id) => { 
    try {
        const purchases = await purchaseModel.find({user: id});
        return purchases;
    } catch (err) {
        console.err(err);
        throw err;
    }
}

const uploadUserImage = async (id, base64) => {
    try {
        const user = await userModel.findOne({ _id: id });
        user.image = base64;

        await user.save();
        return "Uploaded";
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    
    getOneUser,
    getUserPurchases,
    uploadUserImage
} 