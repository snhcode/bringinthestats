var xhr = new XMLHttpRequest();

xhr.open("GET", "http://census.soe.com/get/ps2-beta/character/5428010618035740161?c:resolve=item_list&c:show=stats.play_time.weapon,stats.kills.weapon", false)
xhr.send();

var JSON = JSON.parse(xhr.responseXML)
console.log(JSON);