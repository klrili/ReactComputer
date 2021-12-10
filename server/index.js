const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const adminRouter = require('./routes/admin.routes');
const cartRouter = require('./routes/cart.routes');
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/auth', adminRouter);
app.use('/api/auth', cartRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'));
    app.listen(PORT, () => {
      console.log('server stared on port', PORT);
    });
  } catch (e) {}
};
start();
