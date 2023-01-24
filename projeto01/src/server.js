import http from 'node:http'

const users = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET' && url === '/users'){
    return response.end(JSON.stringify(users))
  }
    
  if(method === 'POST' && url === '/users'){
    
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return response.end('Criação de usuários')
  }

  return response.end('Hello world')
})

server.listen(3333)