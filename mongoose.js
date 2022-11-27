const mongoose =require("mongoose")
const User = require("./models/User")

mongoose.connect("mongodb+srv://shifanapred:shifanamongoose@cluster0.hnd9fur.mongodb.net/employeePrediction?retryWrites=true&w=majority"
).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("connection failed")
})

const createUser=async(req,res,next)=>{
    const newUser = new User({
        
        UserName:req.body.UserName,
        UserEmail:req.body.UserEmail,
        UserPassword:req.body.UserPassword,
        AdminGender:req.body.AdminGender,
        DateofBirth:req.body.DateofBirth,
        number:req.body.number,
        UserAddress:req.body.UserAddress,
        
    })
    const UserStore = await newUser.save();
    res.json(UserStore)
}

const getUser=async(req,res,next)=>
{
    let prod

  try{
    
     prod = await User.find({ })

  }
  catch(error)
  {
      return res.json({message:'save data deleted'})
  }


res.json(prod)
 
}
exports.createUser=createUser;
exports.getUser=getUser;