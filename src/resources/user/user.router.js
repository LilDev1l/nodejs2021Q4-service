const UserOptions = require('./user.options');
const UserController = require('./user.controller');
const { validId } = require('../../utils/errorProcessing');

function userRoute(fastify, options, done) {
  fastify.get('/', UserOptions.getAllUsersOpts, UserController.getAll);
  fastify.get('/:userId', UserOptions.getOneUserOpts, UserController.getOne);
  fastify.post('/', UserOptions.postUserOpts, UserController.add);
  fastify.delete('/:userId', UserOptions.deleteUserOpts, UserController.remove);
  fastify.put('/:userId', UserOptions.putUserOpts, UserController.update);

  fastify.addHook('preHandler', validId('userId'));

  done();
}

module.exports = userRoute;
