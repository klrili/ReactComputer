const { Schema, model } = require('mongoose');
const cartItem = new Schema({
  itemId: { type: String },
  quantity: { type: Number },
});
module.exports = model('cartItem', cartItem);
