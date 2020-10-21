 const createUser = (req, res) => {
     const {email,name,password } = req.body

     res.send(`${email}${name}${password}`) 
    } 

 module.exports =  {createUser}
