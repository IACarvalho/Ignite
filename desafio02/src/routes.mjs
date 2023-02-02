import { buildRoutePath } from "./utils/build-route-path.mjs"
import { randomUUID } from 'node:crypto'
import { Database } from "./database/index.mjs"

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {

      const tasks = database.select('tasks')


      return response.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params

      const task = database.select('tasks', id)

      return response.end(JSON.stringify(task))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { title, description } = request.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: null
      }
      
      database.insert('tasks',task)

      return response
        .writeHead(201)
        .end(JSON.stringify(task))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { title, description } = request.body
      const { id } = request.params

      database.update('tasks', id, {
        title,
        description,
        updated_at: new Date()
      })

      return response.writeHead(204).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (request, response) => {
      const { id } = request.params
      
      database.update('tasks', id, {}, true)

      return response.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params

      database.delete('tasks', id)

      return response.writeHead(204).end()
    }
  }
]