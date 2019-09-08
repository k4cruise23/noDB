require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const menuCtrl = require('./controllers/menuCtrl')


app.use(express.json())

// app.get('/api/staff', staffCtrl.getStaff)

app.get('/api/menu', menuCtrl.getMenu)
app.delete('/api/menu/:id', menuCtrl.deleteItem)
app.post('/api/menu', menuCtrl.addItem)
app.put('/api/menu/:id', menuCtrl.editItem)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy customers`))