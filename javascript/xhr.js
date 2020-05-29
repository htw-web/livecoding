let xhr = new XMLHttpRequest();
let url = "https://maps.googleapis.com/maps/api/geocode/json?"
url = url + "address=Wilhelminenhofstr 75, Berlin";
url = url + "&key=AIzaSyDxdHXv5NxBOOveXK8Uy-Nf6FeYUBwhvpY";
xhr.open("GET", url, true);
xhr.onerror = function () { // diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
    alert("Connecting to server with " + url + " failed!\n");
};
xhr.onload = function (e) { // diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
    let data = this.response;
    let obj = JSON.parse(data);
    console.log(obj);
    if (this.status == 200) {
        if (obj.status != "ZERO_RESULTS") {
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