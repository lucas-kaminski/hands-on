const express = require('express')
const { v4:uuidv4 } = require('uuid')

const app = express()
app.listen(3333)
app.use(express.json())