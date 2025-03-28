const config = require('../config');
const {
  cmd,
  commands
} = require('../command');
const fetch = require('node-fetch');

cmd({
  pattern: "song",
  category: "download",
  react: "🎥",
  desc: "Download YouTube audios as MP3",
  filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!q) return await reply('YT SONG නමක් හරි url එකක් හරි දෙන්න. 🙃');

        const url = encodeURIComponent(q);
        const response = await fetch(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${url}`);
        const data = await response.json();

        if (!data.status) return await reply('Failed to fetch audio details. Please check the URL and try again.');

        const audio = data.data;
        const message = `
╔═══〔 *𓆩𝐊𝐀𝐕𝐈 - 𝐌𝐃𓆪* 〕═══❒
║╭───────────────◆  
║│ *❍ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
║╰───────────────◆
╚══════════════════❒
╔══════════════════❒
║ ⿻ *ᴛɪᴛʟᴇ:*  ${yts.title}
║ ⿻ *ᴅᴜʀᴀᴛɪᴏɴ:*  ${yts.timestamp}
║ ⿻ *ᴠɪᴇᴡs:*  ${yts.views}
║ ⿻ *ᴀᴜᴛʜᴏʀ:*  ${yts.author.name}
║ ⿻ *ʟɪɴᴋ:*  ${yts.url}
╚══════════════════❒

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ:- 𝙺𝙰𝚅𝙸𝙳𝚄 𝚁𝙰𝚂𝙰𝙽𝙶𝙰 🌟*
        `;

       
        await conn.sendMessage(from, {
            image: { url: audio.thumbnail },
            caption: message
        });

        await conn.sendMessage(from, {
            document: { url: audio.download },
            mimetype: 'audio/mp3',
            fileName: `${audio.title}.mp3`,
            caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ:- 𝙺𝙰𝚅𝙸𝙳𝚄 𝚁𝙰𝚂𝙰𝙽𝙶𝙰 🌟*`
        });

        await conn.sendMessage(from, {
            react: { text: '✅', key: mek.key }
        });
    } catch (e) {
        console.error(e);
        await reply(`📕 An error occurred: ${e.message}`);
    }
});
