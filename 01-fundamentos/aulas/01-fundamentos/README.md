# Fundamentos

CommonJS => require
ESModules => import/export

Aplicações HTTP => APIs

- Criar usuários
- Listagem de usuários
- Edição de usuários
- Remoção de usuários

## HTTP

    Método HTTP
    URL

## Métodos

    GET
    POST
    PUT
    PATCH
    DELETE

- GET -> buscar informação do back-end
- POST -> criar uma informação no back-end
- PUT -> atualizar um recurso no back-end
- PATCH -> atualizar uma informação específica de um recurso no back-end
- DELETE -> deletar um recurso no back-end

GET /users => buscando usuários do back-end
POST /users => criando um usuário no back-end

Stateful -> stateless -> os dados são armazenados localmente em memória

JSON -> JavaScript Object Notation

## Cabeçalhos (Requisição/resposta) => Metadados

    Content-Type -> Tipo de conteúdo
    application/json -> JSON

## HTTP Status Codes

    Information responses -> 100 - 199
      100 -> Continue

    Successful responses -> 200 - 299
      200 -> OK
      201 -> Created
      204 -> No Content

    Redirection messages -> 300 - 399
      304 -> Not Modified

    Client errors responses -> 400 - 499
      400 -> Bad Request
      401 -> Unauthorized
      403 -> Forbidden
      404 -> Not Found
      422 -> Unprocessable Entity
      429 -> Too Many Requests

    Server errors responses -> 500 - 599
      500 -> Internal Server Error

## Formas de enviar informações nas requisições

### Query Parameters

Parâmetros nomeados

URL Stateful -> filtros, paginação, coisas que modificam as respostas mas não são obrigatórios

<http://localhost:3333/users?userId=1>

### Route Parameters

Parâmetros não nomeados

Geralmente usado para identificação de recurso

<http://localhost:3333/users/1>

### Request Body

Envio de informações de um formulário no body da requisição

<http://localhost:3333/users>
