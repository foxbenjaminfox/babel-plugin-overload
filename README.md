# babel-plugin-operator-overloading

This plugin allows you to overload operators in your Javascript code.

Compare with Python:

````py
class Addable:
  def __add__(self, other):
    return # Some computation using self and other
````
In Javascript with this plugin:
````js
class Addable {
  [Symbol.for('+')] (other) {
    return # some computation using this and other
  }
}
````

## Example

**In**

```js
x + y
```

**Out**

```js
function (_left, _right) {
  if (_left[Symbol.for("+")]) return _left[Symbol.for("+")](_right);else return _left + _right;
}(x, y);
```

## Supported Operators
At the moment, all binary operators are supported. Unary operators are coming soon.

The full supported list is:
- The arithmetic operators: `+`, `-`, `/`, `*`, `%`, `**`
- The bitwise operators: `&`, `|`, `^`
- The bitshift operators: `>>`, `<<`, `>>>`, `<<<`
- The equality operators: `==`, `===`, `!=`, `!==`
- The inequality operators: `>`, `<`, `>=`, `<=`
- The remaining miscellaneous operators: `in` and `instanceof`

To overload any of them, define a method named with the Symbol you get with `Symbol.for` for the appropriate operator. For instance, use `Symbol.for('+')` to overload the `+` operator, and `Symbol.for('in')` to overload the `in` operator.

You can define the overloading method on the object itself or anywhere on the object's prototype chain.

At the moment, overloading is only supported for the left side value. Support for overloading on the right side value (the equivalent of Python's `__radd__` family of methods) is coming soon.

## Installation

```sh
$ npm install babel-plugin-operator-overloading
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["operator-overloading"]
}
```

### Via CLI

```sh
$ babel --plugins operator-overloading script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["operator-overloading"]
});
```
