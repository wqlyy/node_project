const db = require('./db')

module.exports = {
  async addMusicByObj(sing){
    return await db.q('insert into musics (title,singer,time,filelrc,file,user_id) values (?,?,?,?,?,?)',Object.values(sing))
  }
}