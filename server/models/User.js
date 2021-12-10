const { Schema, model } = require('mongoose');
const User = new Schema({
  userName: { type: String, required: true },
  surName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
module.exports = model('User', User);
