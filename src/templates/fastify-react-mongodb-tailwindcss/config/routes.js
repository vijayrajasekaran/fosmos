'use strict'

// Controllers
const sampleController = require('../controllers/sampleController')

module.exports = [
  {
    method: 'GET',
    url: '/view',
    handler: (req, reply) => {
      reply.view('/views/sample.pug', { text: 'Rendered with view-engine' })
    }
  },
  {
    method: 'GET',
    url: '/',
    handler: sampleController.sampleMethod
  }
]
