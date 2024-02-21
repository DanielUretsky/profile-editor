const express = require('express');
const router = express.Router();

const userBLL = require('../BLL/usersBLL');

router.post('/registration', async (req, res) => {
    try {
        const userData = req.body;
        const response = await userBLL.registration(userData);

        res.status(201).send(response)
    } catch (err) {
        console.log(err);
    }

});

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const response = await userBLL.login(email, password);

        res.send(response)
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;