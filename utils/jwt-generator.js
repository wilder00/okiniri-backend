const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const jwtExpireTime = process.env.JWT_TIME_TO_EXPIRE
// uid unique identification
const generateJWT = ( data = {uid: ''} )=>{
  return new Promise( (resolve, reject)=>{
    //it's possible to add user, name or whatever we want
    const payload = data
    jwt.sign( payload, jwtSecret,{
      expiresIn: jwtExpireTime
    }, (err, token)=>{
      if(err){
        console.log(err);
        reject(err);
      }else{
        resolve(token)
      }
    })
  })
}

module.exports = {
  generateJWT
}