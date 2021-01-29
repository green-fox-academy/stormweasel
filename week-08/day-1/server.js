'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());

function connectToMysql() {
	let conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'reddit',
		insecureAuth: 'true',
	});

	conn.connect((err) => {
		if (err) {
			console.log(err.toString());
		}
		console.log('connection established with mysql');
	});
	return conn;
}

app.get('/hello', (req, res) => {
	res.send('hello world');
});

// *******************************************************************************
// USER_HANDLING
app.post('/users/register', (req, res) => {
	let conn = connectToMysql();
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

app.get('/users/login', (req, res) => {
	let conn = connectToMysql();
	conn.query(`SELECT id FROM users WHERE username='?' AND password=? `,
		[req.body.username, req.body.password], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(400).json({ 'error': 'invalid password or username' });
			return;
		}
		console.log(rows);
		res.status(200).send(`Dear ${req.body.username}, you've successfully logged in. `)
});
});

app.delete('/users', (req, res) => {

	let conn = connectToMysql();
	conn.query('DELETE FROM users WHERE id=? AND password=?', [req.body.id, req.body.password], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not delete user' });
			return;
		}
		res.status(200).send('User is succesfully deleted permanently from database');
	});
});

// changing username and password
app.put('/users', (req, res) => {
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

	let conn = connectToMysql();
	conn.query(command, array, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not update user data' });
			return;
		}
		res.status(200).send('Userdata is succesfully updated in database');
	});
});


// ******************************************************************************
// POST_HANDLING

app.get('/posts', (req, res) => {
	let conn = connectToMysql();
	let command = 'SELECT * FROM posts WHERE isActive = true;';
	conn.query(command, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).json(rows);
	});
});

// Adding new posts
app.post('/posts', (req, res) => {
	let timestamp = Math.round(new Date().getTime() / 1000);

	let conn = connectToMysql();
	conn.query('INSERT INTO posts (title, url, timestamp, score, auth_id)\
	VALUES (?,?,?,?,?)', [req.body.title, req.body.url, timestamp, 0, req.body.auth_id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not insert data' });
			return;
		}
		res.status(200).send('Post is successfully added to database');
	});
});

// Updating existing posts (title or url or title&url)
app.put('/posts', (req, res) => {
	let timestamp = Math.round(new Date().getTime() / 1000);
	// defining how many columns should be updated
	let body = Object.keys(req.body);
	let command = '';
	let array = [];
	if (body.length === 2) {
		command = `UPDATE posts SET ${Object.keys(req.body)[0]}=?, timestamp=? WHERE id=?;`
		array = [body[0], timestamp, req.body.id];
	}
	if (body.length === 3) {
		let first = Object.keys(req.body)[0];
		let second = Object.keys(req.body)[1];
		command = `UPDATE posts SET ${first}=?, ${second}=?, timestamp=? WHERE id=?;`
		array = [body[0], body[1], timestamp, req.body.id];
	}

	let conn = connectToMysql();
	conn.query(command, array, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not update data' });
			return;
		}
		res.status(200).send('Post is succesfully updated in database');
	});
});

// inactivating existing posts
app.put('/posts/delete', (req, res) => {

	let conn = connectToMysql();
	conn.query('UPDATE posts SET isActive=false WHERE id=?', [req.body.id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not switch active status' });
			return;
		}
		res.status(200).send('Post is succesfully inactivated in database');
	});
});

//reactivate inactivated posts
app.put('/posts/reactivate', (req, res) => {

	let conn = connectToMysql();
	conn.query('UPDATE posts SET isActive=true WHERE id=?', [req.body.id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not switch active status' });
			return;
		}
		res.status(200).send('Post is succesfully reactivated in database');
	});
});

//deleting permanently existing posts
app.delete('/posts', (req, res) => {

	let conn = connectToMysql();
	conn.query('DELETE FROM posts WHERE id=?', [req.body.id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not delete data' });
			return;
		}
		res.status(200).send('Post is succesfully deleted permanently from database');
	});
});

// VOTING
app.put('/posts/upvote', (req, res) => {

	let conn = connectToMysql();
	conn.query('UPDATE posts SET score=score+1 WHERE id=?', [req.body.id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not modify score' });
			return;
		}
		res.status(200).send('score is increased with 1');
	});
});

app.put('/posts/downvote', (req, res) => {

	let conn = connectToMysql();
	conn.query('UPDATE posts SET score=score-1 WHERE id=?', [req.body.id], (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(420).json({ 'error': 'could not modify score' });
			return;
		}
		res.status(200).send('score is decreased with 1');
	});
});


app.listen(3000);
console.log('server is running on PORT: 3000');