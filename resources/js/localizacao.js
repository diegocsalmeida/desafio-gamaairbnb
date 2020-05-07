var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/master/json/municipios.json', true);
var data;
request.onload = function () {

  if (this.status >= 200 && this.status < 400) {
    // Success!
    data = JSON.parse(this.response);
    for (contador = 0; contador < data.length; contador++) {

    }

  } else {
    console.log("Erro ao executar a consulta na API");

  }
};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(-16.7573,-49.4412),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

myMap();