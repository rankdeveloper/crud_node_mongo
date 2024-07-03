const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../models/user')


router.get('/', (req, res) => {
    res.send('home route')
})


//get all users
router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


//post method
router.post('/', async (req, res) => {
    const { name, phoneNo, emailId } = req.body

    try {
        const user = new User({ name, phoneNo, emailId })
        await user.save()
        res.status(200)
        res.send("inserted..")
    }
    catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
})



//getting a user
router.get('/user', async (req, res) => {
    const { _id } = req.query;
    if(!_id){
       return res.status(400).send({msg:"_id is required.."})
    }
    try{
        const user = await User.findOne({_id})

        if(user){
          return  res.status(200).send({msg:"user found",user})
        }
        else{
            return res.status(400).send({msg:"user not found",user}) 
        }
    }

    catch(err){
        return res.status(500).send({err})
    }


});


//delete a user
router.delete('/user', async (req, res) => {
    const { _id } = req.query;
    if(!_id){
        res.status(400).send({msg:"Id is required.."})
    }

    try {
      const user = await User.findByIdAndDelete({_id});
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });




module.exports = router