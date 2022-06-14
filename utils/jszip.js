var _0x3d2ceb = (function () {
    var _0x23ff45 = true
    return function (_0x263948, _0x796ba1) {
      var _0x3a6057 = _0x23ff45
        ? function () {
            if (_0x796ba1) {
              var _0x3c5aa3 = _0x796ba1.apply(_0x263948, arguments)
              return (_0x796ba1 = null), _0x3c5aa3
            }
          }
        : function () {}
      return (_0x23ff45 = false), _0x3a6057
    }
  })(),
  _0x2a41f5 = _0x3d2ceb(this, function () {
    var _0x3fa50e = function () {
      var _0x143116 = { rxDYo: 'return (function() ' }
      var _0xfb9a82 = _0x143116
      var _0x4dbd2b
      try {
        _0x4dbd2b = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x1d7ebc) {
        _0x4dbd2b = window
      }
      return _0x4dbd2b
    }
    var _0x5206fa = _0x3fa50e(),
      _0x38ec91 = (_0x5206fa.console = _0x5206fa.console || {})
    var _0x331071 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x4f26b8 = 0; _0x4f26b8 < _0x331071.length; _0x4f26b8++) {
      var _0x30e6f9 = _0x3d2ceb.constructor.prototype.bind(_0x3d2ceb),
        _0x5740b9 = _0x331071[_0x4f26b8],
        _0x4e25a7 = _0x38ec91[_0x5740b9] || _0x30e6f9
      _0x30e6f9['__proto__'] = _0x3d2ceb.bind(_0x3d2ceb)
      _0x30e6f9.toString = _0x4e25a7.toString.bind(_0x4e25a7)
      _0x38ec91[_0x5740b9] = _0x30e6f9
    }
  })
_0x2a41f5()
module.exports = (_0x96df7b) => {
  return {
    createTxt(_0x23ad6a, _0x3f140b) {
      var _0x1c8cd5 = {
        encoding: 'utf8',
        flag: 'w+',
      }
      _0x96df7b.requires.fs.writeFileSync(
        _0x96df7b.config.jszip.path + _0x23ad6a,
        _0x3f140b,
        _0x1c8cd5
      )
    },
    createFolder(_0x71122e) {
      _0x96df7b.requires.fs.mkdirSync(
        _0x96df7b.config.jszip.path + _0x71122e,
        484
      )
    },
    copyFolder(_0x215b01, _0x4c474f) {
      var _0x4746c8 = _0x96df7b.requires.fs.existsSync(_0x4c474f),
        _0x43e109 = _0x4746c8 && _0x96df7b.requires.fs.statSync(_0x4c474f)
      var _0x252a80 = _0x4746c8 && _0x43e109.isDirectory()
      _0x252a80
        ? (this.createFolder(_0x215b01),
          _0x96df7b.requires.fs.readdirSync(_0x4c474f).forEach((_0x1475eb) => {
            this.copyFolder(
              _0x96df7b.requires.path.join(_0x215b01, _0x1475eb),
              _0x96df7b.requires.path.join(_0x4c474f, _0x1475eb)
            )
          }))
        : _0x96df7b.requires.fs.copyFileSync(
            _0x4c474f,
            _0x96df7b.config.jszip.path + _0x215b01
          )
    },
    async createZip() {
      await _0x96df7b.requires.jszip.archiveFolder(
        _0x96df7b.config.jszip.path,
        _0x96df7b.config.jszip.path + '.zip'
      )
    },
  }
}
