'use strict'

const Promise = require('any-promise')

module.exports = function defer () {
  const deferred = {}

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}
