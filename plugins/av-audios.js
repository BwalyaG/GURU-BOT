let handler = m => m
handler.all = async function (m) {
    
  if (/^.menu$/i.test(m.text) ) {
    let av = './Assets/mp3/menu1.mp3'
    this.sendPresenceUpdate('recording', m.chat);
    this.sendFile(m.chat, av, 'menu1.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^bgm$/i.test(m.text) ) {
    let av = './Assets/mp3/bgm.mp3'
    this.sendFile(m.chat, av, 'menu1.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler