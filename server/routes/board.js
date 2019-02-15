'use strict';

const express = require('express');

const router = express.Router();

const books = []; // use bookshelf to grab card data from database

router.get('/', (req, res) => {
  console.log('fucking hitty');
  return res.json(books);
});

router.post('/', (req, res) => {
  // create board item
});

router.put('/', (req, res) => {
  // update board item
});

router.delete('/', (req, res) => {
  // delete board item
});

module.exports = router;
