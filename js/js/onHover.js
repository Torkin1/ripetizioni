/*eslint-env browser*/

var newWindow;

function onMouseOverLink(){
    window.document.getElementById("desc").innerHTML = "creates a small window with no toolbar or status line";
}
function onMouseOutLink(){
    window.document.getElementById("desc").innerHTML = null;
}

function onClickClose(){
    newWindow.close();
}

function onMouseClickLink(){
    // creo nuova finestra
    newWindow = window.open("",        // URL
                "newWindow",           // Name
                "width=400,height=100,toolbar=0,status=0,location=0" // Options
               );
    
    // Creo tutti gli elementi html
    var divClose = newWindow.document.createElement("DIV");
    var pClose = newWindow.document.createTextNode("Hello! Click the button to close the window");
    var bClose = newWindow.document.createElement("BUTTON");
    bClose.onclick = onClickClose;  // senza le ()
    bClose.innerHTML = "Close";
    
    // Iniettare gli elementi html nel documento della nuova finestra
    var bodyClose = newWindow.document.getElementsByTagName("BODY")[0];
    divClose.appendChild(pClose);
    divClose.appendChild(newWindow.document.createElement("BR"));
    divClose.appendChild(bClose);
    bodyClose.appendChild(divClose);    
}