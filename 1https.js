const express = require('express')
const boocks = require('./api/books.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1>')
})

app.get('/boocks', (req, res) => {
  const { categor } = req.query
  if (categor) {
    const filteredBooks = boocks.filter(
      (boock) => boock.categories.some(g => g.toLocaleLowerCase() === categor.toLocaleLowerCase())
    )
    return res.json(filteredBooks)
  }
  res.json(boocks)
})

app.get('/boocks/:id', (req, res) => {
  const { id } = req.params
  const boock = boocks.find(boock => boock.id === parseInt(id))
  if (boock) return res.json(boock)

  res.status(404).json({ message: 'boock not found' })
})

app.post('/boock', (req, res) => {
  let body = ''

  req.on('data', (chuck) => {
    body += chuck.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).end(JSON.stringify(data))
  })
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
