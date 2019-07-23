const db = require('./db')

module.exports = {
  async getUsers(){
    return await db.q('select * from users',[])
  }
}