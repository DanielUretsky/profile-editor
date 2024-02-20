const express = require('express');
const router = express.Router();
const tokenAuthentication = require('../configs/tokenAuthentication');

router.get('/test',tokenAuthentication, async(req, res) => {
    res.send("succes")
})

module.exports = router;
