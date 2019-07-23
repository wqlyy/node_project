module.exports = (options)=>{
  return async (ctx, next) => {
    if (ctx.url.startsWith('/public')) {
      ctx.url = ctx.url.replace('/public', '')
    }
    if(ctx.url === '/'){
      ctx.url = 'user/login'
    }
    await next()
  }
}