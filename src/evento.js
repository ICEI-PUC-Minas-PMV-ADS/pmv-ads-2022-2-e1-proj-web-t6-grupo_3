let eventos;

function exibirDados() {
    title.innerHTML = eventos[eventos[0].x].nome;
    tituloEvento.innerHTML = eventos[eventos[0].x].nome;
    imagemEventoId.innerHTML = eventos[eventos[0].x].imagem;
    document.getElementById("imagemFundo").style.backgroundImage = eventos[eventos[0].x].imagemFundo;
    dataEvento.innerHTML = eventos[eventos[0].x].data;
    localEvento.innerHTML = eventos[eventos[0].x].local;
    descricaoEvento.innerHTML = eventos[eventos[0].x].descricao;
}

fetch("eventos.json")
    .then((response) => response.json())
    .then((json) => eventos = json)
    .then(() => exibirDados())