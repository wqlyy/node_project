const Router = require('koa-router')
const db = require('../modals/db')

let router = new Router()

router.get('/', async ctx => {
  let users = await db.q('select * from users',[])
  console.log(users);
  ctx.render('index')
})
  .get('/user/register', async ctx => {
    ctx.render('register')
  })
  .get('/user/login', async ctx => {
    ctx.render('login')
  })

module.exports = router