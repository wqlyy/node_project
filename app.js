// koa koa-router koa-art-template koa-bodyparser koa-static koa-session captchapng2 koa-formidable mysql

const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const formidable = require('koa-formidable')
const userRouter = require('./router/user')
const musicRouter = require('./router/music')

let app = new Koa()
app.keys = ['a','b','c']//用于session签名
const store={
  storage:{},
  set(key,session){
    this.storage[key] = session
  },
  get(key){
    return this.storage[key]
  },
  destroy(key){
    delete this.storage[key]
  }
}

//模板渲染
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})


//处理405 方法不匹配 501，方法未实现
app.use(async (ctx,next)=>{
  try{
    await next()
  } catch (e){
    console.log(e);
    ctx.render('error',{msg:'002错误,错误原因：'+e})
  }
})


//中间件
app.use(session({store},app))
// app.use(bodyParser())
app.use(formidable({
  uploadDir:path.resolve('./public/files'),
  keepExtensions:true
}))
app.use(userRouter.routes())
app.use(musicRouter.routes())


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


