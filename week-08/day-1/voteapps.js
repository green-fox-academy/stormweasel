'use strict';
const express = require('express');
const router = express();

router.use(express.json());
const connectToMysql = require('./functions');

let conn = connectToMysql();

// VOTING
router.put('/posts/upvote', (req, res) => {

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

router.put('/posts/downvote', (req, res) => {

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

module.exports = router;