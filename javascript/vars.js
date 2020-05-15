'use strict';

// oldschool (bitte nicht mehr benutzen!)
var myVar = 'Hello World'; // global 
console.log(myVar);
var myVar = 'Was anderes';
console.log(myVar);

// up to date EcmaScript 6, bitte benutzen Sie diese Art!!!
let myLet = 'Hello World'; // lokal
console.log(myLet);
// let myLet = 'Was anderes'; // SyntaxError: Identifier 'myLet' has already been declared
myLet = 'Was anderes';
console.log(myLet);

// Konstanten
const MATH_PI = 3.14;
// MATH_PI = 2.14; // TypeError: Assignment to constant variable.