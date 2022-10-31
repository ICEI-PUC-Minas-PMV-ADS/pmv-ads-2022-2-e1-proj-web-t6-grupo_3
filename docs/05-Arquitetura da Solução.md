# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na figura que se segue.

![Diagrama de Componentes](img/componentes.png)

A solução implementada conta com os seguintes módulos:


- Navegador - Interface básica do sistema
- Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
- Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles:
  - Tela inicial - seções com os eventos apresentados
  - Eventos – evento detalhado
  - Favoritos - lista de eventos mantidos para leitura e acesso posterior
  - Sobre - comentário sobre a plataforma e o que ela oferece
- Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.

## Hospedagem

O site utiliza hospedagem dedicada.