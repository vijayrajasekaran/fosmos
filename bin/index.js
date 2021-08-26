#!/usr/bin/env node

'use strict'

const args = process.argv.splice(process.execArgv.length + 2)
const command = args[0]

const Lib = require('../lib/index.js')
const fosmos = new Lib()

switch (command) {
  case 'dev':
    fosmos.launch()
    break
  case 'create':
    fosmos.createWizard()
    break
  default:
    fosmos.cmdError()
}
