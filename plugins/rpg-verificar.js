import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `*⋆ ࣪.𓏲 ๋࣭ ¡Hola!, ya te encuentras registrado en mi base de datos. Si deseas eliminar tu registro para registrarte nuevamente usa el comando*\n*/unreg <Número de serie>*`;
  if (!Reg.test(text)) throw `*⋆ ࣪.𓏲 ๋࣭ ¡Hola!, te informo que has fallado con el proceso de registro, te daré un ejemplo de como puedes hacerlo*\n*/Reg Annie.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '⋆ ࣪.𓏲 ๋࣭ Hola. te informo que el apartado de nombre no puede estar vacío, coloca tun nombre o apodo';
  if (!age) throw '*⋆ ࣪.𓏲 ๋࣭ Hola, te informo que el apartado de edad no puede estar vacío, ingresa tu edad o una ficticia*';
  if (name.length >= 30) throw '*⋆ ࣪.𓏲 ๋࣭ Has superado el límite de carácteres en el nombre, hazlo más simple*';
  age = parseInt(age);
  if (age > 100) throw '*⋆ ࣪.𓏲 ๋࣭ Oye, ¿acaso eres un fósil?*';
  if (age < 5) throw '*⋆ ࣪.𓏲 ๋࣭¿Bromeas?, ¿cómo un niño podría escribir?*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `📃Registro Completado
🪪Nombre: ${name}
☃️Edad: ${age}
📃Número de serie
 ${sn}

¡Ahora te encuentras registrado en mi base de datos! 🤖

📃Si deseas cambiar algún dato de tu registro, usa el siguiente comando

🪪/Unreg ${sn}

Disfruta del bot <3`;
  await conn.sendFile(m.chat, pp, 'hades.jpg', caption);
  
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(Reg|reg)$/i;
export default handler;
