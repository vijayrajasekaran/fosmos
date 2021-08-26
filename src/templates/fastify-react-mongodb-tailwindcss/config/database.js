'use strict'

// Dependencies
const fosmosPlugin = require('fastify-plugin')
const mongoose = require('mongoose')
const settings = require('./settings')

// Database
const db = async () => {
  try {
    mongoose.connect(
      `mongodb://localhost/${settings.db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = fosmosPlugin(db)
