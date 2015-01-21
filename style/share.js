document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideToolbar');
var shareData = {  
	"imgUrl": "http://yzldwl.cw169.bizcn.com/images/logo.jpg", 
	"timeLineLink": "http://yzldwl.cw169.bizcn.com/index.html",
	"tTitle": "京杭明珠-微官网",
	"tContent": "欢迎关注京杭明珠微信官方网站",
	"callBack":function(){}
};
WeixinJSBridge.on('menu:share:appmessage', function (argv) {
	WeixinJSBridge.invoke('sendAppMessage', { 
		"img_url": shareData.imgUrl,
		"img_width": "640",
		"img_height": "640",
		"link": shareData.timeLineLink,
		"desc": shareData.tContent,
		"title": shareData.tTitle
	}, function(res){(shareData.callback)();});
});
WeixinJSBridge.on('menu:share:timeline', function (argv) {
	WeixinJSBridge.invoke('shareTimeline', {
		"img_url": shareData.imgUrl,
		"img_width": "640",
		"img_height": "640",
		"link": shareData.timeLineLink,
		"desc": shareData.tContent,
		"title": shareData.tTitle
	}, function(res){(shareData.callback)();});
});
WeixinJSBridge.on('menu:share:weibo', function (argv) {
	WeixinJSBridge.invoke('shareWeibo', {
		"content": shareData.tContent,
		"url": shareData.timeLineLink,
	}, function(res){(shareData.callback)();});
});
}, false)


