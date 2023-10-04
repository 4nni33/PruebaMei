import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, participants, isPrems }) => {
let pp = 'https://i.imgur.com/HE1dWt6.png'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {
} finally {
let { name, role, level, limit, money, exp, joincount, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split `@` [0])
let sn = createHash('md5').update(who).digest('hex')
let str = `╭┈─┈─┈─┈─┈─┈─┈╮
│➥ 𓏲 ๋࣭  𝙉𝙊𝙈𝘽𝙍𝙀 ${name} ${user.registered === true ?: ''}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙉𝙐𝙈𝙀𝙍𝙊 ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙀𝙉𝙇𝘼𝘾𝙀 wa.me/${who.split`@`[0]}${registered ?'\n│➥ 𓏲 ๋࣭ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n│➥ 𓏲 ๋࣭  𝙀𝘿𝘼𝘿 ' + age + ' *años*' : ''}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙇𝙄𝙈𝙄𝙏𝙀𝙎 *${limit}* 𝙙𝙚 𝙐𝙨𝙤𝙨
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊(𝘼) ${registered ? '✅': '❎'}
│ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ${prem ? '✅' : '❎'}
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│➥ 𓏲 ๋࣭  𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀
│➥ 𓏲 ๋࣭  *${sn}*
╰┈─┈─┈─┈─ ๑✨๑ `
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
//conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
