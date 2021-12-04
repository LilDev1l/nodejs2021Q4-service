const { validate: uuidValidate } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const infoMessages = require('../../utils/infoMessages')('board');
const BoardRepo = require('./board.memory.repository');
const ColumnRepo = require('../column/column.memory.repository');
const TaskRepo = require('../task/task.memory.repository');
const { InvalidDataInRequestError, NotFoundError } = require('../../errors/index');


function validId(id) {
  if (!uuidValidate(id)) {
    throw new InvalidDataInRequestError(StatusCodes.BAD_REQUEST, infoMessages.uuidInvalidMessage(id));
  }
}

function checkExistElement(element, id) {
  if (!element) {
    throw new NotFoundError(StatusCodes.NOT_FOUND, infoMessages.notFoundMessage(id));
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
  const columns = newParam.columns.map(c => ColumnRepo.insert(c));
  const newParamWithColumns = { ...newParam, columns };

  return BoardRepo.insert(newParamWithColumns);
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
