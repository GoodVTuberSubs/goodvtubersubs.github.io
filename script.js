var titles = [
    "\"Good subs shouldn't be hard to come by.\"",
    "\"Imagine if I made the site in Aegisub.\"",
    "\"Also follow @BadVTuberSubs!\"",
    "\"I think it's about time we have a TED talk on VTubers.\"",
    "\"Watch that CPS counter, yo\"",
    ":AyameDespair:",
    "\"These are the alternatives you are looking for.\"",
    "\"Keep an eye out for when a translator does a translation stream!\"",
    "「どこ見てんだよ？」",
    "\"Yes, good subs do exist.\"",
    "\"It doesn't hurt to have higher standards.\"",
    "\"This is your reminder that your favorite VTuber might be streaming right now,<br/>and YouTube probably forgot to notify you.<br/>Again.\"",
    "「スーパーチャットターイム」",
    "\"/gvs is the hotstring\"",
    ":LunaGalaxyBrain:",
    "\"No translation is nor can be perfect; only good enough.\"",
    "\"You can't just leave 'yabai' in the subs because 'yabai' isn't an English word.<br/>Translate it.\"",
    "\"Good translation isn't just about converting words,<br/>but conveying the same meaning and feeling to another language.\"",
    "\"Getting your favorite VTuber to notice your translations has got to be the *biggest* flex ever.<br/>Screw the ad money.\"",
    "\"i wish all subbers a very pleasant evening\"",
    "\"Are translation hackathons a thing?<br/>Like, multiple translators trying to find the best way to translate a literary work?\"",
    "\"Shoutout to subbing teams using Git to update and QC Aegisub files.\"",
    "\"If you have some free time, try reading the Additional Readings and Materials!\""
 ];

 function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    document.getElementById('target').innerHTML = titles[i];
 }

 window.onload = function() {
    newTitle();
 }