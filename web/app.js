import express, { json } from 'express'
import { gamesRouter } from '../routes/game-Routes.js'
import { corsMiddleware } from '../middlewares/cors.js'

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1>')
})

app.use('/videoGames', gamesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
