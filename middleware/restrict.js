const bcrypt = require( "bcryptjs" )
const User = require( "../users/users-model" )


const sessions = {}

function restrict() {
  const authErr = {
    message: "Invalid credentials"
  }

  return async( req, res, next ) => {
    try{
      if ( !req.session || !req.session.user ) {
        return res.status( 401 ).json( authErr )
      }
      next()
    } catch ( err ) {
      next( err )
    }
  }
}

module.exports = {
  sessions,
  restrict
}