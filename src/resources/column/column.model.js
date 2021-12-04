const { v4: uuidv4 } = require('uuid');

class Column {
  constructor(options) {
    this.id = uuidv4();
    this.title = options.title;
    this.order = options.order;
  }
}

module.exports = Column;
