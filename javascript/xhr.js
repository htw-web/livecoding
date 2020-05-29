let xhr = new XMLHttpRequest();
let url = "https://maps.googleapis.com/maps/api/geocode/json?" // Geocoding API 
url = url + "address=Wilhelminenhofstr 75, Berlin"; 
url = url + "&key=AIzaSyDxdHXv5NxBOOveXK8Uy-Nf6FeYUBwhvpY"; // ihren eigenen Key benutzen 
xhr.open("GET", url, true);// methode, url, asynchron? 
xhr.onerror = function () { // diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
    alert("Connecting to server with " + url + " failed!\n");
};
xhr.onload = function (e) { // diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
    let data = this.response;
    let obj = JSON.parse(data); // auspacken
    console.log(obj);
    if (this.status == 200) { // ok
        if (obj.status != "ZERO_RESULTS") { // nicht null ergebnisse
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

function requestHandler (response) { // diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
    let data = response;
    let obj = JSON.parse(data); // auspacken
    console.log(obj);
    if (this.status == 200) { // ok
        if (obj.status != "ZERO_RESULTS") { // nicht null ergebnisse
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

/////////////////// Moderne Implementierung ///// 

fetch(url)
  .then(response => response.json()) // auspacken
  .then(data => requestHandler(data));