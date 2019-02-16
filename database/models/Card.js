'use strict';

const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  assigned_to() {
    return this.hasOne('User', 'id', 'assigned_to');
  }

  created_by() {
    return this.hasOne('User', 'id', 'created_by');
  }

  priority() {
    return this.hasOne('Priority', 'id', 'priority_id');
  }

  status() {
    return this.hasOne('Status', 'id', 'status_id');
  }
}

module.exports = bookshelf.model('Card', Card);
