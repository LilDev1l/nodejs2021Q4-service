const BoardOptions = require('./board.options');
const BoardController = require('./board.controller');
const taskRoute = require('../task/task.router');
const { validId } = require('../../utils/errorProcessing');

function boardRoute(fastify, options, done) {
  fastify.get('/', BoardOptions.getAllBoardsOpts, BoardController.getAll);
  fastify.get('/:boardId', BoardOptions.getOneBoardOpts, BoardController.getOne);
  fastify.post('/', BoardOptions.postBoardOpts, BoardController.add);
  fastify.delete('/:boardId', BoardOptions.deleteBoardOpts, BoardController.remove);
  fastify.put('/:boardId', BoardOptions.putBoardOpts, BoardController.update);

  fastify.addHook('preHandler', validId('boardId'));

  fastify.register(taskRoute, { prefix: '/:boardId/tasks' });

  done();
}

module.exports = boardRoute;
