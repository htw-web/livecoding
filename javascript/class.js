let myLiteral = {
    // ihr Object INhalt
    // empfehlenswerte Variante
};

class Parent {
    // Vererbung
    constructor() {

    }
}

// EcmaScript neue Variante für Konstruktoren 
class MeinObjekt extends Parent {

    constructor(x) {
        super(); // Parent constructor wird damit gecallt 
        this.something = x;
    }

}

let myObject = new MeinObjekt(3);

console.log(myObject.something);

myObject.newProperty = 'oh';

console.log(myObject.newProperty)