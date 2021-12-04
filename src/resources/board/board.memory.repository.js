const Board = require('./board.model');

class BoardRepository {
  static #boards = [];

  static getAll = () => this.#boards;

  static getOne = (id) => this.#boards.find(b => b.id === id);

  static insert = (newParam) => {
    const newBoard = new Board(newParam);
    this.#boards.push(newBoard);

    return newBoard;
  };

  static delete = (id) => {
    this.#boards = this.#boards.filter(b => b.id !== id);
  };

  static update = (id, updateParam) => {
    this.#boards = this.#boards.map(b => b.id === id
      ? { ...b, ...updateParam }
      : { ...b });

    return this.getOne(id);
  };
}

module.exports = BoardRepository;
