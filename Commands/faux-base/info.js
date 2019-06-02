const { Command } = require('faux-classes')

module.exports = class Info extends Command {
  get name() { return 'info' }
  get aliases() { return ['ℹ'] }

  async exec(message, args) {
    let servers = await this.client.serverCount();
    let embed = {
      color: this.client.config.color_scheme,
      title: `Information about ${this.client.user.username}.`,
      description: 'This bot is using [Faux](https://github.com/Snazzah/Faux)\n\n' 
                  + `**:bulb: WS Ping**: ${this.client.ping}\n`
                  + `**:computer: Faux Version** ${this.client.FAUX_VER}\n`
                  + `**:clock: Uptime**: ${process.uptime() ? process.uptime().toString().toHHMMSS() : "???"}\n`
                  + `**:gear: Memory Usage**: ${(process.memoryUsage().heapUsed / 1000000).toFixed(2)} MB\n`
                  + `**:file_cabinet: Servers**: ${servers.formatNumber()}`,
      thumbnail: {
        url: "https://raw.githubusercontent.com/Snazzah/Faux/master/Assets/icon_blackoutline_color.png"
      }
    }

    message.channel.send("", { embed })
  }

  get permissions() { return ['embed'] }

  get helpMeta() { return {
    category: 'General',
    description: 'Gets general info about the bot.'
  } }
}