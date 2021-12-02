const User = require('./user.model');

class UserRepository {
  // eslint-disable-line
  static #users = [];

  static getAll = () => this.#users;

  static getOne = (id) => this.#users.find(u => u.id === id);

  static insert = (newParam) => {
    const newUser = new User(newParam);
    this.#users.push(newUser);

    return newUser;
  };

  static delete = (id) => {
    this.#users = this.#users.filter(u => u.id !== id);
  };


  static update = (id, updateParam) => {
    this.#users = this.#users.map(u => u.id === id
      ? { ...u, ...updateParam }
      : { ...u });

    return this.getOne(id);
  };
}

module.exports = UserRepository;
