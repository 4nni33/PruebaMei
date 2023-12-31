let nombreEncargado = "Encargado"; // Nombre predeterminado
let textoPersonalizable = "Texto personalizable"; // Texto predeterminado

let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
  }

  let nuevoNombre = args[0] || nombreEncargada; // Obtiene el nombre nuevo o usa el predeterminado
  let nuevoTexto = args.slice(1).join(' ') || textoPersonalizable; // Obtiene el texto nuevo o usa el predeterminado
  
  let oi = `𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗩𝗦`;
  let teks = `╭┈┈ ৎ 🪷ִ ׂ ⬫ ${oi}  ָ࣪  ۰ . ¡! \n`
  teks += `│
│      ෆ *𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘰:*  ${nuevoNombre}
│      ෆ *𝘏𝘰𝘳𝘢𝘳𝘪𐐫:*
│         ‧₊⌗ 21 🇵🇪 ⌇ 23 🇨🇱 ⌇ 00 🇦🇷      
│
│ㅤㅤʚ *𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:*
│ 💭 • 
│ 💭 •
│ 💭 •
│ 💭 •
│   ㅤㅤ
│ㅤㅤʚ *𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:*
│ㅤ 🍃 •
│ㅤ 🍃 •
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳 𝘥𝘦 𝘴𝘢𝘭𝘢: 
╰───────────────๑ᵎᵎ๑ •`

  conn.sendMessage(m.chat, { text: teks }, )
}

handler.help = ['smsf00 <mensaje>', 'fem00 <mensaje>']
