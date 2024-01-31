import express from 'express';

const app = express()
const porta = 5000

// API use JSON como forma de comunicação
app.use(express.json())

app.get("/", (request, response) => {
  response.send({ message: "Welcome" })
})

app.get("/server", (request, response) => {
  response.send({ status: "ok" })
})

app.post("/adicionar/:valor1/:valor2", (request, response) => {
  const valor1 = Number(request.params.valor1)
  const valor2 = Number(request.params.valor2)
  const resultado = valor1 + valor2

  response.send({ resultado })
})

// subtrair
app.post("/subtrair/:valor1/:valor2", (request, response) => {
  const valor1 = Number(request.params.valor1)
  const valor2 = Number(request.params.valor2)
  const resultado = valor1 - valor2

  response.send({ resultado })
})

// multiplicar
app.post("/multiplicar/:valor1/:valor2", (request, response) => {
  const valor1 = Number(request.params.valor1)
  const valor2 = Number(request.params.valor2)
  const resultado = valor1 * valor2

  response.send({ resultado })
})

// dividir
app.post("/dividir/:valor1/:valor2", (request, response) => {
  const valor1 = Number(request.params.valor1)
  const valor2 = Number(request.params.valor2)
  const resultado = valor1 / valor2

  response.send({ resultado })
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})