const UserRepo = require('./user.memory.repository');

const getAll = () => UserRepo.getAll();

const getOne = (id) => UserRepo.getOne(id);

const addOne = newParam => UserRepo.insert(newParam);

const remove = id => UserRepo.delete(id);

const update = (id, updateParam) => UserRepo.update(id, updateParam);

module.exports = {
  getAll, getOne,
  addOne,
  remove,
  update
};
