const { Router } = require('express');
const Creature = require('../models/creatureModel');

module.exports = Router()
  .post('/', (req, res, next) => {
    Creature
      .create(req.body)
      .then(creature => res.send(creature))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Creature
      .find()
      .then(creatures => res.send(creatures))
      .catch(next);
  });
