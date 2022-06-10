const { Router } = require('express');
const Starbucks = require('../models/Starbucks');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingDrink = await Starbucks.getById(id);
    res.json(matchingDrink);
  })

  .get('/', async (req, res) => {
    const drinkInfo = await Starbucks.getAll();
    const drinkData = drinkInfo.map(({ name, calories }) => ({ name, calories }));
    res.json(drinkData);
  });
