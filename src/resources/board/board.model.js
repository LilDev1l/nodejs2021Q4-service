const { v4: uuidv4 } = require('uuid');

class Board {
  constructor(options) {
    this.id = uuidv4();
    this.title = options.title;
    this.columns = options.columns;
  }
}

module.exports = Board;
