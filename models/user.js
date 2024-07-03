const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    emailId: {
        type: String,
        required: true
    }

})

const User = mongoose.model('user', UserSchema)
module.exports =User