const handler = async (m, {conn, text, isROwner, isOwner}) => {
if (text) {
global.db.data.chats[m.chat].sGrupos = text;
m.reply('*✅ HOLA*');
} else throw `*Ingresé el texto*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setprueba'];
handler.admin = true;
handler.register = true 
export default handler;
