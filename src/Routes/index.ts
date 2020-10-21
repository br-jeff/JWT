const router = require('express').Router()
const {createUser} = require('../controllers/user')


router.post('/singin',createUser )
 
module.exports = router