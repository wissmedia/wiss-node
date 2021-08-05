const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 2021
const host = '0.0.0.0'

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`)
})

app.set('view engine', 'ejs')
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello')
})