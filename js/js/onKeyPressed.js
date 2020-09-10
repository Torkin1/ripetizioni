/*eslint-env browser*/

function onKeyPressed(e){
    window.alert("Pressed key: " + String.fromCharCode(e.which));
}
function onMousePressed(e){
    window.alert("Pressed mouse button: " + ((e.button == 2)? "RMB" : "LMB"));
}
window.onkeypress = onKeyPressed;
window.onclick = onMousePressed;
