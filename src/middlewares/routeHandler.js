import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

// instancia o Database
const database = new Database()

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    // função pra verificar se está tudo nos conformes as rotas e requisições
    return route.method === request.method && route.path.test(request.url)
  })
  // se sim, faz isso:
  if (route) {
    const routeParams = request.url.match(route.path)

    const { query } = routeParams.groups

    request.query = query ? extractQueryParams(query) : {}

    return route.controller({request, response, database,})
  }

    // se não, faz isso:
  return response.writeHead(404).end()

}