const mongoose =require("mongoose")
const HrFormAccount = require("./models/UserEmployeeForm")


mongoose.connect("mongodb+srv://shifanapred:shifanamongoose@cluster0.hnd9fur.mongodb.net/employeePrediction?retryWrites=true&w=majority"
).then(()=>{
    console.log("database connected")
}).catch(()=>{
    console.log("connection failed")
})

const createUser=async(req,res,next)=>{
    const newUser = new HrFormAccount({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email,
        Mobile:req.body.Mobile,
        DateOfBirth:req.body.DateOfBirth,
        Gender:req.body.Gender,
        Address:req.body.Address,
        Joining:req.body.Joining,
       Department:req.body.Department,
        Experience:req.body.Experience,
        Salary:req.body.Salary

        
    })
    const UserStore = await newUser.save();
    res.json(UserStore)
}

const getUser=async(req,res,next)=>
{
    let prod

  try{
    
     prod = await HrFormAccount.find({ })

  }
  catch(error)
  {
      return res.json({message:'save data deleted'})
  }


res.json(prod)
 
}
exports.createUser=createUser;
exports.getUser=getUser;