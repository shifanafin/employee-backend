

const mongoose = require("mongoose")
// const { AutoIncrementID } = require('@typegoose/auto-increment');


const UpdateSchema = new mongoose.Schema(
    {
        // _id:{type:Number},
       
        UpdateHeading:{ type:String,required:"true"},
        UpdateContent :{ type:String,required:"true"}
       


    }
)
// UpdateSchema.plugin(AutoIncrementID, {
//     field: '_id',
//     incrementBy: 1,
//     startAt: 1,
//     trackerCollection: 'updatesData',
//     trackerModelName: 'updatesData',
//     models:"updatesData"
   
//   });
module.exports = mongoose.model("updatesData",UpdateSchema);
