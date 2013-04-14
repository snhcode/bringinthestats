$(document).ready(function() {
    var alias = $('#alias').val();
        if(alias == ''){
            $('#response').html("Alright, we'll just use SnH.");
            alias = "snh";
        } else {
            $('#response').html("Gauss SAW KPH for "+alias+" coming up.");
        
            var url =  "http://census.soe.com/s:bringinthestats/get/ps2-beta/outfit?alias="+alias+"&c:resolve=member";
            $.getJSON(url + "&callback=?", function(json) {
                console.log(json);

                // Storage variables for the SAW in this test.
                var timeCount = 0;
                var killCount = 0;
                var scoreCount = 0;      
                var charCount = 0;
                var outfitName;

                // For each member of the outfit, get the weapon time and kills data we want.
                var n;
                for (n=0; n < json.outfit_list[0].members.length; n++) {
                    $.getJSON("http://census.soe.com/get/ps2-beta/character/" + json.outfit_list[0].members[n].character_id + "?c:resolve=item_list&c:show=stats.play_time.weapon,stats.kills.weapon,stats.score.weapon" + "&callback=?", function(jsonCharacter) {
                        // Test case: Return accumulated Gauss SAW kills.
                        if (jsonCharacter.character_list[0] != null && jsonCharacter.character_list[0].stats.play_time.weapon[78] != null) {
                            console.log(jsonCharacter);
                            timeCount += parseInt(jsonCharacter.character_list[0].stats.play_time.weapon[78].value);
                            charCount += 1;
                        }
                        if (jsonCharacter.character_list[0] != null && jsonCharacter.character_list[0].stats.kills.weapon[78] != null) {
                            killCount += parseInt(jsonCharacter.character_list[0].stats.kills.weapon[78].value);
                        }
                        if (jsonCharacter.character_list[0] != null && jsonCharacter.character_list[0].stats.score.weapon[78] != null) {
                            scoreCount += parseInt(jsonCharacter,character_list[0].stats.score.weapon[78].value);
                        }
                        console.log(timeCount/3600);
                        console.log(killCount);
                        charCount = json.outfit_list[0].members.length;
                        console.log(charCount);
                        outfitName = json.outfit_list[0].name;
                        console.log(outfitName);
                        var timeHour = timeCount/3600/charCount;
                        var avgKills = (killCount/charCount);
                        var killsPerHour = (timeHour/avgKills);
                        var scorePerHour = (timeHour/scoreCount);
                        console.log(avgKills);
                        console.log(killsPerHour);
                        console.log(scorePerHour);
                    });
                }
        });
    };
});