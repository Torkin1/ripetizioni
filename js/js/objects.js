/*eslint-env browser*/

class Person {
    name;
    width;
    
    constructor(){}
    writePerson(){
        document.write("Name: " + this.name + "<br>");
        document.write("Surname: " + this.surname + "<br>");
    }
}

class AgedPerson extends Person {
    age;
    constructor(){
        super();
        this.age = 7;
    }
    writePerson(){
        super.writePerson();
        document.write("Age: " + this.age + "<br>");
    }
}