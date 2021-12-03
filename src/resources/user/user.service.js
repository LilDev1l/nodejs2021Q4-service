const { v4: uuidv4 } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const validResource = require('../../utils/infoMessages')('user');
const UserRepo = require('./user.memory.repository');
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

const getAll = () => UserRepo.getAll();

const getOne = (id) => {
  validId(id);
  const user = UserRepo.getOne(id);
  checkExistElement(user, id);

  return user;
};

const addOne = newParam => UserRepo.insert(newParam);

const remove = id => {
  validId(id);
  const user = UserRepo.getOne(id);
  checkExistElement(user, id);

  const allTasksUsers = TaskRepo.getAllTasksUsers(id);
  allTasksUsers.forEach(task => TaskRepo.update({ taskId: task.id, boardId: task.boardId }, { userId: null }));

  UserRepo.delete(id);
};

const update = (id, updateParam) => {
  validId(id);
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
