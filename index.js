const express = require( "express" )
const helmet = require( "helmet" )
const cors = require( "cors" )
const morgan = require( "morgan" )
const session = require( "express-session" )
const KnexSessionStore = require( "connect-session-knex" )( session )
// const  = require( "" )
// const  = require( "" )
// const  = require( "" )

const server = express()
const port = process.env.PORT || 5000

server.use( cors() )
server.use( helmet() )
server.use( morgan() )
server.use( express.json() )
server.use( session( {

} ) )

// server.use(  )
// server.use(  )

server.get( "/", ( req, res, next ) => {
  res.json( {
    message: "Welcome to Login/Logout"
  } )
} )

server.use( ( err, req, res, next ) => {
  console.log( err )
  res.status( 500 ).json( {
    message: "Something went wrong"
  } )
} )

server.listen( port, () => {
  console.log( `Running at http://localhost:${ port }` )
} )