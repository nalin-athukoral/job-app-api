require('dotenv').config()
const express = require('express')
const UseRrouter = require('./Routes/User/User')
const ProductRouter = require('./Routes/Product/Product')
const bodyParser = require('body-parser')
const winston = require('express-winston')

const app = express()

const PORT = process.env.PORT

app.use(winston.logger({

}))

app.use(express.json())

//  

app.use('/user', UseRrouter)
app.use('/product', ProductRouter)


app.get('/', (req,res) => {
    res.send('asdasdas')
})


app.get('/name', (req,res) => {
    console.log('Get request ');
    res.send('hello')
})


app.listen(PORT, ()=> {
    console.log(`port no ${PORT}`);
    
})
