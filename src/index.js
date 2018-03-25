'use strict';
require('make-promises-safe'); // installs an 'unhandledRejection' handler
const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return { hello: 'bye' };
});

fastify.register(require('./categories/'));

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
