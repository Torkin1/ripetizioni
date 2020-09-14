/* eslint-env browser */

var obj = null,
    objFromPointerX,
    objFromPointerY;
var imgCase; 

function onMouseDown(event){
    obj = event.target;
    // Because object position is calculated from is top-left corner, we need to calculate objFromPointer offsets in order to prevent jump effect
    objFromPointerX = event.pageX - obj.offsetLeft;
    objFromPointerY = event.pageY - obj.offsetTop;
}

function onMouseMove(event){    // eslint-disable-line no-unused-vars
    // until we click on the object, obj remains null
    if (obj != null){
        obj.style.left = (event.pageX - objFromPointerX) + "px";
        obj.style.top = (event.pageY - objFromPointerY) + "px";
    }
}

function onMouseUp(){   // eslint-disable-line no-unused-vars
    obj = null;
}

function onLoad(){  // eslint-disable-line no-unused-vars
    imgCase = window.document.getElementById("imgCase");
    imgCase.style.setPosition = "absolute";
    imgCase.ondragstart = function(){ return false; };
    imgCase.onmousedown = onMouseDown;
}

