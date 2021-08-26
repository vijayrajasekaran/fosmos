'use strict'

// Init fastify as fosmos
const settings = require('./config/settings')
const fosmos = require('fastify')(settings.fastify)

// Fastify plugins
const plugins = require('./config/plugins')
plugins.forEach(plugin => {
  fosmos.register(require(plugin.name), plugin.options)
})

// Routes
const routes = require('./config/routes')
routes.forEach(route => fosmos.route(route))

// Server
const open = require('open')
const exec = async () => {
  try {
    await fosmos.listen(settings.port)
    open(`http://localhost:${settings.port}/`)
  } catch (err) {
    fosmos.log.error(err)
    process.exit(1)
  }
}
exec()
