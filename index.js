'use strict'

module.exports = function stringPermutations(letters, opts) {
  opts = opts || {}
  var maxSize = typeof opts === 'number'
    ? opts
    : opts.maxSize
  var recursive = opts && opts.recursive

  if (!letters) {
    throw new TypeError('Expected letters')
  }

  if (typeof maxSize !== 'number') {
    throw new TypeError('Expected the size to be a number')
  }

  function permutations(letters, size) {
    var results = []
    for (var i = 0; i < letters.length; i++) {
      var res = letters[i]
      if (size === 1) {
        results.push(res)
      } else {
        var rest = permutations(letters, size - 1)
        for (var j = 0; j < rest.length; j++) {
          results.push(res + rest[j])
        }
      }
    }
    return results
  }

  if (recursive) {
    var results = []
    for (var i = 1; i <= maxSize; i++) {
      results = results.concat(permutations(letters, i))
    }
    return results
  }

  return permutations(letters, maxSize)
}
