var express = require('express');
var router = express.Router();
var patient=require("./PatientModel");

router.get("/:_id", function (req, res) {
    const {_id} = req.params;
    patient.findOne({_id}, function (err, data) {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else {
        res.status(200).json({ status: true, data, message: "Data found!" });
        console.log(data)
      }
    });
  });
  
module.exports = router;