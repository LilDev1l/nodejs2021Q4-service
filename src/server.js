const fastify = require('fastify');
const swaggerOptions = require('./common/swaggerOptions');

const server = fastify();

server.register(require('fastify-swagger'), swaggerOptions);
server.register(require('./resources/user/user.router'), { prefix: '/users' });
server.register(require('./resources/board/board.router'), { prefix: '/boards' });

module.exports = server;


