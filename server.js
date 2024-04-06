
const express = require('express')
const app = express()
const db = require('./db')


const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Welcome to my hotel')
})


const menuItemRoutes =require('./routes/menuitemRoutes')
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)

 

app.listen(3001,()=>{
  console.log('listening on port 3001')
}) 
 
