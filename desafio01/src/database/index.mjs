import fs from 'node:fs/promises'

const databasePath = new URL('../../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(table, id){
    let data = this.#database[table] ?? []

    if(id) {
      data = data.filter(row => {
        return row.id === id
      })
    }

    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }

  update(table, id, data, complete) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if(rowIndex > -1) {
      const {
        title,
        description,
      } = data
      const task = this.#database[table][rowIndex]
      
      this.#database[table][rowIndex] = {
        id,
        title: title ? title : task.title,
        description: description ? description : task.description,
        completed_at: complete ? new Date() : task.completed_at,
        created_at: task.created_at,
        updated_at: new Date()
      }
      this.#persist()
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if(rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }
}