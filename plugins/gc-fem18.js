let nombreEncargada = "Encargada"; // Nombre predeterminado
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
│      ෆ *𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘢:*  ${nuevoNombre}
│      ෆ *𝘏𝘰𝘳𝘢𝘳𝘪𐐫:*
│         ‧₊⌗ 16🇵🇪 ⌇ 17🇨🇱 ⌇ 18🇦🇷      
│
│ㅤㅤʚ *𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:*
│ㅤ𐀔 • 
│ㅤ𐀔 • 
│ㅤ𐀔 • 
│ㅤ𐀔 • 
│   ㅤㅤ
│ㅤㅤʚ *𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:*
│ㅤᵎᵎ •
│ㅤᵎᵎ •
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳𝘢 𝘥𝘦 𝘴𝘢𝘭𝘢:
╰───────────────๑❀๑ •`

  conn.sendMessage(m.chat, { text: teks }, )
}

handler.help = ['smsf00 <mensaje>', 'fem00 <mensaje>']
