const mongoose =require("mongoose")
const userDepartment = require("./models/userDepartment")

mongoose.connect("mongodb+srv://shifanapred:shifanamongoose@cluster0.hnd9fur.mongodb.net/employeePrediction?retryWrites=true&w=majority"
).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("connection failed")
})

const createUser=async(req,res,next)=>{
    const newUser = new userDepartment({
        UserDepartment:req.body.UserDepartment,
        UserName:req.body.UserName,
        UserEmail:req.body.UserEmail,
        UserPassword:req.body.UserPassword,
        UserPassword2:req.body.UserPassword2,

        
    })
    const UserStore = await newUser.save();
    res.json(UserStore)
}

const getUser=async(req,res,next)=>
{
    let prod

  try{
    
     prod = await userDepartment.find({ })

  }
  catch(error)
  {
      return res.json({message:'save data deleted'})
  }


res.json(prod)
 
}
exports.createUser=createUser;
exports.getUser=getUser;