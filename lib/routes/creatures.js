const { Router } = require('express');
const Creature = require('../models/creatureModel');

module.exports = Router()
  .post('/', (req, res, next) => {
    Creature
      .create(req.body)
      .then(creature => res.send(creature))
      .catch(next);
  });
