'use strict';
const express = require('express');
const router = express();

router.use(express.json());
const connectToMysql = require('./functions');

let conn = connectToMysql();

// USER_HANDLING

router.post('/users/register', (req, res) => {

	conn.query('INSERT INTO users (username, password)\
	 VALUES (?,?);', [req.body.username, req.body.password], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('User is successfully added to database');
	});
});

router.get('/users/login', (req, res) => {

	conn.query(`SELECT id FROM users WHERE username='?' AND password=? `,
		[req.body.username, req.body.password], (err, rows) => {
			if (err) {
				console.log(err.toString());
				res.status(500).json({ 'error': 'database error' });
				return;
			}
			console.log(rows);
			res.status(200).send(`Dear ${req.body.username}, you've successfully logged in. `)
		});
});

router.delete('/users', (req, res) => {

	conn.query('DELETE FROM users WHERE id=? AND password=?', [req.body.id, req.body.password], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('User is succesfully deleted permanently from database');
	});
});

// changing username and password
router.put('/users', (req, res) => {
	// defining how many columns should be updated
	let body = Object.values(req.body);
	let command = '';
	let array = [];
	if (body.length === 2) {
		command = `UPDATE users SET ${Object.keys(req.body)[0]}=? WHERE id=?;`
		array = [body[0], req.body.id];
	}
	if (body.length === 3) {
		command = `UPDATE users SET username=?, password=? WHERE id=?;`
		array = [body[0], body[1], req.body.id];
	}

	conn.query(command, array, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('Userdata is succesfully updated in database');
	});
});

module.exports = router;