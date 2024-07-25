const mongoose=require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
    },
    job_title:{
        type:String,
    }
},{timestamps:true});

// convert these schema into model 
const User= mongoose.model("user",userSchema);
module.exports = User;