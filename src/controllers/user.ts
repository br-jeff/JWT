const db = require('../database/connection') 
 
 const create = (req, res) => {
     const {email,name,password } = req.body

     db('users')
     .select( email )

     res.send(`${email}${name}${password}`) 
    } 

 module.exports =  {create}
