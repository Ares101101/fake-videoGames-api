import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:1234',
  'http://localhost:8080',
  'https://videoGames.com',
  'https://diego.dev',
  '*'
]

export const corsMiddleware = ({ acceptedorigns = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error('NOT ALLOWED BY CORS'))
  }
})
