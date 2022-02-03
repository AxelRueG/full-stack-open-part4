const Blog = require('../models/blog')

const findBlogs = (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(e => next(e))
}

const addBlog = (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(e => next(e))
}

module.exports = {findBlogs, addBlog}