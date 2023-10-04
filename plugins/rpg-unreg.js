import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*¡Ingresa tu número de serie!, en caso de que no lo sepas puedes usar el comando #myns para visualizar tu perfil*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*¡NÚMERO DE SERIE INCORRECTO!*'
user.registered = false
m.reply(`*¡Éxito!, usted ya no se encuentra registrado en este bot*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
