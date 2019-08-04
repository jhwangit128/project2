const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  name: { type: String },
  use: { type: String },
  description: { type: String },
  img: { type: String },
  price: { type: Number, min: 0 },
  qty: { type: Number, min: 0 }
}, {timestamps: true}
)

const Store = mongoose.model('Store', storeSchema)

module.exports = Store
