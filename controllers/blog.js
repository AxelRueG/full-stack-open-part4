const Blog = require('../models/blog');

const findBlogs = async (request, response) => {
	const blogs = await Blog.find({});
	response.json(blogs);
};

const addBlog = async (request, response) => {
	const blog = new Blog(request.body);
	const result = await blog.save();
	response.status(201).json(result);
};

const deleteBlog = async (req, res) => {
	const { id } = req.params;
	await Blog.findByIdAndDelete(id);
  res.status(200).end()
};

const updateBlog = async (req, res) => {
  const { id } = req.params
  const { likes } = req.body
  const result = await Blog.findByIdAndUpdate(id,{likes},{new: true})
  res.status(201).json(result)
}

module.exports = { findBlogs, addBlog, deleteBlog, updateBlog };
