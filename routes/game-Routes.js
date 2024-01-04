import { Router } from 'express'
import { VideoGamesController } from '../controllers/controllers.js'

export const gamesRouter = Router()

gamesRouter.get('/', VideoGamesController.getAll)

gamesRouter.get('/publishers', VideoGamesController.getPub)

gamesRouter.get('/developers', VideoGamesController.getDev)

gamesRouter.get('/genres', VideoGamesController.getGen)

gamesRouter.get('/:id', VideoGamesController.getID)

gamesRouter.post('/', VideoGamesController.createGame)

gamesRouter.post('/developers', VideoGamesController.createDev)

gamesRouter.post('/publishers', VideoGamesController.createPub)

gamesRouter.patch('/:id', VideoGamesController.updateGame)

gamesRouter.delete('/:id', VideoGamesController.delete)
