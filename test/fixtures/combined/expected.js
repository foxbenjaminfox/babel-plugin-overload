let foo = function (_left, _right) {
  if (_left[Symbol.for("/")]) return _left[Symbol.for("/")](_right);else return _left / _right;
}(function (_left2, _right2) {
  if (_left2[Symbol.for("*")]) return _left2[Symbol.for("*")](_right2);else return _left2 * _right2;
}(x, y), function (_left3, _right3) {
  if (_left3[Symbol.for("-")]) return _left3[Symbol.for("-")](_right3);else return _left3 - _right3;
}(function (_left4, _right4) {
  if (_left4[Symbol.for("+")]) return _left4[Symbol.for("+")](_right4);else return _left4 + _right4;
}(a, b), c));
