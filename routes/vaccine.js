var request = require('request');

const StatData = (callback) =>{
    console.log("통계데이터!!!");

    const url = 'http://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=10';
    const key = 'tNoct9hJ2VkbcD8RcdNsB8eVlJRGVALc80SKwRJu0jikOI5VbSTAXim5O07jvbEk7wTGmescTrqLsRd5Xz6WOw%3D%3D';
    const api_url = url+'&serviceKey='+key;

    request(api_url,function(err,res,body){
        callback(undefined,{
            stat:body
        });
    });
}

module.exports = StatData;