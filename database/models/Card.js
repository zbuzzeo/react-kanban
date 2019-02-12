'use strict';

const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  assigned_to() {
    return this.hasOne(User);
  }

  created_by() {
    return this.hasOne(User);
  }

  priority() {
    return this.hasOne(Priority);
  }

  status() {
    return this.hasOne(Status);
  }
}

module.exports = bookshelf.model('Card', Card);
