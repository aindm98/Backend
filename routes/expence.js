var express = require('express');
var router = express.Router();
var expence =require('./expencemodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Insert expence
router.post('/insert', function(req, res) {
    console.log(req.body)
    const Expence = new expence(req.body);
    Expence.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successful Registered"})
        }
    })
    
     
});

module.exports = router;