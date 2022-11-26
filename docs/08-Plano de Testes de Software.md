# Plano de Testes de Software

<!--<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

Cenário de teste 1: O usuário se interessa por um evento e quer obter mais informações sobre este. Para isso, o usuário acessa a página de eventos. O grupo-alvo deste cenário contempla todos os usuários do site. O cenário será testado no CT-01.

|Caso de Testes|CT-01 - Apresentação dos eventos na página "Eventos"|
|-|:-|
|Requisitos Associados|RF-02 - O site deve apresentar informações sobre horário de início e término, flyer, local e informações do organizador|
|Objetivo do Teste|Verificar se a página de eventos é capaz de carregar todos os eventos do arquivo JSON|
|Passos|No arquivo JSON, cada índice está associado a um evento a ser exibido na página "Eventos".<br><br>1) Abrir o arquivo JSON no VS Code<br>2) Abrir o arquivo JavaScript da página Eventos no VS Code<br>3) Realizar o teste amostral de 3 índices (0, 1 e 3) no código JavaScript |
|Critérios de Êxito|A cada iteração realizada com um índice diferente, a página deve carregar o evento correspondente ao índice testado.|
