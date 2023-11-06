
#  Seja bem-vindo ao CRUD de empresas, espero que goste :D

A aplicação apresenta páginas de cadastro e gerenciamento de empresas, permitindo a consulta, alteração, inclusão e remoção de dados.

Utilizei o banco de dados PostgreSQL e para fazer a interação com o banco utilizei a ORM Sequelize (arquivo db.config.js).


## Requisitos

Para executar a aplicação será necessário:
-   Node.js versão 14.19.1
-   PostgreSQL 
-   Algumas dependências instaladas por meio do npm install
-   Repositório frontend disponível em: https://github.com/RuanUFSC/Empresas-frontend

## Observações importantes

-As configurações de conexão com o banco de dados são feitas no arquivo db.config.js, que precisa de um arquivo .ENV com a seguinte estrutura:

    HOST= <ex: localhost>
    USER= <ex: postgres>
    PASSWORD= <ex: postgres123>
    DB= <ex: postgres>

-Dentro do banco deve existir 1 tabela que pode ser criada por meio do arquivo src > App.js. Na primeira execução, deve-se executar db.sequelize.sync({ force: true }), para isso, basta comentar as linhas 9 a 15 do arquivo App.js e descomentar as linhas 17 a 19 (após a criação da tabela, deixar como antes).
## Comandos de execução
Dentro de uma pasta rodar via terminal
### Backend

    git clone https://github.com/RuanUFSC/Empresas-backend
    cd Empresas-backend

**criar arquivo .env**

    npm install
    node server.js

### Frontend
**Abrir outro terminal na pasta raiz criada**

    git clone https://github.com/RuanUFSC/Empresas-frontend
    cd Empresas-frontend
    npm install
    npm run serve

**Acessar a rota http://localhost:8080/**


# Principais tecnologias utilizadas

Node.js, Vue.js, Sequelize, Express, Body-Parser e BootstrapVue.
