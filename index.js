const express = require('express')
const test = require('./controller/index')
const app = express()

app.use('/', test)

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  console.log('Started')
})