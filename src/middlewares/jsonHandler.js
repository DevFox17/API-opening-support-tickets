export async function jsonHandler(request, response) {
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }
  
  try {
    // Adicionando dentro da requisição a propriedade de body e passa o JSON.parse pra montar utilizando os buffers
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }
  
  response.setHeader("Content-Type", "application/json")
}