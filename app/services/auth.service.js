const { Credential, User } = require('./../../models/index')



const getCredentialByUsername = async ( username, withUser = false )=> {

  try {
    const credential = await Credential.findOne({ where: { username }, include: withUser? User: null})
    return credential
  } catch (error) {
    throw error;
  }
}

const getCredentialByEmail = async ( email, withUser = false )=> {
  try {
    const credential = await Credential.findOne({ where: { email }, include: withUser? User: null })
    return credential
  } catch (error) {
    throw error;
  }
}

const getCredentialByUserId = async ( userId, withUser = false )=> {
  try {
    const credential = await Credential.findOne({ where: { userId }, include: withUser? User: null })
    return credential
  } catch (error) {
    throw error;
  }
}

const getOneCredential = async ({ username, email, userId, withUser = false })=> {
  try {
    
    if( username ) {
      return await getCredentialByUsername( username, withUser )
    }
    if( email ){
      return await getCredentialByEmail( email, withUser )
    }
    if( userId ){
      return await getCredentialByUserId( userId, withUser )
    }

    throw new Error("Se necesita una credencial válida.")

  } catch (error) {
    throw error
  }

}

module.exports = {
  getCredentialByUsername,
  getCredentialByEmail,
  getCredentialByUserId,
  getOneCredential,
}