
const { Router } = require('express')
const route = Router()


route.get('/', (req, res)=>{ res.json({info: 'api v1'})})

route.use('/auth', require("./auth.route"))

module.exports = route