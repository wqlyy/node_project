const Router = require('koa-router')
let router = new Router()

router.get('/', async ctx => {
  ctx.render('index')
})
  .get('/user/register', async ctx => {
    ctx.render('register')
  })
  .get('/user/login', async ctx => {
    ctx.render('login')
  })

module.exports = router