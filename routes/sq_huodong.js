var express = require('express');
var router = express.Router();

//加载活动控制器
var huodong = require('../controllers/sq_huodong');

//活动首页
router.get('/',huodong.huodong);

router.get('/huodong2',huodong.huodong2);

router.get('/huodong3',huodong.huodong3);

router.get('/huodongUser',hudong.huodongUser);

module.exports = router;

