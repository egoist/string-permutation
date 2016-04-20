# string-permutation [![NPM version](https://img.shields.io/npm/v/string-permutation.svg)](https://npmjs.com/package/string-permutation) [![NPM downloads](https://img.shields.io/npm/dm/string-permutation.svg)](https://npmjs.com/package/string-permutation) [![Build Status](https://img.shields.io/circleci/project/egoist/string-permutation/master.svg)](https://circleci.com/gh/egoist/string-permutation)

> Find all permutations of a string and by a given length.

## Install

```bash
$ npm install --save string-permutation
```

## Usage

```js
const permutation = require('string-permutation')

stringPermutation('ab', 2)
//=> ['aa', 'ab', 'ba', 'bb']

stringPermutation('ab', {maxSize: 2, recursive: true})
//=> ['a', 'b', 'aa', 'ab', 'ba', 'bb']

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
stringPermutation(alphabet, 2)
/**
[
  'aa',
  'ab',
  'ac',
  ...
  'zx',
  'zy',
  'zz'
]
*/
```

## API

### stringPermutation(input, [options])

#### input

Type: `string`

The allowed characters.

#### options

Type: `number` `object`

When it's a `number` we treat it as the `options.maxSize`

##### maxSize

The size of each item in the result.

##### recursive

Including the items whose length is smaller than `maxSize`.

## License

MIT © [EGOIST](https://github.com/egoist)
