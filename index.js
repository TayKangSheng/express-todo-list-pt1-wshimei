const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://wshimei:Ga16012017@ds149049.mlab.com:49049/todos')
mongoose.Promise = global.Promise

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', './views')

const port = process.env.PORT || 5000
var server = app.listen(port, function () {
  console.log('Express Test is running on ' + port)
})

const todosControl = require('./controllers/todos_controller.js')
app.use('/todos', todosControl)

app.use(function (err, req, res, next) {
  if (res.HeaderSent) {
    res.send(
      {
        message: err.message
      })
  }
})

module.exports = server
