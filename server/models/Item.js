const { Schema, model } = require('mongoose');
const Item = new Schema({
  itemType: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cardName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = model('Item', Item);
