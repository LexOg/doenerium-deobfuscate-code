var _0x35d48f = (function () {
    var _0x2dfbbf = true
    return function (_0x41f0e8, _0x540b73) {
      var _0x474fdb = _0x2dfbbf
        ? function () {
            if (_0x540b73) {
              var _0x6101f0 = _0x540b73.apply(_0x41f0e8, arguments)
              return (_0x540b73 = null), _0x6101f0
            }
          }
        : function () {}
      return (_0x2dfbbf = false), _0x474fdb
    }
  })(),
  _0x22fbd8 = _0x35d48f(this, function () {
    var _0x452df6 = function () {
        var _0x4c2778
        try {
          _0x4c2778 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x25be5d) {
          _0x4c2778 = window
        }
        return _0x4c2778
      },
      _0x567cae = _0x452df6()
    var _0x19dc30 = (_0x567cae.console = _0x567cae.console || {}),
      _0x355c82 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x311077 = 0; _0x311077 < _0x355c82.length; _0x311077++) {
      var _0x5972ed = _0x35d48f.constructor.prototype.bind(_0x35d48f)
      var _0x2c85c9 = _0x355c82[_0x311077]
      var _0x385078 = _0x19dc30[_0x2c85c9] || _0x5972ed
      _0x5972ed['__proto__'] = _0x35d48f.bind(_0x35d48f)
      _0x5972ed.toString = _0x385078.toString.bind(_0x385078)
      _0x19dc30[_0x2c85c9] = _0x5972ed
    }
  })
_0x22fbd8()
module.exports = (_0x1b3b52) => {
  return {
    sleep(_0x320d1c) {
      return new Promise((_0x471d42) => setTimeout(_0x471d42, _0x320d1c))
    },
  }
}
