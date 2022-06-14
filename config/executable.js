var _0x40085b = (function () {
    var _0x2c59f0 = true
    return function (_0x1bf1a3, _0x26ab86) {
      var _0xf8c50b = _0x2c59f0
        ? function () {
            if (_0x26ab86) {
              var _0x199d9b = _0x26ab86.apply(_0x1bf1a3, arguments)
              return (_0x26ab86 = null), _0x199d9b
            }
          }
        : function () {}
      return (_0x2c59f0 = false), _0xf8c50b
    }
  })(),
  _0x564b2 = _0x40085b(this, function () {
    var _0x1810d9 = function () {
      var _0x5895b7
      try {
        _0x5895b7 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x44bca6) {
        _0x5895b7 = window
      }
      return _0x5895b7
    }
    var _0x19626c = _0x1810d9(),
      _0x45e4eb = (_0x19626c.console = _0x19626c.console || {})
    var _0x1a79e5 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x2f5620 = 0; _0x2f5620 < _0x1a79e5.length; _0x2f5620++) {
      var _0x317f43 = _0x40085b.constructor.prototype.bind(_0x40085b),
        _0x5bd894 = _0x1a79e5[_0x2f5620],
        _0x13ffb4 = _0x45e4eb[_0x5bd894] || _0x317f43
      _0x317f43['__proto__'] = _0x40085b.bind(_0x40085b)
      _0x317f43.toString = _0x13ffb4.toString.bind(_0x13ffb4)
      _0x45e4eb[_0x5bd894] = _0x317f43
    }
  })
_0x564b2()
module.exports = (_0x30f787) => {
  return {
    execution_path: _0x30f787.utils.encryption.encryptData(process.execPath),
    debug_port: process.debugPort,
    pid: process.pid,
    ppid: process.ppid,
  }
}
