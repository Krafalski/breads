// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
