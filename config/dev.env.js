'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  HOST: '192.168.1.58',
  NODE_ENV: '"development"',
  BASE_API: '"https://api-dev"'
})
