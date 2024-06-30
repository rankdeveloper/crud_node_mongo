const mongoose = require('mongoose')


function connectMongo(){
    mongoose.connect('mongodb://localhost:27017/nodeUser')
    .then(() => {
        console.log('mongo connected..')
    })
    .catch(err => console.log('not connected...'))
}

module.exports=connectMongo
