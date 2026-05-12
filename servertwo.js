const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ mensagem: 'Página inicial' }))
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ nome: 'Daniel', empresa: 'Questor' }))
  } else if (req.url === '/tecnologias') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify([
      { id: 1, nome: 'React' },
      { id: 2, nome: 'Node.js' },
      { id: 3, nome: 'PHP' }
    ]))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }))
  }
})