// const mongoose = require('mongoose');
// const supertest = require('supertest');
// const app = require('../app');
// const API = supertest(app);

// const User = require('../models/user');

// const initialUsers = [
// 	{
// 		username: 'userNum1',
// 		name: 'nombre one',
// 		password: 'Soy_un_usuario',
// 	},
// 	{
// 		username: 'userNum2',
// 		name: 'nombre two',
// 		password: 'Soy_otro_usuario',
// 	},
// ];

// const othersUser = [
//   {
// 		username: 'userNum3',
// 		name: 'nombre three',
// 		password: 'pwd123456',
// 	},
//   {
// 		username: 'userNum3',
// 		name: 'nombre repetido',
// 		password: 'pwd123456',
// 	},
//   {
// 		username: 'userNum4',
// 		name: 'nombre four',
// 		password: 'ab',
// 	},
//   {
// 		username: '',
// 		name: 'nombre four',
// 		password: 'pwdlength',
// 	},
// ]

// beforeAll(async () => {
// 	// cleaning DB
// 	await User.deleteMany({});
// }, 10000);

// // describe('get users', () => {
// //   test('get all users', async () => {
// //     const result = await API.get('/api/users')
// //     expect(result.body).toHaveLength(1)
// //   })
// // })

// describe('create a new user', () => {
// 	test('when create a new user, this is save in DB', async () => {
// 		await API.post('/api/users').send(othersUser[0]).expect(201);
// 		const result = await User.find({});
// 		expect(result).toHaveLength(1);
// 	});
// });

// afterAll(() => mongoose.connection.close());
