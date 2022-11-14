let eventos;

function exibirDados() {
    nomeEvento.innerHTML = eventos[0].nome;
    imagemEvento.innerHTML = eventos[0].imagem;
    dataHora.innerHTML = eventos[0].data;
    localEvento.innerHTML = eventos[0].local;
}


fetch("eventos.json")
    .then((response) => response.json())
    .then((json) => eventos = json)
    .then(() => exibirDados())






