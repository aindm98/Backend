const mongoose = require("mongoose");
const ExpenseSchema= new mongoose.Schema({
   perday:{
        type:String,
       
    },
    
    otherCharges:[{
        m:{
            type:Array,
            required:true,
        },
        billamount:{
            type:Number,
            required:true,
        },
    }],
    
    patient:{
        type:String,
        ref:"NewPatient",
    },
})
module.exports=mongoose.model("expense",ExpenseSchema);