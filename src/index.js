'use strict';
require('dotenv-safe').config();
require('make-promises-safe'); // installs an 'unhandledRejection' handler

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return { hello: 'bye' };
});

fastify.register(require('./categories/routes'));

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
