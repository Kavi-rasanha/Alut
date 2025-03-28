const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 


cmd({
    pattern: "video",
    alias: ["watch","ytvi"],
    react: "🎥",
    desc: "Download Youtube video",
    category: "download",
    use: '.video2 < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("Please give me Yt url or Name..!")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found..!")

let yts = yt.results[0]  
const ytdl = await ytmp4(yts.url)		
let ytmsg = `
🎥 DARKBOT VIDEO DOWNLOADER 🎥

❀━━━━━━━━━━━━━━━━━━━━━━━━━━❀
┃
┃ 📄 *TITLE :* ${yts.title}
┃
┃ 🤵 *AUTHOR :* ${yts.author.name}
┃ 
┃ ⏳ *RUNTIME :* ${yts.timestamp}
┃
┃ 👀 *VIEWS :* ${yts.views}
┃
┃ 🖇️ *URL :* ${yts.url}
┃
❀━━━━━━━━━━━━━━━━━━━━━━━━━━━❀


> *DARKBOT*
`
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: ytmsg }, { quoted: mek });
await conn.sendMessage(from, { video: { url: ytdl.download.url }, mimetype: "video/mp4" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "video/mp4", fileName: ytdl.result.title + '.mp4', caption: `> *𝗗𝗔𝗥𝗞𝗕𝗢𝗧*` }, { quoted: mek })

} catch (e) {
console.log(e)
reply(e)
}}
)
