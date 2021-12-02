const Task = require('./task.model');

class TaskRepository {
  static #tasks = [];

  static getAll = (boardId) => this.#tasks.filter(t => t.boardId === boardId);

  static getOne = (ids) => this.#tasks.find(t => t.boardId === ids.boardId && t.id === ids.taskId);

  static getAllTasksUsers = (userId) => this.#tasks.filter(t => t.userId === userId);

  static insert = (newParam) => {
    const newTask = new Task(newParam);
    this.#tasks.push(newTask);

    return newTask;
  };

  static delete = (ids) => {
    const deleteIndex = this.#tasks.findIndex(t => t.boardId === ids.boardId && t.id === ids.taskId);
    this.#tasks.splice(deleteIndex, 1);
  };

  static deleteAllTasksOnBoard = (boardId) => {
    this.#tasks = this.#tasks.filter(t => t.boardId !== boardId);
  };

  static update = (ids, updateParam) => {
    this.#tasks = this.#tasks.map(t => t.boardId === ids.boardId && t.id === ids.taskId
      ? { ...t, ...updateParam }
      : { ...t });

    return this.getOne(ids);
  };
}

module.exports = TaskRepository;
