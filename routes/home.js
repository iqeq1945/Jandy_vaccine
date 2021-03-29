var express = require('express');
var router = express.Router();
var StatData = require('./vaccine');

router.get('/', function(req, res, next){
    StatData((err, {stat}={})=>{
        if(err){
            console.log("error!");
            return res.send({err});
        }
        return res.render('index',{stat:stat});
    })
});

module.exports = router;