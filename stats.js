var xhr = new XMLHttpRequest();

xhr.open("GET", "https://census.soe.com/s:bringinthestats/get/ps2-beta/outfit?alias=snh&c:resolve=member", false);
xhr.send();

console.log(xhr.status);

var JSON = JSON.parse(xhr.responseXML);

//xhr.open("GET", "http://census.soe.com/s:bringinthestats/get/ps2-beta/character/5428010618035740161?c:resolve=item_list&c:show=stats.play_time.weapon,stats.kills.weapon", false);
//xhr.send();

console.log(JSON);
​