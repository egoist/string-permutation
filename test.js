import test from 'ava'
import fn from './'

test('simple', t => {
  t.deepEqual(fn('a', 2), ['aa'])
})

test('more', t => {
  t.deepEqual(fn('ab', 2), ['aa', 'ab', 'ba', 'bb'])
})

test('weird, maxSize smaller than string length', t => {
  t.pass(fn('ab', 1), ['a', 'b'])
})

test('recursive, include those smaller than maxSize', t => {
  const ret = fn('ab', {maxSize: 2, recursive: true})
  t.is(ret[0], 'a')
  t.is(ret[1], 'b')
  t.is(ret[ret.length - 1], 'bb')
})
