const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const { findBlogs, addBlog } = require('./controllers/blog')
const {requestLogger, unknownEndpoint, errorHandler} = require('./utils/middlewares')

// DB connection
const mongoUrl = process.env.DB_URI
mongoose
  .connect(mongoUrl)
  .then(() => console.log('DB conected'))
  .catch(e => console.error(e))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// EndPoints
app.get('/api/blogs', findBlogs)
app.post('/api/blogs', addBlog)

// Error handles
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app