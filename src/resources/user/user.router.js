const UserOptions = require('./user.options');
const UserController = require('./user.controller');

function userRoute(fastify, options, done) {
  fastify.get('/', UserOptions.getAllUsersOpts, UserController.getAll);
  fastify.get('/:userId', UserOptions.getOneUserOpts, UserController.getOne);
  fastify.post('/', UserOptions.postUserOpts, UserController.add);
  fastify.delete('/:userId', UserOptions.deleteUserOpts, UserController.remove);
  fastify.put('/:userId', UserOptions.putUserOpts, UserController.update);

  done();
}

module.exports = userRoute;
