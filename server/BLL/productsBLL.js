const jsonfile = require('jsonfile');
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
        if(!newPurchase) return "Something went wrong";
        await newPurchase.save();

        return "Pruduct have been added";
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllProducts,
    getProductByType,
    buyProduct
}