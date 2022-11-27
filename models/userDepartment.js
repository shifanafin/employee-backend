

const mongoose = require("mongoose")


const departmentSchema = new mongoose.Schema(
    {
        UserDepartment:{ type:String,require:true},
        UserName:{ type:String,require:true},
        UserEmail:{type:String,require:true},
        UserPassword:{type:String,require:true},
        UserPassword2:{type:String,require:true},
       


    }
)

module.exports = mongoose.model("departmentLogin",departmentSchema);