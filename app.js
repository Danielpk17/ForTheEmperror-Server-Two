const express = require('express')
const app = express()


app.use(express.json())

let tecnologias = [
  { id: 1, nome: 'React', nivel: 'intermediário' },
  { id: 2, nome: 'Node.js', nivel: 'iniciante' },
]

app.get('/tecnologias', (req, res) => {
  res.json(tecnologias)
})

app.get('/tecnologias/:id', (req, res) => {
  const tech = tecnologias.find(t => t.id === Number(req.params.id))
  if (!tech) {
    return res.status(404).json({ erro: 'Tecnologia não encontrada' })
  }
  res.json(tech)
})

app.post('/tecnologias', (req, res) => {
  const nova = {
    id: Date.now(),
    nome: req.body.nome,
    nivel: req.body.nivel
  }
  tecnologias.push(nova)
  res.status(201).json(nova)
})

app.put('/tecnologias/:id', (req, res) => {
const tech = tecnologias.find(t => t.id === Number(req.params.id))
if (!tech) {
    return res.status(404).json({ erro: 'Tecnologia não encontrada' })
}
tech.nome = req.body.nome
tech.nivel = req.body.nivel
res.json(tech)
})

app.delete('/tecnologias/:id', (req, res) => {
  tecnologias = tecnologias.filter(t => t.id !== Number(req.params.id))
  res.status(200).json({ mensagem: 'Removido com sucesso' })
})

app.listen(3000, () => {
  console.log('Servidor Express rodando em http://localhost:3000')
})