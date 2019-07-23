const Router = require('koa-router')
const musicController = require('../controller/music')

let router = new Router()


router.get('/music/add', async ctx => {
  ctx.render('add')
})
  .get('/music/edit', async ctx => {
    ctx.render('edit')
  })
  .post('/music/add-music',musicController.addMusic)

module.exports = router