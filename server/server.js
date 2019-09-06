require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const menuCtrl = require('./controllers/menuCtrl')
const staffCtrl = require('./controllers/staffCtrl')

app.use(express.json())

app.get('/api/menu', menuCtrl.getMenu)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy customers`))