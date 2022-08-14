const bycript = require('../../utils/bcrypt')()
const jwToken = require('../../utils/jwt-generator')

const authService = require('../services/auth.service') 

const postLogin = async (req = request, res = response)=>{
  const {username, email, password} = req.body
  try {
    const credential = await authService.getOneCredential({ username, email, withUser: true })
    
    if(!credential){
      return res.status(400).json({
        message: "Credenciales inválidas."
      })
    }

    const isAuthenticated = bycript.compareSync(password, credential.password)
    if(!isAuthenticated){
      return res.status(400).json({
        message: "Credenciales inválidas."
      })
    }

    const data = {
      uuid: credential.User.id, // user unique id
      cuid: credential.id // credential unique id
    }
    const access_token = await jwToken.generateJWT(data);
    
    return res.status(200).json({
      access_token,
      user: credential.User
    })
    

  } catch (error) {
    
  }
}


module.exports = {
  postLogin,
}