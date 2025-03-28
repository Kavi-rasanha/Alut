/*created by King Malvin 🕵
contact dev1 263780934873 ♻️
contact dev2 https://t.me/malvinking2 ♻️
© just give credit will you ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

*⇆👋𝙷𝙸 𝙼𝚈 𝙵𝚁𝙸𝙴𝙽𝙳⇆*

     *${pushname}*

┏━━━━━━━━━━━━━━━━━━━━
   *𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐤𝐚𝐯𝐢 - 𝐦𝐝 𝐦𝐞𝐧𝐮 : )*
┗━━━━━━━━━━━━━━━━━━━━


*╭───────────────❒⁠⁠⁠⁠*
*│* *❂ DOWNLOAD CMDS❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂MAIN CMDS❂*
*┕───────────────❒*
*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂GROUP CMDS❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂OWNER CMDS❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *❂CONVERTER CMDS❂*
*┕───────────────❒*

*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*╭─────────────────❒⁠⁠⁠⁠*
*│* *❂FUN CMDS ❂*
*┕─────────────────❒*

*╭──────────●●►*
${menu.fun}
*╰──────────●●►*


> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ:- 𝙺𝙰𝚅𝙸𝙳𝚄 𝚁𝙰𝚂𝙰𝙽𝙶𝙰 🌟*

`;
await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: "https://files.catbox.moe/njh1mk.mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
