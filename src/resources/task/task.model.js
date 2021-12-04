const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(options) {
    this.id = uuidv4();
    this.title = options.title;
    this.order = options.order;
    this.description = options.description;
    this.userId = options.userId;
    this.boardId = options.boardId;
    this.columnId = options.columnId;
  }
}

module.exports = Task;
