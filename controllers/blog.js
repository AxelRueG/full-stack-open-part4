const Blog = require('../models/blog')

const findBlogs = async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
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