'use strict'

// Dependencies
const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema({
  msg: String
})

module.exports = mongoose.model('Sample', sampleSchema)
