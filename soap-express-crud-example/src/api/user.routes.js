const express = require('express')

const userRoutes = express.Router()

userRoutes
  .get('/', (req, res) => {
    res.send('Hello World!')
  }).post('/', (req, res) => {
    res.send('Hello World!')
  }).patch('/', (req, res) => {
    res.send('Hello World!')
  }).delete('/', (req, res) => {
    res.send('Hello World!')
  })

module.exports = userRoutes