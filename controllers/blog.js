const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const findBlogs = async (request, response) => {
	const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
	response.json(blogs);
};

const getTokenFrom = (request) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer '))
		return authorization.substring(7);
	return null;
};

const addBlog = async (request, response) => {
	const token = getTokenFrom(request);
	const decodedToken = jwt.verify(token, process.env.SECRET);
	if (!(token && decodedToken.id)) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	const user = await User.findById(decodedToken.id);

	const blog = new Blog({ ...request.body, user: user.id });
	
	const result = await blog.save();
	const blogs = user.blogs.concat(result.id);
	await User.findByIdAndUpdate(user.id, {blogs}, {new: true});

	response.status(201).json(result);
};

const deleteBlog = async (req, res) => {
	const { id } = req.params;
	await Blog.findByIdAndDelete(id);
	res.status(200).end();
};

const updateBlog = async (req, res) => {
	const { id } = req.params;
	const { likes } = req.body;
	const result = await Blog.findByIdAndUpdate(id, { likes }, { new: true });
	res.status(201).json(result);
};

module.exports = { findBlogs, addBlog, deleteBlog, updateBlog };
