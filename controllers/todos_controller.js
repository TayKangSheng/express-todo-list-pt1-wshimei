const express = require('express')
const router = express.Router()

// TODO. import TODO Model ;-)

const Todo = require('../models/todo')

router.get('/', function (req, res, next) {
  Todo.find(function (err, allTodos) {
    if (err) {
      return next(err)
    }
    res.render('./todos/index', {allTodos: allTodos})
  })
})

router.get('/:id', function (req, res, next) {
  Todo.findById(req.params.id, function (err, oneTodo) {
    if (err) {
      return next(err)
    }
    res.render('./todos/show', {todo: oneTodo})
  })
})

router.post('/', function (req, res, next) {
  Todo.create(req.body, function (err, output) {
    if (err) {
      return next(err)
    }
    res.render('./todos/show', {todo: output})
  })
})

router.put('/:id', function (req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  }, {new: true}, function (err, output) {
    if (err) {
      return next(err)
    }
    res.render('./todos/show', {todo, output})
  })
})

router.delete('/:id', function (req, res, next) {
  Todo.findByIdAndRemove(req.params.id, function (err, removed) {
    if (err) {
      return next(err)
    }
    res.send({
      message: 'Deleted success with id: ' + req.params.id
    })
  })
})

module.exports = router
