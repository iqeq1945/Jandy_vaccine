var express = require('express');
var router = express.Router();
var request = require('request');

const url = 'http://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=10';
const key = 'tNoct9hJ2VkbcD8RcdNsB8eVlJRGVALc80SKwRJu0jikOI5VbSTAXim5O07jvbEk7wTGmescTrqLsRd5Xz6WOw%3D%3D';
const api_url = url+'&serviceKey='+key;



router.get('/', function(req, res, next){
    request(api_url,function(err,res,body){
        console.log(body);
    });
    res.render('index');
});

module.exports = router;