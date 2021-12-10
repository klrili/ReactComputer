const Router = require('express');
const Item = require('../models/Item');
const config = require('config');
const router = new Router();

router.post('/adminpanel', async (req, res) => {
  try {
    const { itemType, imageUrl, cardName, price, quantity } = req.body;
    console.log(req.body);
    const item = new Item({ itemType, imageUrl, cardName, price, quantity });
    await item.save();
    return res.json({ message: 'item was created' });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error51' });
  }
});
module.exports = router;



router.get('/items', async (req, res) => {
  try {
    const item = await Item.find();
    return res.json(item);
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});
module.exports = router;
