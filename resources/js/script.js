var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
var data;
request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    data = JSON.parse(this.response);
    for (contador = 0; contador < data.length; contador++) {

      //console.log(data[contador]);

      // Pega o elemento pai pelo ID
      var linhaCards = document.getElementById('linhaCards');

      // Cria uma div
      var column = document.createElement("div");
      // Adiciona a classe - col-sm-6 col-md-4 col-lg-3
      column.className = "col-sm-6 col-md-4 col-lg-3";

      // Cria uma div
      var cardDesk = document.createElement("div");
      // Adiciona a classe
      cardDesk.className = "card-desk";

      // Cria uma div
      var card = document.createElement("div");
      // Adiciona a classe
      card.className = "card";

      // Cria uma imagem
      var img = document.createElement("img");
      // Adiciona a classe
      img.className = "card-img-top";
      // Adiciona a TAG source da imagem
      img.src = data[contador].photo;
      // Adiciona a TAG alt da imagem, utilizando name
      img.alt = data[contador].name;

      // Cria uma div
      var cardBody = document.createElement("div");
      // Adiciona a classe
      cardBody.className = "card-body";

      // Cria uma div
      var cardFooter = document.createElement("div");
      // Adiciona a classe
      cardFooter.className = "card-footer";

      // Cria um titulo peso H5
      var title = document.createElement("h6");
      // Adiciona a classe
      title.className = "card-title";
      // Adiciona o texto
      //title.innerHTML = data[contador].name;

      var link = document.createElement("a");
      link.href = "propriedade.html?id=" + contador;
      link.innerHTML = data[contador].name;
      console.log(link);
      
      title.appendChild(link);

      // Cria um paragrafo
      var description = document.createElement("p");
      // Adiciona a classe
      description.className = "card-text";
      // Adiciona o texto
      description.innerHTML = "R$ " + data[contador].price + " / dia";

      // Cria um paragrafo
      var smallTime = document.createElement("small");
      // Adiciona a classe
      smallTime.className = "text-muted";
      // Adiciona o texto
      smallTime.innerHTML = "Tipo: " + data[contador].property_type;

      // Montar o body
      column.appendChild(cardDesk);
      cardDesk.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      // Montar informações
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      // Montar o footer
      cardFooter.appendChild(smallTime);
      // Montar as colunas      
      linhaCards.appendChild(column);
    }

  } else {
    console.log("Erro ao executar a consulta na API");

  }
};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();

function buscarPropriedadePorId(){
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
      document.getElementById('resultado').innerHTML += imovelBuscado.name + '<br/>';
      console.log(data[id].photo);
      document.getElementById('imagemPropriedade').src = data[id].photo;
    }
      
}