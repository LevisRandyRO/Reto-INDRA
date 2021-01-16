const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const planetaRoutes = require('./routes/planeta')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/planeta', planetaRoutes)

module.exports = app