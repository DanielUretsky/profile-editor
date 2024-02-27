const express = require('express');
const router = express.Router();
const tokenAuthentication = require('../configs/tokenAuthentication');

const usersBll = require('../BLL/usersBLL');

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const response = await usersBll.getOneUser(id);

    res.send(response);
});

router.get('/userPurchases/:id', async (req, res) => {
    try {
        const id = req.params.id;
       

        const response = await usersBll.getUserPurchases(id);
        res.send(response);
    } catch (err) {
        console.log(err);
    }
});

router.post('/uploadImage/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const imageBase64 = req.body.imageBase64;
        console.log(imageBase64);
        const response = await usersBll.uploadUserImage(id, imageBase64);
        res.send(response);
    } catch (err) {
        console.log(err);
    }
})



  
module.exports = router;
