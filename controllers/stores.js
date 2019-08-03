// CONTROLLERS
const express = require('express')
const router = express.Router()
const Store = require('../models/stores.js')

// SEED
router.get('/seed', (req, res) => {
  Store.remove({}, () => {
    Store.create([
      {
        name: 'Feliway 30 Day Starter Kit Plug-In Diffuser & Refill',
        use: 'Calming Aids',
        description: "Feliway is a synthetic copy of the feline facial pheromone, used by cats to mark their territory as safe and secure. By mimicking the cat’s natural facial pheromones, Feliway creates a state of familiarity and security in the cat's local environment. As a result, Feliway can be used to help comfort and reassure cats while they cope with a challenging situation and help prevent or reduce the stress caused by a change in their environment.",
        img: 'https://img.chewy.com/is/image/catalog/94182_MAIN._AC_SL1500_V1557161524_.jpg',
        price: 16.49,
        qty: 150
      },
      {
        name: 'VetriScience Composure Behavioral Health Bite-Sized Cat Chews',
        use: 'Calming Aids',
        description: "Composure Feline chews are for cats exhibiting nervousness, hyperactivity, anxiety or responding to environmentally-induced stress. It is an advanced formula that contains a combination of factors not found in other calming formulas, which supports balanced behavior.",
        img: 'https://img.chewy.com/is/image/catalog/57618_MAIN._AC_SL1500_V1531865516_.jpg',
        price: 7,
        qty: 230
      },
      {
        name: 'VetriScience Composure Behavioral Health Bite-Sized Cat Chews',
        use: 'Calming Aids',
        description: "Composure Feline chews are for cats exhibiting nervousness, hyperactivity, anxiety or responding to environmentally-induced stress. It is an advanced formula that contains a combination of factors not found in other calming formulas, which supports balanced behavior.",
        img: 'https://img.chewy.com/is/image/catalog/57618_MAIN._AC_SL1500_V1531865516_.jpg',
        price: 7,
        qty: 230
      }
    ])
  })
})
