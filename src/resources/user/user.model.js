const { v4: uuidv4 } = require('uuid');

class User {
  constructor(options) {
    this.id = uuidv4();
    this.name = options.name;
    this.login = options.login;
    this.password = options.password;
  }
}

module.exports = User;
