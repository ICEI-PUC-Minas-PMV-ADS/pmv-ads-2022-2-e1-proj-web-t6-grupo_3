# Plano de Testes de Software

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

Cenário de teste 01: O usuário se interessa por um evento e quer obter mais informações sobre este. Para isso, o usuário acessa a página de eventos. O grupo-alvo deste cenário contempla todos os usuários do site. O cenário será testado no CT-01.

|Caso de Testes|CT-01 - Apresentação dos eventos na página "Eventos"|
|-|:-|
|Requisitos Associados|RF-02 - O site deve apresentar informações sobre horário de início e término, flyer, local e informações do organizador|
|Objetivo do Teste|Verificar se a página de eventos é capaz de carregar todos os eventos do arquivo JSON|
|Passos|No arquivo JSON, cada índice está associado a um evento a ser exibido na página "Eventos".<br><br>1) Abrir o arquivo JSON no VS Code<br>2) Abrir o arquivo JavaScript da página Eventos no VS Code<br>3) Realizar o teste amostral de 3 índices (1, 2 e 4) no código JavaScript |
|Critérios de Êxito|A cada iteração realizada com um índice diferente, a página deve carregar o evento correspondente ao índice testado.|
