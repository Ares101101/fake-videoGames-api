import express, { json } from 'express'
import { randomUUID } from 'node:crypto'
import  videoGames  from "../api/db/games.json" with { "type": "json" }
import { validateBoock, validatePartialBoock } from './videoGames.js'

const app = express()

app.use(json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1>')
})

app.get('/videoGames', (req, res) => {
  const { categor } = req.query
  if (categor) {
    const filteredBooks = videoGames.filter(
      (boock) => boock.categories.some(g => g.toLocaleLowerCase() === categor.toLocaleLowerCase())
    )
    return res.json(filteredBooks)
  }
  res.json(videoGames)
})

app.get('/videoGames/:id', (req, res) => {
  const { id } = req.params
  const boock = videoGames.find(boock => boock.id === id)
  if (boock) return res.json(boock)

  res.status(404).json({ message: 'boock not found' })
})

app.post('/videoGames', (req, res) => {
  const result = validateBoock(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newBoock = {
    id: randomUUID(),
    ...result.data
  }

  videoGames.push(newBoock)

  res.status(201).json(newBoock)
})

app.patch('/videoGames/:id', (req, res) => {
  const result = validatePartialBoock(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const { id } = req.params
  const boockIndex = videoGames.findIndex(boock => boock.id === id)

  if (boockIndex === -1) {
    return res.status(404).json({ error: 'no se encontro el id' })
  }
  const updateBoock = {
    ...videoGames[boockIndex],
    ...result.data
  }

  videoGames[boockIndex] = updateBoock
  return res.json(updateBoock)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
