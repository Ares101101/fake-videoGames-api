const express = require('express')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1>')
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
