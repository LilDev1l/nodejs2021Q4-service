const TaskOptions = require('./task.options');
const TaskController = require('./task.controller');

function taskRoute(fastify, options, done) {
  fastify.get('/', TaskOptions.getAllTasksOpts, TaskController.getAll);
  fastify.get('/:taskId', TaskOptions.getOneTaskOpts, TaskController.getOne);
  fastify.post('/', TaskOptions.postTaskOpts, TaskController.add);
  fastify.delete('/:taskId', TaskOptions.deleteTaskOpts, TaskController.remove);
  fastify.put('/:taskId', TaskOptions.putTaskOpts, TaskController.update);

  done();
}

module.exports = taskRoute;
