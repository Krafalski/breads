// DEPENDENCIES
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')


// Routes
// INDEX 1/7
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})

// NEW 2/7
breads.get('/new', (req, res) => {
    res.render('new')
})

// EDIT 3/7
breads.get('/:index/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.index],
      index: req.params.index
    })
})

// SHOW 4/7
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex
    })
  } else {
    res.render('404')
  }
})

// CREATE 5/7
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

// UPDATE 6/7
breads.put('/:index', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.index] = req.body
  res.redirect(`/breads/${req.params.index}`)
})

// DELETE 7/7
breads.delete('/:index', (req, res) => {
  Bread.splice(req.params.index, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads
