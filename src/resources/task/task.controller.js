const { StatusCodes } = require('http-status-codes');
const taskService = require('./task.service');

const getAll = (req, reply) => {
  const { boardId } = req.params;
  const tasks = taskService.getAll(boardId);

  reply.code(StatusCodes.OK).send(tasks);
};

const getOne = (req, reply) => {
  const { taskId, boardId } = req.params;
  const task = taskService.getOne({ taskId, boardId });

  reply.code(StatusCodes.OK).send(task);
};

const add = (req, reply) => {
  const { boardId } = req.params;
  const newParam = { ...req.body, boardId };
  const newTask = taskService.addOne(newParam);

  reply.code(StatusCodes.CREATED).send(newTask);
};

const remove = (req, reply) => {
  const { taskId, boardId } = req.params;
  taskService.remove({ taskId, boardId });

  reply.code(StatusCodes.NO_CONTENT).send();
};

const update = (req, reply) => {
  const { taskId, boardId } = req.params;
  const updateParam = req.body;
  const updateTask = taskService.update({ taskId, boardId }, updateParam);

  reply.code(StatusCodes.OK).send(updateTask);
};

module.exports = {
  getAll, getOne,
  add,
  remove,
  update
};
