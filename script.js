var titles = [
    "Good subs shouldn't be hard to come by.",
    "Imagine if I made the site in Aegisub.",
    "Also follow @BadVTuberSubs!",
    "I think it's about time we have a TED talk on VTubers.",
    "Watch that CPS counter, yo",
    '<img src="/img/ayamedespair.png" alt=":AyameDespair:" title=":AyameDespair:">',
    "These are the alternatives you are looking for.",
    "Keep an eye out for when a translator does a translation stream!",
    "「どこ見てんだよ？」",
    "Yes, good subs do exist.",
    "It doesn't hurt to have higher standards.",
    "This is your reminder that your favorite VTuber is streaming right now,<br/>and YouTube forgot to notify you.<br/>Again.",
    "「スーパーチャットターイム」",
    '<img src="/img/lunagalaxybrain.png" alt=":LunaGalaxyBrain:" title=":LunaGalaxyBrain:">',
    "No translation is nor can be perfect; only good enough.",
    "You can't just leave 'yabai' in the subs because 'yabai' isn't an English word.<br/>Translate it.",
    "Good translation isn't just about converting words,<br/>but conveying the same meaning and feeling to another language.",
    "Getting your favorite VTuber to notice your translations has got to be the *biggest* flex ever.<br/>Screw the ad money.",
    "i wish all subbers a very pleasant evening",
    "Are translation hackathons a thing?<br/>Like, multiple translators trying to find the best way to translate a literary work?",
    "Shoutout to subbing teams using Git to update and QC Aegisub files.",
    "If you have some free time, try reading the Additional Readings and Materials!",
    '<img src="/img/cocookite.gif" width="64px" alt=":CocoOkite:" title="OKITE OKITE OKITE">',
    '<img src="/img/cps.png" width="64px" alt=":AegisubCPSred:" title="I TOLD YOU TO WATCH THE CPS">',
    "It's always a good idea to get a proofreader or an editor! The more eyes to see the final project before upload, the better!"
];
var icons = [
   '<img src="icon.png" class="animate__animated animate__zoomIn animate__fadeIn" />',
   '<img src="icon_niji.png" class="animate__animated animate__zoomIn animate__fadeIn" />',
   '<img src="icon_voms.png" class="animate__animated animate__zoomIn animate__fadeIn" />',
   '<img src="icon_ai.png" class="animate__animated animate__zoomIn animate__fadeIn" />'
];
function newTitle () {
   var i = (Math.random() * titles.length) | 0;
   document.getElementById('target').innerHTML = titles[i];
}

function newIcon () {
   var ii = (Math.random() * icons.length) | 0;
   document.getElementById('icon').innerHTML = icons[ii];
}

 window.onload = function() {
    newTitle();
    newIcon();
 }