const db = require('./db')

module.exports = {
  async getUsers(){
    return await db.q('select * from users',[])
  },
  async findUserByUserName(username){
    return await db.q('select 1 from users where username = ?',[username])
  },
  async registerUser(...userInfo){
    return await db.q('insert into users (username,password,email) values (?,?,?)',userInfo)
  },
  async findUserDataByUserName(username){
    return await db.q('select * from users where username = ?',[username])
  }
}