let foo = function (_left, _right) {
  if (_left[Symbol.for("+")]) return _left[Symbol.for("+")](_right);else return _left + _right;
}(x, y);
