const BoardRepo = require('./board.memory.repository');
const ColumnRepo = require('../column/column.memory.repository');
const TaskRepo = require('../task/task.memory.repository');

const getAll = () => BoardRepo.getAll();

const getOne = (id) => BoardRepo.getOne(id);

const addOne = newParam => {
  // eslint-disable-next-line no-param-reassign
  newParam.columns = newParam.columns.map(c => ColumnRepo.insert(c));
  return BoardRepo.insert(newParam);
};

const remove = id => {
  const board = BoardRepo.getOne(id);

  TaskRepo.deleteAllTasksOnBoard(id);
  board.columns.forEach(c => ColumnRepo.delete(c.id));

  BoardRepo.delete(id);
};

const update = (id, updateParam) => {
  const board = BoardRepo.getOne(id);

  board.columns.forEach(c => ColumnRepo.delete(c.id));
  updateParam.columns.forEach(c => ColumnRepo.update(c.id, c));

  return BoardRepo.update(id, updateParam);
};

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
