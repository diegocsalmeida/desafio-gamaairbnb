var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
var data;
request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    data = JSON.parse(this.response);
  } else {
    console.log("Erro ao executar a consulta na API");

  }

  var url = window.location.href; 

  var res = url.split('?'); 
    	
	if (res[1] === undefined) {
        alert('página sem parâmetros.');
  }

  if (res[1] !== undefined) {
      //tenta localizar os & (pode haver mais de 1)
      var parametros = res[1].split('&');
      //alert('Parametros encontrados:\n' + parametros);
      //var captura = parametros.split('=');
      var id = parametros[0].split('=')[1];
      var imovelBuscado = data[id];

      document.getElementById('imagemPropriedade').src = data[id].photo;
      
      var titulo = document.getElementById('titulo');
      titulo.innerHTML = data[id].name;
      var small = document.createElement('small');
      small.style = "padding-left: 40px";
      small.innerHTML = "Por apenas R$ " + data[id].price + " ao dia.";

      titulo.appendChild(small);
      
      document.getElementById('container').style = "display :block";
      
      
  }

};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();