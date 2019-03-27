'use strict'

const test = require('tape')
const defer = require('./')

test('resolves', t => {
  t.plan(1)

  const deferred = defer()

  deferred.promise.then(
    value => t.pass(`resolved with ${value}`),
    error => t.fail(`rejected with ${error}`)
  )

  deferred.resolve('yep')
})

test('rejects', t => {
  t.plan(1)

  const deferred = defer()

  deferred.promise.then(
    value => t.fail(`resolved with ${value}`),
    error => t.pass(`rejected with ${error}`)
  )

  deferred.reject('nope')
})
