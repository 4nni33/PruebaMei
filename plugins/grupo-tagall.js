let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let teks = `*¡ATENCIÓN!*\n ㅤﻬ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
teks += `─ ⋯ ─ ⋯ ─ ⋯ ─ ⋯ ─\n`
for (let mem of participants) {
teks += `🫧໋᳝݊▹֛◌  @${mem.id.split('@')[0]}\n`}
  teks += `─ ⋯ ─ ⋯ ─ ⋯ ─ ⋯ ─ \n`
teks += `▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
