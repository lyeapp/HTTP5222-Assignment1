const express = require('express');
const router = express.Router();
const { addToy, initializeToys } = require('../models/db');

router.get('/add-toy', (req, res) => {
  res.render('add-toy');
});

router.post('/add-toy', async (req, res) => {
  const { name, description, price } = req.body;
  await addToy(name, description, price);
  res.redirect('/toys');
});

router.get('/initialize-toys', async (req, res) => {
  await initializeToys();
  res.send('Toy collection initialized.');
});

module.exports = router;

