const express = require('express');
const mongoose = require('mongoose');
const Image = require('./models/Image'); 
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/architecturecomfort', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Подключение к MongoDB успешно');
})
.catch((err) => {
  console.error('Ошибка подключения к MongoDB:', err);
});


app.use('/images', express.static(path.join(__dirname, 'uploads')));


app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).send('Ошибка при загрузке изображений');
  }
});


app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
