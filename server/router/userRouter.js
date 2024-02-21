const express = require('express');
const router = express.Router();
const tokenAuthentication = require('../configs/tokenAuthentication');

const usersBll = require('../BLL/usersBLL');

router.get('/test',tokenAuthentication, async(req, res) => {
    res.send("succes")
});

router.get('/purchases', async(req, res) => {
    
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const response = await usersBll.getOneUser(id);
    
    res.send(response);

})

module.exports = router;
