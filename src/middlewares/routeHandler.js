import { routes } from "../routes/index.js";

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    // função pra verificar se está tudo nos conformes as rotas e requisições
    return route.method === request.method && route.path === request.url
  })
  // se sim, faz isso:
  if (route) {
    return route.controller({request, response})
  }

    // se não, faz isso:
   return response.wiriteHead(404).end()

}