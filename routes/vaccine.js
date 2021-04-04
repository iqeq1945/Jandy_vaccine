// routes/vaccine.js

var request = require('request');

const StatData = (callback) =>{
    //console.log("통계데이터!!!");

    const url = 'http://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=10';
    const key = 'tNoct9hJ2VkbcD8RcdNsB8eVlJRGVALc80SKwRJu0jikOI5VbSTAXim5O07jvbEk7wTGmescTrqLsRd5Xz6WOw%3D%3D';
    const api_url = url+'&serviceKey='+key;

    request(api_url,function(err,res,body){
        callback(undefined,{
            stat:body
        });
    });
}

const CenterData = (callback) =>{
    //console.log("센터데이터!!!");

    const url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10';
    const key = 'tNoct9hJ2VkbcD8RcdNsB8eVlJRGVALc80SKwRJu0jikOI5VbSTAXim5O07jvbEk7wTGmescTrqLsRd5Xz6WOw%3D%3D';
    const api_url = url+'&serviceKey='+key;

    request(api_url,function(err,res,body){
        callback(undefined,{
            center:body
        });
    });
}

module.exports = StatData;
module.exports = CenterData;