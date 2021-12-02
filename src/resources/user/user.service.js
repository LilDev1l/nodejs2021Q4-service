const UserRepo = require('./user.memory.repository');
const TaskRepo = require('../task/task.memory.repository');

const getAll = () => UserRepo.getAll();

const getOne = (id) => UserRepo.getOne(id);

const addOne = newParam => UserRepo.insert(newParam);

const remove = id => {
  const allTasksUsers = TaskRepo.getAllTasksUsers(id);
  allTasksUsers.forEach(task => TaskRepo.update({ taskId: task.id, boardId: task.boardId }, { userId: null }));

  UserRepo.delete(id);
};

const update = (id, updateParam) => UserRepo.update(id, updateParam);

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
