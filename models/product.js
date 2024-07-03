const mongoose = require('mongoose')

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

const Product = mongoose.model('product' , productSchema)
module.exports =  Product