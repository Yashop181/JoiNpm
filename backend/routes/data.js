const express = require('express');
const router = express.Router();
const Data = require('../models/Data');
const validateData = require('../validation/dataValidation');

router.post('/add', async(req,res)=>{
    const {error} = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const {name,value} = req.body;
    const data = new Data({name,value});
    await data.save();
    res.send(data);
})
module.exports = router;