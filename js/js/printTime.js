/* eslint-env browser */

// prints time in UTC format

var now = new Date();
var localTime = now.toString();
var utcTime = now.toGMTString();

var clock = new Array();

clock.push(now.getHours());
clock.push(now.getMinutes());
clock.push(now.getSeconds());

document.write("<h1>");
for (var i = 0; i < clock.length; i ++){
    document.write(clock[i]);
    if (i != clock.length - 1){
        document.write(":");
    }
}
document.write("</h1>");
document.write("<p> local: " + localTime + "</p>");
document.write("<p> UTC: " + utcTime + "</p>");
