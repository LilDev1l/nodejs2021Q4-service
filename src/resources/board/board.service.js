const { v4: uuidv4 } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const validResource = require('../../utils/constants')('board');
const BoardRepo = require('./board.memory.repository');
const ColumnRepo = require('../column/column.memory.repository');
const TaskRepo = require('../task/task.memory.repository');
const { InvalidDataInRequestError, NotFoundError } = require('../../errors/index');


function validId(id) {
  if (!uuidv4(id)) {
    throw new InvalidDataInRequestError(StatusCodes.BAD_REQUEST, validResource.uuidInvalidMessage(id));
  }
}
function checkExistElement(element, id) {
  if (!element) {
    throw new NotFoundError(StatusCodes.NOT_FOUND, validResource.notFoundMessage(id));
  }
}

const getAll = () => BoardRepo.getAll();

const getOne = (id) => {
  validId(id);
  const board = BoardRepo.getOne(id);
  checkExistElement(board, id);

  return board;
};

const addOne = newParam => {
  // eslint-disable-next-line no-param-reassign
  newParam.columns = newParam.columns.map(c => ColumnRepo.insert(c));
  return BoardRepo.insert(newParam);
};

const remove = id => {
  validId(id);
  const board = BoardRepo.getOne(id);
  checkExistElement(board, id);

  TaskRepo.deleteAllTasksOnBoard(id);
  board.columns.forEach(c => ColumnRepo.delete(c.id));

  BoardRepo.delete(id);
};

const update = (id, updateParam) => {
  validId(id);
  const board = BoardRepo.getOne(id);
  checkExistElement(board, id);

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
