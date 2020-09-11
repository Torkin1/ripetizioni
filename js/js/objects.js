/*eslint-env browser*/

// var personNameJohn = "john";
// var personHeigthJohn = 180;
// var personWeigthJohn = 80;

// function talkToPerson(person, ...){ ... };

class Person {
    // properties
    name;
    surname;
    
    // methods
    constructor(){}
    writePerson(){
        document.write("Name: " + this.name + "<br>");
        document.write("Surname: " + this.surname + "<br>");
    }
}

class AgedPerson extends Person {
    age;    // nuova proprietà aggiunta dal sottotipo
    constructor(){
        super();
        this.age = 7;
    }
    writePerson(){
        super.writePerson();
        document.write("Age: " + this.age + "<br>");
    }
}