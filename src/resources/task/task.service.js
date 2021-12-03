const { v4: uuidv4 } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const validResource = require('../../utils/infoMessages')('task');
const TaskRepo = require('./task.memory.repository');
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

const getAll = (boardId) => TaskRepo.getAll(boardId);

const getOne = (ids) => {
  validId(ids.boardId);
  validId(ids.taskId);
  const task = TaskRepo.getOne(ids);
  checkExistElement(task, ids.taskId);

  return task;
};

const addOne = newParam => TaskRepo.insert(newParam);

const remove = ids => {
  validId(ids.boardId);
  validId(ids.taskId);
  const task = TaskRepo.getOne(ids);
  checkExistElement(task, ids.taskId);

  TaskRepo.delete(ids);
};

const update = (ids, updateParam) => {
  validId(ids.boardId);
  validId(ids.taskId);
  const task = TaskRepo.getOne(ids);
  checkExistElement(task, ids.taskId);

  return TaskRepo.update(ids, updateParam);
};

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
