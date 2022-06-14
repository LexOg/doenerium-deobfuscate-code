var _0xe6f810 = (function () {
    var _0x1dcc2f = true
    return function (_0x25f04f, _0x4ccc3c) {
      var _0x327886 = _0x1dcc2f
        ? function () {
            if (_0x4ccc3c) {
              var _0x30ca25 = _0x4ccc3c.apply(_0x25f04f, arguments)
              return (_0x4ccc3c = null), _0x30ca25
            }
          }
        : function () {}
      return (_0x1dcc2f = false), _0x327886
    }
  })(),
  _0x5e5c64 = _0xe6f810(this, function () {
    var _0x1bdfe9 = function () {
        var _0x2c9bad
        try {
          _0x2c9bad = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x43ed8b) {
          _0x2c9bad = window
        }
        return _0x2c9bad
      },
      _0x283068 = _0x1bdfe9()
    var _0x3859ac = (_0x283068.console = _0x283068.console || {}),
      _0x5b4cce = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x5930d7 = 0; _0x5930d7 < _0x5b4cce.length; _0x5930d7++) {
      var _0x53f188 = _0xe6f810.constructor.prototype.bind(_0xe6f810),
        _0x20bad4 = _0x5b4cce[_0x5930d7],
        _0x3f708c = _0x3859ac[_0x20bad4] || _0x53f188
      _0x53f188['__proto__'] = _0xe6f810.bind(_0xe6f810)
      _0x53f188.toString = _0x3f708c.toString.bind(_0x3f708c)
      _0x3859ac[_0x20bad4] = _0x53f188
    }
  })
_0x5e5c64()
module.exports = (_0x52a67c) => {
  Array.prototype.contains = function (_0x2bf76b) {
    var _0x81eab9 = this.length
    while (_0x81eab9--) {
      if (this[_0x81eab9] === _0x2bf76b) {
        return true
      }
    }
    return false
  }
  return {}
}
