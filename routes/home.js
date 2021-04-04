// routes/home.js
var express = require('express');
var router = express.Router();
var StatData = require('./vaccine');
var CenterData = require('./vaccine');

router.get('/', function(req, res, next){
    StatData((err, {stat}={})=>{
        if(err){
            console.log("error!");
            return res.send({err});
        }
        const json = JSON.parse(stat);
        return res.render('index',{stat:json});
    })
});

router.get('/centers',function(req,res,next){
    CenterData((err, {center}={})=>{
        if(err){
            console.log("error!");
            return res.send({err});
        }
        const json = JSON.parse(center);
        console.log(center);
        return res.render('center',{center:json});
    })
});

module.exports = router;