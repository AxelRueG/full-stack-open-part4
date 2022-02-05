const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
require('express-async-errors')
const { findBlogs, addBlog, deleteBlog, updateBlog } = require('./controllers/blog')
const {requestLogger, unknownEndpoint, errorHandler} = require('./utils/middlewares')

// DB connection
let mongoUrl = process.env.DB_URI
if (process.env.NODE_ENV === 'test') process.env.DB_TEST_URI
mongoose
  .connect(mongoUrl)
  .then(() => console.log('DB conected'))
  .catch(e => console.error(e))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(requestLogger)

// EndPoints
app.delete('/api/blogs/:id', deleteBlog)
app.put('/api/blogs/:id',updateBlog)
app.get('/api/blogs', findBlogs)
app.post('/api/blogs', addBlog)

// Error handles
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app