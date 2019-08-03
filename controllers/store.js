const express = require('express')
const router = express.Router()
const Cat = require('../models/cats.js')

//SEED
router.get('/seed', (req, res) => {
  Cat.remove({}, () => {
    Cat.create([
      {
        
      }
    ])
  })
})
