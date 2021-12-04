const { StatusCodes } = require('http-status-codes');
const infoMessagesWithContext = require('../../utils/errorProcessing').infoMessagesWithContext('user');
const UserRepo = require('./user.memory.repository');
const TaskRepo = require('../task/task.memory.repository');
const { NotFoundError } = require('../../errors/index');

function checkExistElement(element, id) {
  if (!element) {
    throw new NotFoundError(StatusCodes.NOT_FOUND, infoMessagesWithContext.notFoundMessage(id));
  }
}

const getAll = () => UserRepo.getAll();

const getOne = (id) => {
  const user = UserRepo.getOne(id);
  checkExistElement(user, id);

  return user;
};

const addOne = newParam => UserRepo.insert(newParam);

const remove = id => {
  const user = UserRepo.getOne(id);
  checkExistElement(user, id);

  const allTasksUsers = TaskRepo.getAllTasksUsers(id);
  allTasksUsers.forEach(task => TaskRepo.update({ taskId: task.id, boardId: task.boardId }, { userId: null }));

  UserRepo.delete(id);
};

const update = (id, updateParam) => {
  const user = UserRepo.getOne(id);
  checkExistElement(user, id);

  return UserRepo.update(id, updateParam);
};

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
