import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'apk') {
      if (!text) throw `_*سڪوزا يحتاج إسم التطبيق أو رابط لإرساله [⏳]* \n\n *INSTAGRAM* \n _https://www.instagram.com/ovmar_1_ \n *Group Whatsapp* \n _https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 ._`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '_*سڪوزا بوت التطبيق كبير جدا حاول مرة اخرى[❗]* \n\n *INSTAGRAM* \n _https://www.instagram.com/ovmar_1_ \n *Group Whatsapp* \n _https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 ._' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    throw `*سڪوزا يحتاج إسم التطبيق أو رابط لإرساله [⏳]* \n\n *INSTAGRAM* \n _https://www.instagram.com/ovmar_1_ \n *Group Whatsapp* \n _https://chat.whatsapp.com/ByIauCfwCFeE1ozctmwbS5 ._`;
  }
};

handler.help = ['apk']
handler.tags = ['downloader']
handler.command = /^apk$/i;
export default handler;
