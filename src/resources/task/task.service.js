const TaskRepo = require('./task.memory.repository');

const getAll = (boardId) => TaskRepo.getAll(boardId);

const getOne = (ids) => TaskRepo.getOne(ids);

const addOne = newParam => TaskRepo.insert(newParam);

const remove = ids => TaskRepo.delete(ids);

const update = (ids, updateParam) => TaskRepo.update(ids, updateParam);

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
