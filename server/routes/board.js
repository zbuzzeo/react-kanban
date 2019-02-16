'use strict';

const express = require('express');
const convertPriority = require('../middleware/convertPriority');
const Card = require('../../database/models/Card');

const router = express.Router();

const cards = []; // use bookshelf to grab card data from database

router.get('/', (req, res) => {
  console.log('HIT: GET');
  return res.json(cards);
});

router.post('/', convertPriority, (req, res) => {
  console.log('HIT: POST');
  const { title, body, priority, status, created_by, assigned_to } = req.body;

  console.log(req.body);
  console.log(`priority is: ${ priority }`);

  /**
   {
     "title": "Title",
     "body": "A brief description",
     "priority": "Low",
     "status": "IN QUEUE",
     "created_by": "2",
     "assigned_to": "1",
   }
   */

  Card.forge({
    'title' : title,
    'body' : body,
    'priority' : priority,
    'status' : status,
    'created_by' : created_by,
    'assigned_to' : assigned_to,
    'updated_at' : new Date().toLocaleTimeString()
  })
    .save(null, { method : 'insert' })
    .then(() => {
      return new Card({ 'title': title })
        .fetch({ withRelated : ['priority', 'status', 'created_by', 'assigned_to'] })
        .then(selection => {
          const relations = selection.relations;
          const newPriority = relations.priority.attributes.name;
          const newStatus = relations.status.attributes.name;
          const newCreatedBy = relations.created_by.attributes.user_id;
          const newAssignedTo = relations.assigned_to.attributes.user_id;

          const payload = {
            'id': card.id,
            'title' : card.attributes.title,
            'body' : card.attributes.body,
            'priority' : newPriority,
            'status' : newStatus,
            'created_by' : newCreatedBy,
            'assigned_to' : newAssignedTo
          }

          return res.json(payload);
        });
    });
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
