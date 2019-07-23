const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'root',
  password:'root',
  database:'music'
})
const db={}

db.q = (sql,params) => {
  return new Promise((resolve, reject)=>{
    // 取连接
    pool.getConnection(function (err,connection) {
      if(err){
        reject(err);
        return
      }
      connection.query(sql,params,function (error,results,fields) {
        connection.release()
        if(error){
          reject(error)
          return
        }
        resolve(results)
      })
    })
  })
}

module.exports = db