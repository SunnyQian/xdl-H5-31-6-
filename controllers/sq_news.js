//定义新闻对应的路由器
var news = {};

//定义路由方法
news.news = function (req,res){ 
	res.render('sq_news');
};

news.newsJk = function (req,res){ 
	res.render('sq_news_childpage_jk');
};

news.newsTj = function (req,res){ 
	res.render('sq_news_childpage_tj');
};

news.newsTj3 = function (req,res){ 
	res.render('sq_news_childpage_tj_3');
};

news.newsWs = function (){ 
	res.render('sq_news_childpage_ws')
};

module.exports = news;

