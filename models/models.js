import { readJSON } from '../utils/utils.js'
import { randomUUID } from 'node:crypto'

const { games, developers, publishers, genres } = readJSON('../api/db/games.json')

export class VideoGamesModel {
  static async getAll ({ genre, publisher, developer }) {
    if (genre) {
      return games.filter(
        (Game) => Game.genres.some(id => id === genres.find((g) => g.name === genre).id)
      )
    }
    if (developer) {
      return games.filter(
        (Game) => Game.developer === developers.find(d => d.name.toLowerCase() === developer.toLowerCase()).id
      )
    }
    if (publisher) {
      console.log(publisher)
      return games.filter(
        (Game) => Game.publisher === publishers.find(p => p.name.toLowerCase() === publisher.toLowerCase()).id
      )
    }

    return games
  }

  static async getDev () {
    return developers
  }

  static async getPub () {
    return publishers
  }

  static async getByID ({ id }) {
    const Game = games.find(Game => Game.id === id)
    return Game
  }

  static async create ({ input }) {
    const newGame = {
      id: randomUUID(),
      ...input
    }

    games.push(newGame)
    return newGame
  }

  static async delete ({ id }) {
    const gameIndex = games.findIndex(game => game.id === id)
    if (gameIndex === -1) return false

    games.splice(gameIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const gameIndex = games.findIndex(Game => Game.id === id)

    if (gameIndex === -1) return false

    games[gameIndex] = {
      ...games[gameIndex],
      ...input
    }

    return games[gameIndex]
  }
}
