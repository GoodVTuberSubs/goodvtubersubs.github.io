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
    "\"This is your reminder that your favorite VTuber might be streaming right now, and YouTube probably forgot to notify you. Again.\"",
    "「スーパーチャットターイム」"
 ];

 function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    document.getElementById('target').innerHTML = titles[i];
 }

 window.onload = function() {
    newTitle();
 }