## Requisitos
==========
Para esse projeto é necessário instalar: 
> node versão LTS - https://nodejs.org/en/download/
> Insomnia ou Postman :
>> Insomnia: https://insomnia.rest/download
>> Postman: https://www.postman.com/downloads/?utm_source=postman-home


## Para executar
=============
`npm run start` ou `node index.js`

`npm i` para instalar todos os modulos.

URL da API:
http://localhost:3000

Para acessar o GET ou POST: 
http://localhost:3000/users

Para fazer o PUT ou DELETE:
http://localhost:3000/users/id ==> Substituir id pelo numero de id desejado na requisição.

Para testar recomendo o uso das ferramentas Postman ou Insomnia, colocando a URL e selecionando o metodo HTTP desejado.
O body da requisição está configurado para receber URL-Encoded e/ou JSON, sendo apenas necessario preencher a requisição.

## Decisões tomadas
================

- Decidi usar uma API REST.
- Decidi utilizar a biblioteca Express devido a simplificação do uso de rotas e manipulação do body da requsição e também ao seu amplo uso
- Optei por criar um arquivo JSON com os funcionários, sendo manipulado pelo módulo FS (caso não exista ele é criado).
- Utilizei uma classe como modelo de usuário, sendo preenchido de acordo com a requisição e adicionado no users.json.
- O salário em reais é preenchido automaticamente.
- A cotação do dólar está na memória.