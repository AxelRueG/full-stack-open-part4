const Blog = require('../models/blog')

const findBlogs = async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
}

const addBlog = async (request, response) => {
  const blog = new Blog(request.body)
  const result = await blog.save()
  response.status(201).json(result)
}

module.exports = {findBlogs, addBlog}