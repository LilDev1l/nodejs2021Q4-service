const { StatusCodes } = require('http-status-codes');
const userService = require('./user.service');

const getAll = (req, reply) => {
  const users = userService.getAll();

  reply.code(StatusCodes.OK).send(users);
};

const getOne = (req, reply) => {
  const { userId } = req.params;
  const user = userService.getOne(userId);

  reply.code(StatusCodes.OK).send(user);
};

const add = (req, reply) => {
  const newParam =  req.body;
  const newUser = userService.addOne(newParam);

  reply.code(StatusCodes.CREATED).send(newUser);
}

const remove = (req, reply) => {
  const { userId } = req.params;
  userService.remove(userId);

  reply.code(StatusCodes.NO_CONTENT).send();
}

const update = (req, reply) => {
  const { userId } = req.params;
  const updateParam =  req.body;
  const updateUser = userService.update(userId, updateParam);

  reply.code(StatusCodes.OK).send(updateUser);
}

module.exports = {
  getAll, getOne,
  add,
  remove,
  update
}
