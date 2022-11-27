const mongoose =require("mongoose")
const userUpdate = require("./models/userUpdate")

mongoose.connect("mongodb+srv://shifanapred:shifanamongoose@cluster0.hnd9fur.mongodb.net/employeePrediction?retryWrites=true&w=majority"
).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("connection failed")
})

const createUser=async(req,res,next)=>{
    const newUser = new userUpdate({
       
        
        UpdateHeading:req.body.UpdateHeading,
        UpdateContent :req.body.UpdateContent
        
        
    })
    const UserStore = await newUser.save();
    res.json(UserStore)
}

const getUser=async(req,res,next)=>
{
    let prod

  try{
    
     prod = await userUpdate.find({})

  }
  catch(error)
  {
      return res.json({message:'save data deleted'})
  }


res.json(prod)
 
}

const deleteUser=async(req,res,next)=>
{
    // let rem 
    try{
        const _id = req.params.id;
        const result= await userUpdate.findByIdAndDelete(_id)
        // rem= await userUpdate.delete({})
        if(!result)
        {
            res.json({
                status:"Success",
                message:"record deleted sucessfully"
            })
        }
        else{
            res.json({
                status:"failed",
                message:"record not deleted"
            })
        }
    }

    catch(error)
    {
        return res.json({message:'not deleted'})

    }
    res.json(prod)
}


exports.createUser=createUser;
exports.getUser=getUser;
exports.deleteUser=deleteUser;
