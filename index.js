require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tw', (req, res) => {
    res.send('vikas_saini_7_')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login Now </h1>')
})

app.get('/yt', (req, res) => {
    res.send('<h2>Youtube.com</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})