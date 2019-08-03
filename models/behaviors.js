const mongoose = require('mongoose')

const behaviorSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  img: { type: String }
}, {timestamps: true}
)

const Behavior = mongoose.model('Behavior', behaviorSchema)

module.exports = Behavior
