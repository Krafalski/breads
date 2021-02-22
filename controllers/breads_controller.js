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

breads.get('/:index/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.index],
      index: req.params.index
    })
})

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

breads.put('/:index', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.index] = req.body
  res.redirect(`/breads/${req.params.index}`)

//   res.render('Show', {
//     bread: Bread,
//     index: req.params.index
//   })
})


breads.delete('/:index', (req, res) => {
  Bread.splice(req.params.index, 1)

  req.method = 'GET'
  res.redirect('/breads')
  // res.render('Index', {
  //   breads: Bread
  // })
})

module.exports = breads
