module.exports = (options) => {
  return async (ctx,next)=>{
    try{
      await next()
    } catch (e){
      console.log(e);
      ctx.render('error',{msg:'002错误,错误原因：'+e})
    }
  }
}