# fizzbuzz

> Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”. — http://wiki.c2.com/?FizzBuzzTest

## Installation

This package has no production dependencies, however development dependencies can be installed using `npm`.

```js
npm install
```

Or for the pedantic:

```js
npm install --only=dev
```

## Usage

### The Classic Example

To run the classic example. (This will run `src/main.js`):

```js
node .
```

### Customised Scenarios

To choose your own _Fizz_ and _Buzz_ numbers:

```js
const { fizzbuzz } = require("./src/fizzbuzz");

const fn = fizzbuzz({ fizz: 3, buzz: 5 });

fn(1); // '1'
fn(3); // 'Fizz'
fn(5); // 'Buzz'
fn(15); // 'FizzBuzz'
```

## Tests

Testing is performed using `jest`.

```js
npm run test
```

## Code-style

Staged changes are automatically linted and formatted on `pre-commit` using `pretty-quick` and `husky`.

### Linting

Linting is performed using `eslint`.

```js
npm run lint
```

### Formatting

Formatting is performed using `prettier`.

```js
npm run format
```
