const userService = require('./user.service');

const getAll = (req, reply) => {
  const users = userService.getAll();

  reply.send(users);
};

const getOne = (req, reply) => {
  const { userId } = req.params;
  const user = userService.getOne(userId);

  reply.send(user);
};

const add = (req, reply) => {
  const newParam =  req.body;
  const newUser = userService.addOne(newParam);

  reply.code(201).send(newUser);
}

const remove = (req, reply) => {
  const { userId } = req.params;
  userService.remove(userId);

  reply.code(204).send();
}

const update = (req, reply) => {
  const { userId } = req.params;
  const updateParam =  req.body;
  const updateUser = userService.update(userId, updateParam);

  reply.code(200).send(updateUser);
}

module.exports = {
  getAll, getOne,
  add,
  remove,
  update
}
