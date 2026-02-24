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

  select(table, filters) {
    let data = this.#database[table] ?? []

    if (filters) {
      data = data.filter(( row ) => {
        // entries separa a chave e o valor
        // some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
        return Object.entries(filters).some(([key, value]) => {
          // Retorna um valor verdadediro ou falso se ( includes ), incluido na chave
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return data
  }

  update( table, id, data) {
    const rowIndex = this.#database[table].findIndex(( row )=> 
    row.id === id)

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data,
      }

      this.#persist()
    }
  }
 }
