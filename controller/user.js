const userModel = require('../models/user')

module.exports={
  async showRegister(ctx,next){
    let users = await userModel.getUsers()
    console.log(users);
    ctx.render('register')
  },
  async showLogin(ctx,next){
    ctx.render('login')
  },
  async checkUserName(ctx,next){
    let {username} = ctx.request.body
    let users = await userModel.findUserByUserName(username)
    if(!users.length){
      ctx.body = {code:'001',msg:'可以注册'}
      return
    }
    ctx.body={code:'002',msg:'用户名已经存在'}
  },
  async doRegister(ctx,next){
    let {username,password,email,v_code} = ctx.request.body
    let users = await userModel.findUserByUserName(username)
    if(users.length){
      ctx.body = {code:'002',msg:'用户名已经存在'}
      return
    }
    try {
      //开始注册
      let result = await userModel.registerUser(username, password, email)
      if (result.affectedRows === 1) {
        ctx.body = {code: '001', msg: "注册用户成功"}
        return
      }
      // ctx.body = {code:'002',msg:result.msg}
    }catch (e){
      throw ctx;
    }
  },
  async doLogin(ctx,next){
    let {username,password} = ctx.request.body
    let users = await userModel.findUserDataByUserName(username)
    if(!users.length){
      ctx.body = {code:'002',msg:'用户名或者密码不存在'}
      return
    }
    let user = users[0];
    if(user.password === password){
      ctx.body={code:'001',msg:'登录成功'}
      //session方便后期
      ctx.session.user = user
      return
    }
    ctx.body = {code:'002',msg:'用户名或者密码不存在'}
  }
}