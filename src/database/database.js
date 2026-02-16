import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
    // Se encontrou dados ( data ), va fazer o processo inverso ( de texto pra json ) e atualiza o conteudo no #database
    .then(( data ) => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    }
    else {
      this.#database[table] = [data]
    }

    this.#persist()
  }
 }
