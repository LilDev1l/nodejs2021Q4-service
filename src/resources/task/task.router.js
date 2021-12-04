const TaskOptions = require('./task.options');
const TaskController = require('./task.controller');
const { validId } = require('../../utils/errorProcessing');

function taskRoute(fastify, options, done) {
  fastify.get('/', TaskOptions.getAllTasksOpts, TaskController.getAll);
  fastify.get('/:taskId', TaskOptions.getOneTaskOpts, TaskController.getOne);
  fastify.post('/', TaskOptions.postTaskOpts, TaskController.add);
  fastify.delete('/:taskId', TaskOptions.deleteTaskOpts, TaskController.remove);
  fastify.put('/:taskId', TaskOptions.putTaskOpts, TaskController.update);

  fastify.addHook('preHandler', validId('taskId'));

  done();
}

module.exports = taskRoute;
