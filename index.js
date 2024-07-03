const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/user')
const productRouter = require('./routes/product')
const connectMongo = require('./connection')

connectMongo()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/' , router)
app.use('/' , productRouter)


app.listen(3000 , () => {
    console.log("server is running at port : 3000")
})