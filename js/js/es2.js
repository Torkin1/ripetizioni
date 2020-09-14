/* eslint-env browser */

// 2_1
class FlyingObject{
    constructor(){}
    fly(){
        window.document.write("Sto Volando!");
    }
}

// 2_2
class Dragon extends FlyingObject{
    constructor(){
        super();
    }
    fly(){
        window.document.write("Sto volando e sputando fuoco!");
    }
}

// 2_3

class FlyingMachine extends FlyingObject{
    isOn;
    constructor(){
        super();
        isOn = false;
    }
    fly(){
        if (isOn/* == true */){
            super.fly();
        }
    }
    switchOnOff(){
        isOn = (isOn == true)? false : true;   // Equivalente a: if(isOn) {isOn = false} else {isOn = true}
    }
    
}