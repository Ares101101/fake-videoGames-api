import { VideoGamesModel } from '../models/models.js'
import { validateDP, validateGame, validatePartialGame } from '../schema/games.js'

export class VideoGamesController {
  static async getAll (req, res) {
    const { genre, developer, publisher } = req.query
    const games = await VideoGamesModel.getAll({ genre, developer, publisher })
    if (!games) {
      return res.status(400).json({ message: 'Video Game not fount' })
    }
    res.json(games)
  }

  static async getPub (req, res) {
    const publishers = await VideoGamesModel.getPub()
    res.json(publishers)
  }

  static async getDev (req, res) {
    const developers = await VideoGamesModel.getDev()
    res.json(developers)
  }

  static async getID (req, res) {
    const { id } = req.params
    const Game = await VideoGamesModel.getByID({ id })
    if (Game) return res.json(Game)

    res.status(404).json({ message: 'Game not found' })
  }

  static async createGame (req, res) {
    const result = validateGame(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newGame = await VideoGamesModel.create({ input: result.data })

    res.status(201).json(newGame)
  }

  static async createDev (req, res) {
    const result = validateDP(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newDev = await VideoGamesModel.create({ input: result.data })
    res.status(201).json(newDev)
  }

  static async createPub (req, res) {
    const result = validateDP(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newPub = await VideoGamesModel.create({ input: result.data })

    res.status(201).json(newPub)
  }

  static async updateGame (req, res) {
    const result = validatePartialGame(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const { id } = req.params

    const updateGame = await VideoGamesModel.update({ id, input: result.data })

    return res.json(updateGame)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await VideoGamesModel.delete({ id })

    if (result === false) {
      return res.status(400).json({ message: 'Video Game not fount' })
    }

    return res.json({ message: 'Video Game delete' })
  }
}
