const router = require('express').Router()
const user = require('../controllers/user')


router.post('/singin',user.create )
 
module.exports = router