const express = require('express')
const router = express.Router()
const productModel = require('../models/product')
const mongoose = require('mongoose')

router.get('/products' , async (req , res) => {
    res.send("prodcuts")

    // console.log('products page')
    // try{
    //     const products = await productModel.find({})
    //     res.send(products)
    //     // res.status(200)
    // }
    // catch(err){
    //     res.send(err)
    // }
    productModel.find({})
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/products/:price' , async (req , res) => {
    try{
        const products = await productModel.find({'price':req.params.price})
        res.send(products)
        res.status(200)
    }
    catch(err){
        res.send(err)
    }
})

module.exports =router