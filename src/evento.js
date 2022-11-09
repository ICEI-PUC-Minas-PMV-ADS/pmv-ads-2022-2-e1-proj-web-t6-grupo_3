var eventos = [
    {
        "nome": "Festival Rock the Mountain",
        "imagem": "<img id=\"imagemEvento\" src=\"img/eventoFRtm.png\" alt=\"Imagem Evento\">",
        "data": "12 nov - 2022 • 11:00 > 14 nov - 2022 • 04:00",
        "local": "<a href=\"https://www.google.com/maps/search/Parque%20Municipal%20Prefeito%20Paulo%20Rattes%20,Estrada%20Uni%C3%A3o%20e%20Ind%C3%BAstria,%2010000,%20Petr%C3%B3polis,%20RJ,%2025730-745,%20BRASIL\"target=\"_blank\">Parque Municipal Prefeito Paulo Rattes, Petrópolis - RJ</a>",
        "descricao": "A 7ª edição do Rock the Mountain Festival acontecerá nos dias 12 e 13 de novembro de 2022!<br><a href=\"https://www.facebook.com/hashtag/hittheroad?__eep__=6\">#HitTheRoad</a> para Itaipava, na charmosa serra fluminense!<br>As boas lembranças virão dos momentos que passaremos juntos, jogados na grama, vendo o show no ombro do amigo, subindo a serra com a galera, descobrindo novos artistas, fritando até o final na Magic Disco e fazendo novas amizades. <a href=\"https://www.facebook.com/hashtag/makefriends?__eep__=6\">#MakeFriends</a><br>Em meio à natureza, o festival reúne juventude, modernidade, sustentabilidade, liberdade, estilo, diversão,gastronomia e claro, MUITA música num dia que promete ser inesquecível! #RespectTheNature<br>A mágica do <a href=\"https://www.facebook.com/hashtag/rtm2021?__eep__=6\">#RTM2022</a> vai além do seu Line-Up! <a href=\"https://www.facebook.com/hashtag/feelthemusic?__eep__=6\">#FeelTheMusic</a><br>Em novembro, we're gonna <a href=\"https://www.facebook.com/hashtag/rockthemountain?__eep__=6\">#RockTheMountain</a>!<br>#EnjoyTheVibe",
        "categoria": "Show",
        "favorito": false
    }
]

function exibirDados() {
    title.innerHTML = eventos[0].nome;
    tituloEvento.innerHTML = eventos[0].nome;
    imagemEvento1.innerHTML = eventos[0].imagem;
    dataEvento.innerHTML = eventos[0].data;
    localEvento.innerHTML = eventos[0].local;
    descricaoEvento.innerHTML = eventos[0].descricao;
}