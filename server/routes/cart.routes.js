const Router = require('express');
const cartItem = require('../models/cartItem');
const config = require('config');
const router = new Router();

router.post('/card', async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    console.log(req.body);
    const item = new cartItem({ itemId, quantity });
    await item.save();
    return res.json({ message: 'item was created' });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error51' });
  }
});
module.exports = router;

router.post('/cardquantity', async (req, res) => {
  try {
    const { itemId, quantity } = req.body;

    console.log(req.body);

    const item = new cartItem({ itemId });

    await cartItem.findOneAndUpdate({ itemId: itemId }, { quantity: quantity }, { new: true });
    return res.json({ message: 'item was edited' });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error51' });
  }
});
module.exports = router;

router.get('/cartItems', async (req, res) => {
  try {
    const item = await cartItem.find();
    return res.json(item);
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});
module.exports = router;
