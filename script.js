var titles = [
    "\"Good subs shouldn't be hard to come by.\"",
    "\"Imagine if I made the site in Aegisub.\"",
    "\"Also follow @BadVTuberSubs!\"",
    "\"I think it's about time we have a TED talk on VTubers.\"",
    "\"Watch that CPS counter, yo\"",
    ":AyameDespair:",
    "\"These are the alternatives you are looking for.\""
 ];

 function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    document.getElementById('target').innerHTML = titles[i];
 }

 window.onload = function() {
    newTitle();
 }