const router = require('express').Router()
const {registrar, login} = require('../controllers/userController.js')

router.post('/resgister', registrar )

router.post('/login', login)

module.exports = router
