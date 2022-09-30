const mongoose =require("mongoose")
const User = require("./models/User")

mongoose.connect("mongodb+srv://shifanact:DpSSgyB8tLoh9G4U@cluster0.ninjz01.mongodb.net/products_test?retryWrites=true&w=majority"
).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("connection failed")
})

const createUser=async(req,res,next)=>{
    const newUser = new User({
        userName:req.body.userName,
        userPassword:req.body.userPassword,
        userAge:req.body.userAge

        
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