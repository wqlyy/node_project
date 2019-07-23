const Router = require('koa-router')
const db = require('../models/db')
const UserController = require('../controller/user')

let router = new Router()

router.get('/', async ctx => {
  ctx.render('index')
})
  .get('/user/register', UserController.showRegister)
  .get('/user/login', async ctx => {
    ctx.render('login')
  })

module.exports = router