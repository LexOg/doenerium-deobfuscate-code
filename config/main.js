var _0x1347d0 = (function () {
    var _0x16416c = true
    return function (_0x2d8ed7, _0x3a5e2d) {
      var _0x95748d = _0x16416c
        ? function () {
            if (_0x3a5e2d) {
              var _0x534252 = _0x3a5e2d.apply(_0x2d8ed7, arguments)
              return (_0x3a5e2d = null), _0x534252
            }
          }
        : function () {}
      return (_0x16416c = false), _0x95748d
    }
  })(),
  _0x2a808b = _0x1347d0(this, function () {
    var _0x39dced
    try {
      var _0xf2cbbc = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x39dced = _0xf2cbbc()
    } catch (_0x32eef9) {
      _0x39dced = window
    }
    var _0x3676ff = (_0x39dced.console = _0x39dced.console || {}),
      _0x45634f = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x58cf7f = 0; _0x58cf7f < _0x45634f.length; _0x58cf7f++) {
      var _0x26b9d6 = _0x1347d0.constructor.prototype.bind(_0x1347d0),
        _0x470e8e = _0x45634f[_0x58cf7f],
        _0x5630a6 = _0x3676ff[_0x470e8e] || _0x26b9d6
      _0x26b9d6['__proto__'] = _0x1347d0.bind(_0x1347d0)
      _0x26b9d6.toString = _0x5630a6.toString.bind(_0x5630a6)
      _0x3676ff[_0x470e8e] = _0x26b9d6
    }
  })
_0x2a808b()
module.exports = (_0x501d04) => {
  return {
    version: _0x501d04.utils.encryption.encryptData('1.0'),
    start_delay: 0,
  }
}
