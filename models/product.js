const mongoose = require('mongoose')
const connectMongo = require('../connection')

connectMongo()
const productSchema = mongoose.Schema({
    item:{
        type:String ,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const productModel = mongoose.model('product' , productSchema)
module.exports =  productModel