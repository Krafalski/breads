const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread
      }
    )
  // res.send(Bread)
})

breads.get('/:arrayIndex', (req, res) => {

  // res.send(Bread[req.params.arrayIndex])
})

breads.post('/', (req, res) => {
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

module.exports = breads
