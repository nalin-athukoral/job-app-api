const express = require('express')

const UseRrouter = express.Router();

UseRrouter.get('/', (req,res) =>{
    res.send('hello user router')
})


module.exports = UseRrouter;