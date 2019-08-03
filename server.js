// Dependencies
const express = require('express')
const methodOverride  = require('method-override')
const mongoose = require ('mongoose')
const session = require ('express-session')
require('dotenv').config()
const app = express ()
const db = mongoose.connection


// Configuration
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(session({
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized: false
}))
// STYLING OWN CSS
app.use(express.static('public'))

// Database
// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Routes
// Welcome Page
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

// Behavior Page
app.get('/behaviors', (req, res) => {
  res.render('behaviors/index.ejs')
})
// Store

// Community
app.get('/community', (req, res) => {
  if (req.session.currentUser) {
    res.render('community/index.ejs')
  } else {
    res.redirect('/sessions/new')
  }
})

// ABOUT

// CONTROLLERS
const behaviorsController = require('./controllers/behaviors.js')
app.use('/behaviors', behaviorsController)
const userController = require('./controllers/users.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions.js')
app.use('/sessions', sessionsController)
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
