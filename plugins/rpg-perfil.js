import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/EXTbyyn.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) { 

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
let str = `╭┈─┈─┈─┈─┈─┈─┈╮
│➥ 𓏲 ๋࣭  𝙉𝙊𝙈𝘽𝙍𝙀 ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}
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
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkontak, false, { mentions: [who]})
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
