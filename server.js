// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
