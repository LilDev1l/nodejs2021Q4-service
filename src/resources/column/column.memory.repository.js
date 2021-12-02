const Column = require('./column.model');

class ColumnRepository {
  static #columns = [];

  static getAll = () => this.#columns;

  static getOne = (id) => this.#columns.find(c => c.id === id);

  static insert = (newParam) => {
    const newColumn = new Column(newParam);
    this.#columns.push(newColumn);

    return newColumn;
  };

  static delete = (id) => {
    this.#columns = this.#columns.filter(c => c.id !== id);
  };

  static update = (id, updateParam) => {
    this.#columns = this.#columns.map(c => c.id === id
      ? { ...c, ...updateParam }
      : { ...c });

    return this.getOne(id);
  };
}

module.exports = ColumnRepository;
