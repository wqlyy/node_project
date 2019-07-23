const userModel = require('../models/user')

module.exports={
  async showRegister(ctx,next){
    let users = await userModel.getUsers()
    console.log(users);
    ctx.render('register')
  }
}