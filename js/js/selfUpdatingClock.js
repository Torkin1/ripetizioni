/*eslint-env browser*/

var target = window.document.getElementById("pClock");

function updateClock(){
    target.innerHTML = (new Date()).toLocaleTimeString();
    // window.setTimeout(updateClock, 1000);
}
updateClock();
window.setInterval(updateClock, 1000);
// window.setInterval(updateClock, 1000);

