const express = require('express');
const router = express.Router();
const productsBll = require('../BLL/productsBLL');

router.get('/', async(req, res) => {
    const response = await productsBll.getAllProducts();
    res.send(response)
});

router.get('/:type', async(req, res) => { 
    const type = req.params.type;

    const response = await productsBll.getProductByType(type);
    res.send(response);
});

router.post('/buyProduct', async(req, res) => {
    const productData = req.body;

    const response = await productsBll.buyProduct(productData);
    res.send(response)
});

router.delete('/sellProduct', async(req, res) => {
    const productData = req.body;

    const response = await productsBll.sellProduct(productData);
    res.send(response);
});

module.exports = router   