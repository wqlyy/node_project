const Router = require('koa-router')
let router = new Router()

router.get('/music/add', async ctx => {
  ctx.render('add')
})
  .get('/music/edit', async ctx => {
    ctx.render('edit')
  })

module.exports = router