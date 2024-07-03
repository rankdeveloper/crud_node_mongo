const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const mongoose = require('mongoose')

router.get('/products', async (req, res) => {

    try {
        const allProducts = await Product.find({})
        res.status(200).send(allProducts)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
})

router.get('/products/:price', async (req, res) => {
    try {
        const products = await Product.find({ 'price': req.params.price })
        res.send(products)
        res.status(200)
    }
    catch (err) {
        res.send(err)
    }
})


//post method
router.post('/products/', async (req, res) => {
    try {
        const products = await Product.create(req.body)
        res.send(products)
        res.status(200)
    }
    catch (err) {
        res.send(err)
    }
})

//update method
router.put('/products', async (req, res) => {

    const productId = req.query._id
    const { name, price } = req.body
    if (!productId) {
        res.status(400).send({ msg: "Product id is required..." })
    }

    try {
        const products = await Product.findByIdAndUpdate(productId, { name, price })
        res.send(products)
        res.status(200)
    }
    catch (err) {
        res.send(err)
    }
})

//delete method
router.delete('/products', async (req, res) => {

    const productId = req.query._id

    if (!productId) {
        res.status(400).send({ msg: "Product id is required..." })
    }

    try {
        const products = await Product.findByIdAndDelete(productId)
        res.send({ msg: "Deleted", products })
        res.status(200)
    }
    catch (err) {
        res.send(err)
    }
})




module.exports = router