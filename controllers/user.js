// import a model
const User=require('../models/user');
// create a routehandler
async function getAllUsers(req,res){
    const allDbUsers = await User.find({}); //{} symbol for all users
const html=`
    <ul>
    ${allDbUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
}

async function getUserById(req,res){
    const id= req.params.id;
    // const user = users.find((user) => user.id ===id);
   const user = await User.findById(id);
    
    return res.send(
        `<li>${user.first_name}</li>`
    )
}

async function createNewUser(req,res){
    const body=req.body;
 if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || ! body.job_title){
        return res.status(400).json({msg:"all fields are required!"});
    }
     // create a user in monngodb database
    const result = User.create({
       first_name:body.first_name,
       last_name:body.last_name,
       email:body.email,
       gender:body.gender,
       job_title:body.job_title,
     });

     console.log('result',result);
     res.status(201).json({msg:"user created successfully!"});
}
async function updateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{first_name:"Diksha"});
    return res.status(207).json({
     msg:"Update successfully!"
    })}
    async function deleteUserById(req,res){
        await User.findByIdAndDelete(req.params.id);
        return res.status(202).json({
            msg:"users deleted successfully!"
        })}

module.exports={
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,deleteUserById
}