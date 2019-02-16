'use strict';

const express = require('express');
const Card = require('../../database/models/Card');

const router = express.Router();

router.get('/cards', (req, res) => {
  console.log('HIT: GET');

  return Card.fetchAll()
  .then(fetched => {
    console.log(fetched);
    return res.json(fetched);
  });
});

router.post('/', (req, res) => {
  console.log('HIT: POST');
  let { title, body, priority, status, created_by, assigned_to } = req.body;

  console.log(req.body);

  switch (priority) {
    case 'Low':
      priority = 1;
      break;
    case 'Medium':
      priority = 2;
      break;
    case 'High':
      priority = 3;
      break;
    case 'Blocker':
      priority = 4;
      break;
    default:
      res.send('Invalid priority.');
      throw new Error('Invalid priority. Make sure the switch case matches the priority options on your form.');
  }

  switch (status) {
    case 'In Queue':
      status = 1;
      break;
    case 'In Progress':
      status = 2;
      break;
    case 'Done':
      status = 3;
      break;
    default:
      res.send('Invalid status.');
      throw new Error('Invalid status. Make sure the switch case matches the priority options on your form.');
  }

  console.log(`priority is... ${ priority }`);
  console.log(`status is... ${ status }`);

  /**
   {
     "title": "Title",
     "body": "A brief description",
     "priority": "Low",
     "status": "IN QUEUE",
     "created_by": "2",
     "assigned_to": "1"
   }
   */

  Card.forge({
    'title' : title,
    'body' : body,
    'priority_id' : priority,
    'status_id' : status,
    'created_by' : created_by,
    'assigned_to' : assigned_to
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
