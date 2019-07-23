// koa koa-router koa-art-template koa-bodyparser koa-static koa-session captchapng2 koa-formidable mysql

const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')
const koaStatic = require('koa-static')
const userRouter = require('./router/user')
const musicRouter = require('./router/music')

let app = new Koa()


//模板渲染
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

//路由




//中间件
app.use(userRouter.routes())
app.use(musicRouter.routes())

//处理405 方法不匹配 501，方法未实现

//重写静态文件路径
app.use(async (ctx, next) => {
  if (ctx.url.startsWith('/public')) {
    ctx.url = ctx.url.replace('/public', '')
  }
  await next()
})
app.use(koaStatic(path.resolve('./public')))

app.listen(8888, () => {
  console.log('服务器监听8888端口')
})


