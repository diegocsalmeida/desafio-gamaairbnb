var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
let data;
let preco;
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
        alert('Página sem parâmetros.');
        window.location.href = "index.html";
  }

  if (res[1].split("=")[1] === 'null' || res[1].split("=")[1].length === 0){
    window.location.href = "index.html";
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
      preco = data[id].price;
      titulo.appendChild(small);
      
      document.getElementById('container').style = "display :block";
      
      var tipo = document.getElementById('tipoImovel');
      tipo.innerHTML = data[id].property_type;
      
  }

};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();

function parseDate(str) {
  var mdy = str.split('-');
  console.log(mdy);
  return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second-first)/(1000*60*60*24));
}

function calcularDiarias(){
  let entrada = document.getElementById("dataEntrada").value;
  let saida = document.getElementById("dataSaida").value; 

  let noites = Math.round((new Date(saida) - new Date(entrada))/(1000*60*60*24));

  console.log(entrada);
  console.log(saida);

  var a = new Date(entrada);
  var b = new Date(entrada);


  if( a > b){
    console.log('Entrada maior');
  } else if ( a === b ){
    console.log('Iguais');
  } else {
    console.log('Entrada menor');
  }

  document.getElementById('total').innerHTML = `R$ ${(noites * preco)}`

}


