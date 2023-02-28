const express = require('express')
const ProductRouter = express.Router();

ProductRouter.get('/', (req,res) => {
    res.send('prodict router')
    console.log('prodcut router')
})

ProductRouter.get('/keels', (req, res) => {
    res.send('product keels')
})

ProductRouter.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`name ${id}`) 
})

ProductRouter.post('/', (req,res) => {

    // let name =  req.body.name;
    // let age = req.body.age;
    // let addrees = new Date()
    let {name, age, addrees = new Date()} = req.body

    res.status(200).send(
        {
            status: "Sucess",
            data: `${name} and ${age} and ${addrees}`
        }
    )
})

module.exports = ProductRouter