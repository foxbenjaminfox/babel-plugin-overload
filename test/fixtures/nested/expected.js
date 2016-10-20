let foo = function (_left, _right) {
  if (_left[Symbol.for("+")]) return _left[Symbol.for("+")](_right);else return _left + _right;
}(function (_left2, _right2) {
  if (_left2[Symbol.for("+")]) return _left2[Symbol.for("+")](_right2);else return _left2 + _right2;
}(x, y), z);
