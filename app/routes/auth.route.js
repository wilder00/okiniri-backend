
const { Router } = require('express')
const route = Router()
const authController = require('../controllers/auth.controller')

route.post('/login',authController.postLogin)

module.exports = route