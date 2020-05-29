"use strict";


// automatisch das erste Element
document.querySelector("h1").textContent = "Hallo";
// Inhalt des Knotens unten rechts auf "Hi!" setzen
document.querySelector("p").childNodes[1].textContent = "Hi!";
// das p-Element nicht anzeigen
document.querySelector("p").style.display = "none";
// ein HTML Element mit ID manipulieren, d.h. als Block-Element anzeigen
document.querySelector("#demo").style.display = "block";

let myObj = {
    "name": "John",
    "age": 31,
    "city": "New York"
};
let myJSON = JSON.stringify(myObj);
localStorage.setItem("textJSON", myJSON);


// moderne Technologien von JavaScript EcmaScript 6 
let text = localStorage.getItem("textJSON");
let obj = JSON.parse(text);

document.querySelector('#demo').innerHTML = obj.name;