const mongoose = require('mongoose')

const shelterSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
  description: { type: String },
  map: { type: String },
  img: { type: String }
}, {timestamps: true}
)

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter
