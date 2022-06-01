var express = require('express');
var router = express.Router();
var patient =require('./PatientModel');

router.post('/insert', function(req, res) {
    console.log(req.body)
    const NewPatient = new patient(req.body);
    NewPatient.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successful Registered"})
        }
    })
    
     
});
router.get("/display", function (req, res) {
    patient.find({},function (err, data) {
         if (err) {
           res.status(500).json({ status: false, message: err });
         } else {
           res.status(200).json({ status: true, data, message: "Data found!" });
           console.log(data)
         }
       })
     }); 

     router.delete("/delete/:_id", function (req, res) {
        const { _id } = req.params;
        patient.findOneAndDelete({ _id }, function (err, data) {
          if (err) {
            res.status(500).json({ status: false, message: err.toString() });
          } else {
            res
              .status(200)
              .json({ status: true, data, message: "User deleted successfully!" });
          }
        })
      });
    

     router.put("/update/:_id", function (req, res) {
        const { _id } = req.params;
        patient.findOneAndUpdate({ _id }, req.body, function (err, data) {
          if (err) {
            res.status(500).json({ status: false, message: err.toString() });
          } else {
            res.status(200)
              .json({ status: true, data, message: "User updated successfully!" });
          }
        });
      }); 

module.exports=router;