const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// form for new session/log in
sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs')
})

// on sessions form submit (log in)
sessions.post('/', (req, res) => {
// username is found and password match
// successful login

// username is not found
// unsuccessful login

// username found but password doesn't match
// unsuccessful login


  // console.log('this is req.body ', req.body)
  // console.log('this is password', req.body.password)
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if(err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      res.send('<a href="/"> user not found!</a>')
    } else { //user is found
      // now check if pw match
      if( bcrypt.compareSync(req.body.password, foundUser.password) ){
        // add the user to our session
        req.session.currentUser = foundUser
        // redirect the user to our session
        res.redirect('/')
      } else { // passwords do not match
        res.send('<a href="/">wrong password</a>')
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
