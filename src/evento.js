let eventos;

function exibirDados() {
    title.innerHTML = eventos[0].nome;
    tituloEvento.innerHTML = eventos[0].nome;
    imagemEvento1.innerHTML = eventos[0].imagem;
    dataEvento.innerHTML = eventos[0].data;
    localEvento.innerHTML = eventos[0].local;
    descricaoEvento.innerHTML = eventos[0].descricao;
}

fetch("eventos.json")
    .then((response) => response.json())
    .then((json) => {
        eventos = json
    })
    .then(() => exibirDados())