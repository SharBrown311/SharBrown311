const express = require('express')
const bountiesRouter = express.Router()
const bountyData = require('../bountyData')



bountiesRouter.route("/")
  .get((req, res, next) => {
    res.send(bountyData)
  })

  module.exports = bountiesRouter