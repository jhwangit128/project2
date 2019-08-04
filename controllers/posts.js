// CONTROLLERS
const express = require('express')
const router = express.Router()

// SHOW ROUTE
router.get('/new', (req, res) => {
  res.render('posts/new.ejs')
})

module.exports = router
