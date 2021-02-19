const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
  // res.send(Bread)
})

breads.get('/new', (req, res) => {
    res.render('new')
})

breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})

breads.post('/', (req, res) => {
  console.log(req.body)
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

module.exports = breads
