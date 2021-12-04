const { StatusCodes } = require('http-status-codes');
const infoMessagesWithContext = require('../../utils/errorProcessing').infoMessagesWithContext('task');
const TaskRepo = require('./task.memory.repository');
const { NotFoundError } = require('../../errors/index');

function checkExistElement(element, id) {
  if (!element) {
    throw new NotFoundError(StatusCodes.NOT_FOUND, infoMessagesWithContext.notFoundMessage(id));
  }
}

const getAll = (boardId) => TaskRepo.getAll(boardId);

const getOne = (ids) => {
  const task = TaskRepo.getOne(ids);
  checkExistElement(task, ids.taskId);

  return task;
};

const addOne = newParam => TaskRepo.insert(newParam);

const remove = ids => {
  const task = TaskRepo.getOne(ids);
  checkExistElement(task, ids.taskId);

  TaskRepo.delete(ids);
};

const update = (ids, updateParam) => {
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
