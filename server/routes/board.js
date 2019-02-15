'use strict';

const express = require('express');

const router = express.Router();

const cards = []; // use bookshelf to grab card data from database

router.get('/', (req, res) => {
  console.log('HIT: GET');
  return res.json(cards);
});

router.post('/', (req, res) => {
  console.log('HIT: POST');
  // create board item
});

router.put('/', (req, res) => {
  console.log('HIT: PUT');
  // update board item
});

router.delete('/', (req, res) => {
  console.log('HIT: DELETE');
  // delete board item
});

module.exports = router;
