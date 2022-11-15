let eventos;

function exibirDados() {
  var textoHTML = '';
  for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].favorito) {
      textoHTML += `<div>`;
      textoHTML += `<div id="imagemEvento">${eventos[i].imagem}</div>`;
      textoHTML += `<p id="dataHora">${eventos[i].data}</p>`;
      textoHTML += `<h2 id="nomeEvento">${eventos[i].nome}</h2>`;
      textoHTML += `<p id="localEvento">${eventos[i].local}</p>`;
      textoHTML += `</div>`;
    }
  }
  var console = document.getElementById("container");
    console.innerHTML = textoHTML;
}


fetch("eventos.json")
  .then((response) => response.json())
  .then((json) => (eventos = json))
  .then(() => exibirDados());
