const mongoose = require("mongoose")


const productSchema = new mongoose.Schema(
    {
        userName:{ type:String,require:true},
        userPassword:{type:String,require:true},
        userAge:{type:String,require:true}


    }
)

module.exports = mongoose.model("User",productSchema);