 import { randomUUID } from "node:crypto"
 
 // Funçao que executa algo quando a nossa rota for chamada
export function create( {request, response, database} ) {
  const { equipment, description, user_name } = request.body

  // isso aqui o usuário que vai colocar ( equipment, description, etc. Menos o id:, created_at etc )
  const ticket = {
    // Padrão de identificador único ( cria id único)
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  }

  database.insert("tickets", ticket)

  return response.writeHead(201).end(JSON.stringify(ticket))
}
