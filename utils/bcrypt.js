const bcryptjs = require('bcryptjs');

module.exports = ( bcrypt = bcryptjs )=>{

  return {
    hashSync: (text)=>{
      const hash = bcrypt.hashSync(text, 10);
      return hash
    },
    compareSync: (text, hash)=>{
      return bcrypt.compareSync(text, hash);
    }
  }
}