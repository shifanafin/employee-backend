const mongoose = require("mongoose")


const productSchema = new mongoose.Schema(
    {
        UserName:{ type:String,require:true},
        UserEmail:{type:String,require:true},
        UserPassword:{type:String,require:true},
        AdminGender:{type:String,require:true},
        DateofBirth:{type:Number,require:true},
        number:{type:String,require:true},
        UserAddress:{type:String,require:true}


    }
)

module.exports = mongoose.model("adminLogin",productSchema);


