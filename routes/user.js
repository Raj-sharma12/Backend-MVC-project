const express=require('express');
const router=express.Router();
const {getAllUsers,getUserById,createNewUser,updateUserById, deleteUserById} = require('../controllers/user');
const { create } = require('../models/user');

// router.get('/api/users',async (req,res) =>{
//     const allDbUsers=await User.find({});
//     res.status(200).json(allDbUsers);
// })

router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/',createNewUser);

router.patch('/:id',updateUserById);

router.delete('/:id',deleteUserById);

module.exports=router;




