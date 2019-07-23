const MusicModels = require('../models/music')
const path  = require('path')
module.exports = {
  async addMusic(ctx,next){
    let {title,singer,time} = ctx.request.body
    let {file,filelrc} = ctx.request.files
    let saveSingObj = {
      title,singer,time
    }
    saveSingObj.filelrc = '没有歌词';
    if(filelrc){
      saveSingObj.filelrc = path.parse(filelrc.path).base
    }
    if(!file){
      ctx.throw('歌曲必传')
      return
    }
    saveSingObj.file = path.parse(file.path).base
    saveSingObj.user_id = '1'
    let result = await MusicModels.addMusicByObj(saveSingObj)
    ctx.body={
      code:'001',
      msg:result.message
    }
  }
}