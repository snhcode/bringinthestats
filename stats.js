var request = require('request');

var results = { };
request({ url: 'http://census.soe.com/s:bringinthestats/get/ps2-beta/outfit?alias=snh', qs: { 'c:resolve': 'member' } }, function(err, res) {
		results.snh = JSON.parse(res.body);
	});

console.log(request.snh);
​