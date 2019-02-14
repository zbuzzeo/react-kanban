'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('fucking hitty');
  // show kanban board
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
