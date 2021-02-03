'use strict';
const express = require('express');
const router = express();
router.use(express.json());
const connectToMysql = require('./functions');

let conn = connectToMysql();

// POST_HANDLING

// getting posts both active and inactive
router.get('/posts', (req, res) => {
	let command = '';
	if (req.query.isactive === 'false') {
		command = 'SELECT * FROM posts WHERE isActive = false;';
	} else {
		command = 'SELECT * FROM posts WHERE isActive = true;';
	}

	conn.query(command, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		console.log(rows);
		res.status(200).json(rows);
	});
});



// Adding new posts
router.post('/posts', (req, res) => {
	let timestamp = Math.round(new Date().getTime() / 1000);

	conn.query('INSERT INTO posts (title, url, timestamp, score, auth_id)\
	VALUES (?,?,?,?,?)', [req.body.title, req.body.url, timestamp, 0, req.body.auth_id], (err, rows) => {
		if (errMysql) {
			console.log(errMysql.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('Post is successfully added to database');
	});
});

// Updating existing posts (title or url or title&url)
router.put('/posts', (req, res) => {
	console.log(req.body);
	let timestamp = Math.round(new Date().getTime() / 1000);
	// defining how many columns should be updated
	let body = Object.keys(req.body);
	let bodyValues = Object.values(req.body);
	console.log(body);
	console.log(bodyValues);
	let command = '';
	let array = [];
	if (body.length === 3) {
		command = `UPDATE posts SET ${Object.keys(req.body)[0]}=?, timestamp=? WHERE id=?;`
		array = [bodyValues[0], timestamp, req.body.id];
	}
	if (body.length === 4) {
		let first = Object.keys(req.body)[0];
		let second = Object.keys(req.body)[1];
		command = `UPDATE posts SET ${first}=?, ${second}=?, timestamp=? WHERE id=?;`
		array = [bodyValues[0], bodyValues[1], timestamp, req.body.id];
		console.log(array);
	}
	console.log('command:');
	console.log(command);

	conn.query(command, array, (err, rows) => {
		if (errMysql) {
			console.log(errMysql.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		console.log('Post is succesfully updated in database');
		res.status(200).send('Post is succesfully updated in database');
	});
});

// inactivating existing posts
router.put('/posts/delete', (req, res) => {

	conn.query('UPDATE posts SET isActive=false WHERE id=?', [req.body.id], (err, rows) => {
		if (errMysql) {
			console.log(errMysql.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('Post is succesfully inactivated in database');
	});
});

//reactivate inactivated posts
router.put('/posts/reactivate', (req, res) => {

	conn.query('UPDATE posts SET isActive=true WHERE id=?', [req.body.id], (err, rows) => {
		if (errMysql) {
			console.log(errMysql.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('Post is succesfully reactivated in database');
	});
});

//deleting permanently existing posts
router.delete('/posts', (req, res) => {

	conn.query('DELETE FROM posts WHERE id=?', [req.body.id], (err, rows) => {
		if (errMysql) {
			console.log(errMysql.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.status(200).send('Post is succesfully deleted permanently from database');
	});
});


module.exports = router;