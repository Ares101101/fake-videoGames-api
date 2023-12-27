import { Router } from 'express'
import  videoGames  from "../api/db/games.json" with { "type": "json" }
import { validateGame, validatePartialGame } from '../schema/games.js'
import { randomUUID } from 'node:crypto'

export const gamesRouter = Router()


gamesRouter.get('/', (req, res) => {
  const { categor } = req.query

  if (categor) {
    const genre = videoGames.genres.filter((genre) => genre.name === categor)

    const filteredGames = videoGames.games.filter(
      (Game) => Game.genres.some(id => id === genre[0].id)
    )
    return res.json(filteredGames)
  }

  res.json(videoGames.games)
})

gamesRouter.get('/:id', (req, res) => {
    const { id } = req.params 
    const Game = videoGames.games.find(Game => Game.id === parseInt(id,10))
    if (Game) return res.json(Game)
  
    res.status(404).json({ message: 'Game not found' })
})

gamesRouter.post('/', (req, res) => {
    const result = validateGame(req.body)
  
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newGame = {
      id: randomUUID(),
      ...result.data
    }
  
    videoGames.push(newGame)
  
    res.status(201).json(newGame)
})

gamesRouter.patch('/:id',(req, res) => {
    const result = validatePartialGame(req.body)
  
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const { id } = req.params
    const GameIndex = videoGames.findIndex(Game => Game.id === id)
  
    if (GameIndex === -1) {
      return res.status(404).json({ error: 'no se encontro el id' })
    }
    const updateGame = {
      ...videoGames[GameIndex],
      ...result.data
    }
  
    videoGames[GameIndex] = updateGame
    return res.json(updateGame)
})