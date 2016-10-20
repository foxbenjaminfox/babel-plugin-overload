let foo = function (_left, _right) {
  if (_left[Symbol.for("+")]) return _left[Symbol.for("+")](_right);else return _left + _right;
}(function (_left2, _right2) {
  if (_left2[Symbol.for("+")]) return _left2[Symbol.for("+")](_right2);else return _left2 + _right2;
}(function (_left3, _right3) {
  if (_left3[Symbol.for("/")]) return _left3[Symbol.for("/")](_right3);else return _left3 / _right3;
}(f(function (_left4, _right4) {
  if (_left4[Symbol.for("+")]) return _left4[Symbol.for("+")](_right4);else return _left4 + _right4;
}(a, b)), 2), function (_left5, _right5) {
  if (_left5[Symbol.for("*")]) return _left5[Symbol.for("*")](_right5);else return _left5 * _right5;
}(w, g(function (_left6, _right6) {
  if (_left6[Symbol.for("*")]) return _left6[Symbol.for("*")](_right6);else return _left6 * _right6;
}(x, y)))), typeof function (_left7, _right7) {
  if (_left7[Symbol.for("-")]) return _left7[Symbol.for("-")](_right7);else return _left7 - _right7;
}(f, g));
