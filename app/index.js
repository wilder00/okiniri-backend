
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const routes = require('./routes')

// Middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// Routes
app.use('/api', routes)
app.use('/',express.static('public'))



module.exports = app