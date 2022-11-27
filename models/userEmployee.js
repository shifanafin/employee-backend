

const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema(
    {
        UserDepartment:{ type:String,require:true},
        UserName:{ type:String,require:true},
        UserEmail:{type:String,require:true},
        UserPassword:{type:String,require:true},
        UserPassword2:{type:String,require:true},
       


    }
)

module.exports = mongoose.model("employeeLogin",employeeSchema);