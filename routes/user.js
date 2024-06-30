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
router.get('/user/:id', async (req, res) => {
   
    try{
        const user = await User.find({'_id':req.params.id})

        if(user){
            res.status(200).send({msg:"user found",user})
        }
        else{
            res.status(400).send({msg:"user not found",user}) 
        }
    }

    catch(err){
        res.status(500).send({err})
    }


});


//delete a user
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByIdAndDelete({'_id':id});
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });




module.exports = router