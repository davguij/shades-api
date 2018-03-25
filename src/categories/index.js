'use strict';

async function categories(fastify, options) {
  fastify.get('/c', async (request, reply) => {
    return { hello: 'get all categories' };
  });

  fastify.get('/c/:cat', async (request, reply) => {
    return { 'get one cat': request.params.cat };
  });
}

module.exports = categories;
