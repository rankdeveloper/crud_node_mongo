const mongoose = require('mongoose');
const Product = require('./models/product');


function connectMongo(){
    mongoose.connect('mongodb://localhost:27017/nodeUser')
    .then(() => {
        console.log('mongo connected..')
    })
    .catch(err => console.log('not connected...'))


    // mongoose.connect('mongodb://localhost:27017/nodeUser')
    // .then(async () => {
    //     try {
    //         const products = await Product.find({});
    //         console.log('Products:', products);
    //     } catch (err) {
    //         console.log('Error:', err);
    //     } finally {
    //         mongoose.connection.close();
    //     }
    // })
    // .catch(err => console.log('Connection error:', err));

}

module.exports=connectMongo
