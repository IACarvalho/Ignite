# Anotaçōes
* para habilitar import/export basta adicionar ```"type": "modules"``` no package.json
* para o servidor funcionar com hotreload basta passar a flag --watch

## Rotas HTTP
* Toda rota HTTP é composta por 2 principais recursos, o método HTTP e a URL
* Os principais métodos HTTPs são **GET, POST, PUT, PATCH, DELETE**
* **GET** -> Buscar um recurso no back-end
* **POST** -> Criar um recurso no back-end
* **PUT** -> Atualizar um recurso no back-end
* **PATCH** -> Atualizando uma informação especifica de um recurso no back-end
* **DELETE** -> Deleta um recurso no back-end
* Cabeçalho (request:response) -> metadados
* Dentor do cabeçalho posso passar informações, por exemplo, que espero receber um json como resposta, assim retornando já formatado.

## HTTP Status code
* Servem para dizer se a requisição foi bem sucedida ou se falhou
* **100 - 199** -> Respostas informacionais, não necessariamente quer dizer sucesso ou falha
* **200 - 299** -> Resposta de sucesso
* **300 - 399** -> Resposta de redirecionamento
* **400 - 499** -> Resposta de *client error* (erro no lado do cliente)
* **500 - 599** -> Resposta de *server error* (erro do lado do servidor)

## Streaming
* Streaming basicamente é começar a trabalhar nos dados de um arquivo mesmo antes de terminar de baixar ou de subir o arquivo por completo
* Toda porta de entrada e saída é uma stream. Toda rota tem *request* e *response*
* Request pode ser entendido como uma readable stream e o response como uma writeable stream

## Buffer
* É uma representação de um espaço na memória do computador usado para transitar dados de maneira muito rápida (achei parecido com ponteiros)
* É usado para escrever e ler da memoria de maneiro muito performática
* Armazena os dados de maneira binária