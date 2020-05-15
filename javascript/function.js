// Klassische Variante
function myFunction(a, b) {
    return a+b;
}

console.log(myFunction(3,4));

// Anonyme Variante
const addition = function (a, b) {
    return a+b;
}

console.log(addition(6,7));

// neue variante Arrow Function => mit Codeblock!

const add = (a, b) => {
    return a + b;
}

console.log(add(9,0));

// kürzere variante, für sehr kurze funktionen, mit 1 Statement

const add2 = (a, b)  => a + b; 

console.log(add2(10,20));