var express = require('express');
var router = express.Router();
const User =require('./UserModel')
/* GET home page. */
router.get('/', function(req, res, next) {
 User.find({},function (err, data) {
    if (err) {
      res.status(500).json({ status: false, message: err });
    } else {
      res.status(200).json({ status: true, data, message: "Data found!" });
      console.log(data)
    }
  })
});

router.post('/adduser', async(req, res, next)=>{
if( await userExists(req.body.email)){
  res.status(409).json({error:"email alreday exists"})
}
else{
  console.log(req.body)
  const user = new User(req.body);
  user.save(err =>{
      if(err){
          res.send(err)
      }else{
          res.send({message:"Successful Registered"})
      }
  })
}
})
  
const userExists=async(email)=>{
const user = await User.findOne({email:email.toLowerCase().trim()})
if(user){
  return true
}else{
  return false
}
  }

////////////login/////////////////////////
router.post('/login', function(req, res, next) {
  User.findOne({email:req.body.email ,password:req.body.password}).then(data=>{
if(data){
  res.status(200).json(data)
}else{
  res.status(401).json({error:"incorrect email or password"})
}
  }).catch(err=>{
    res.status(500).json({error:err.message})
  })
    
  
})

module.exports = router;