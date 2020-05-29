// Oldschool 
let xhr = new XMLHttpRequest();
let url = "https://maps.googleapis.com/maps/api/geocode/json?" // Geocoding API 
url = url + "address=Wilhelminenhofstr 75, Berlin";
url = url + "&key=AIzaSyDxdHXv5NxBOOveXK8Uy-Nf6FeYUBwhvpY"; // ihren eigenen Key benutzen 
xhr.open("GET", url, true); // methode, url, asynchron? 
xhr.onerror = function () { // diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
    alert("Connecting to server with " + url + " failed!\n");
};
xhr.onload = function (e) { // diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
    let data = this.response;
    let obj = JSON.parse(data); // auspacken
    console.log(obj);
    if (this.status === 200) { // ok
        if (obj.status !== "ZERO_RESULTS") { // nicht null ergebnisse
            let lat = obj.results[0].geometry.location.lat;
            let lng = obj.results[0].geometry.location.lng;
            console.log(lat + ", " + lng);
        } else {
            alert("Die Adresse konnte nicht aufgelöst werden!");
        }
    } else { //Handhabung von nicht-200er
        alert("HTTP-status code was: " + obj.status);
    }
};
xhr.send();

function requestHandler(obj) { // diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
    //console.log(response);
    //let data = response;
    //let obj = JSON.parse(data); // auspacken
    console.log(obj);
    if (obj.status === "OK") { // ok
        if (obj.status !== "ZERO_RESULTS") { // nicht null ergebnisse
            let lat = obj.results[0].geometry.location.lat;
            let lng = obj.results[0].geometry.location.lng;
            console.log(lat + ", " + lng);
        } else {
            alert("Die Adresse konnte nicht aufgelöst werden!");
        }
    } else { //Handhabung von nicht-200er
        alert("HTTP-status code was: " + obj.status);
    }
}

/////////////////// Moderne Implementierung Fetch API ///// 

fetch(url)
    .then(response => response.json()) // auspacken
    .then(data => requestHandler(data))
    .catch(console.log("Error handling"));


/// event listen
// moderner, css selector(class, id, tags), NodeElement kennen ihre Verwandtschaft => HTMLElement kennen nicht ihre Verwandtschaft
let element = document.querySelector('#demo');
element.addEventListener('submit', function (event) {
    // verhindert das automatische neu laden der seite 
    event.preventDefault();
});

let contacts = [{
    firstName: "Martina",
    lastName: "Freundorfer"
}, {
    firstName: "Martina",
    lastName: "Freundorfer"
}, {
    firstName: "Martina",
    lastName: "Freundorfer"
}];

contacts[0].plz = "14167";
console.log(contacts);