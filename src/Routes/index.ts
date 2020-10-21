const router = require('express').Router()
const {createUser} = require('../controllers/user')


router.get('/login',createUser )

module.exports = router