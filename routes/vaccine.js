var express = require('express');
var router = express.Router();
var request = request(require);
router.get('/', function(req, res, next){
    res.render('index');
})

module.exports = router;