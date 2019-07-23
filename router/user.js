const Router = require('koa-router')
const db = require('../models/db')
const UserController = require('../controller/user')

let router = new Router()

router.get('/', async ctx => {
  ctx.render('index')
})
  .get('/user/register', UserController.showRegister)
  .get('/user/login', UserController.showLogin)
  .post('/user/check-username',UserController.checkUserName)
  .post('/user/do-register',UserController.doRegister)
  .post('/user/do-login',UserController.doLogin)
module.exports = router