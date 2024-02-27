const jsonfile = require('jsonfile');
const userModel = require('../models/userModel');
const purchaseModel = require('../models/purchaseModel');

const getAllProducts = async() => {
    const {products} = await jsonfile.readFile('./data/products.json');
  
    return products;
}

const getProductByType = async (productType) => {
    const products = await getAllProducts();
 
    return products.filter(products => products.type === productType);
}

const buyProduct = async(product) => {
    try {
        const newPurchase = new purchaseModel(product);
        const user = await userModel.findOne({_id : newPurchase.user});

        if(!newPurchase) return "Something went wrong";
        user.coinsBalance -= product.price;
        
        await user.save();
        await newPurchase.save();

        return {userBalance: user.coinsBalance}
    } catch (err) {
        console.log(err);
    }
}
 
const sellProduct = async(product) => {
    try {
        const user = await userModel.findOne({_id : product.user});
        await purchaseModel.findByIdAndDelete(product.id);
    
        user.coinsBalance += +product.price;
        await user.save(); 
      
        return {userBalance: user.coinsBalance}
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllProducts,  
    getProductByType,
    buyProduct,
    sellProduct
} 