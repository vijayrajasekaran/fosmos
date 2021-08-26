'use strict'

// Models
const Sample = require('../models/Sample')

module.exports = {
  // Sample
  sampleMethod: async (req, reply) => {
    try {
      let data = await Sample.find()
      if (data.length === 0) {
        const addData = new Sample({ msg: 'Fosmos.js' })
        await addData.save()
        data = await Sample.find()
        return reply.nextRender('/sample', { msg: data[0].msg })
      }
      return reply.nextRender('/sample', { msg: data[0].msg })
    } catch (err) {
      req.log.error(err)
    }
  }
}
