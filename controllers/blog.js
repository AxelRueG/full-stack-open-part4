const Blog = require('../models/blog');
const User = require('../models/user')

const findBlogs = async (request, response) => {
	const blogs = await Blog.find({}).populate('user', {username: 1, name: 1});
	response.json(blogs);
};

const addBlog = async (request, response) => {
	const user = await User.findOne({})
	console.log(user)

	const newBlog = {...request.body, user: user.id}

	const blog = new Blog(newBlog);
	const result = await blog.save();

	user.blogs = user.blogs.concat(result.id)
	await user.save()

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
