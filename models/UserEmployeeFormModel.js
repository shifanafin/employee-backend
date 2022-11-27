const mongoose = require("mongoose")


const EmployeeSchema = new mongoose.Schema(
    {
        FirstName:{ type:String,require:true},
        LastName:{type:String,require:true},
        Email:{type:String,require:true},
        Mobile:{type:Number,require:true},
        DateOfBirth:{type:String,require:true},
        Gender:{type:String,require:true},
        Address:{type:String,require:true},
        Joining:{type:String,require:true},
       Department:{type:String,require:true},
        Experience:{type:String,require:true},
        Salary:{type:String,require:true}


    }
)

module.exports = mongoose.model("EmployeeForm",EmployeeSchema);


