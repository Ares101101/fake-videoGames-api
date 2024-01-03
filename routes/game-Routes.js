import { Router } from 'express'
import { validateDP, validateGame, validatePartialGame } from '../schema/games.js'
import { VideoGamesModel } from '../models/models.js'

export const gamesRouter = Router()

gamesRouter.get('/', async (req, res) => {
  const { genre, developer, publisher } = req.query
  const games = await VideoGamesModel.getAll({ genre, developer, publisher })
  if (games.length === 0) {
    return res.status(400).json({ message: 'Video Game not fount' })
  }
  res.json(games)
})

gamesRouter.get('/publishers', async (req, res) => {
  const publishers = await VideoGamesModel.getPub()
  res.json(publishers)
})

gamesRouter.get('/developers', async (req, res) => {
  const developers = await VideoGamesModel.getDev()
  res.json(developers)
})

gamesRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const Game = await VideoGamesModel.getByID({ id })
  if (Game) return res.json(Game)

  res.status(404).json({ message: 'Game not found' })
})

gamesRouter.post('/', async (req, res) => {
  const result = validateGame(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newGame = await VideoGamesModel.create({ input: result.data })

  res.status(201).json(newGame)
})

gamesRouter.post('/developers', async (req, res) => {
  const result = validateDP(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newDev = await VideoGamesModel.create({ input: result.data })
  res.status(201).json(newDev)
})

gamesRouter.post('/publishers', async (req, res) => {
  const result = validateDP(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newPub = await VideoGamesModel.create({ input: result.data })

  res.status(201).json(newPub)
})

gamesRouter.patch('/:id', async (req, res) => {
  const result = validatePartialGame(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const { id } = req.params

  const updateGame = await VideoGamesModel.update({ id, input: result.data })

  return res.json(updateGame)
})

gamesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await VideoGamesModel.delete({ id })

  if (result === false) {
    return res.status(400).json({ message: 'Video Game not fount' })
  }

  return res.json({ message: 'Video Game delete' })
})
