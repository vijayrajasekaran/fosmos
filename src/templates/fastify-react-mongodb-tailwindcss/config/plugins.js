'use strict'

module.exports = [
  {
    name: './config/database',
    options: {}
  },
  {
    name: 'point-of-view',
    options: {
      engine: {
        pug: require('pug')
      }
    }
  },
  {
    name: 'fastify-nextjs',
    options: {}
  }
]
