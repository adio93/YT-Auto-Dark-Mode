// ==UserScript==
// @name         YouTube Auto Dark Switch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Adrian Urbaniak
// @match        https://www.youtube.com/*
// @license MIT
// ==/UserScript==


var nightHour=18;
var dayHour=7;
var a=5; //interval in mins

function check() {
var hrs = new Date().getHours();
if (hrs >= nightHour || hrs < dayHour) {

    document.getElementsByTagName('html')[0].setAttribute('dark', 'true');
}
else
{
document.getElementsByTagName('html')[0].removeAttribute('dark');
}
setInterval(check,a*60000);
}


check();