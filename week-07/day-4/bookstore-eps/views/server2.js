'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');


let conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'bookstore',
	insecuteAuth: 'true'
});

conn.connect((err) => {
	if (err) { throw err; }
	console.log('connected to mysql')
});

app.get('/', (req, res) => {
		conn.query('SELECT book_name FROM book_mast', (err, rows) => {
		console.log(rows);
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
		}
		res.render('templated', { rows });
	});
});


// title of book - book_mast: book_name 
// name of author - book_mast.aut_id = author.aut_id ->aut_name
// category - book_mast.cate_id = category.cate_id -> cate_descrip
// name of publisher - book_mast.pub_id= publisher.pub_id -> pub_name
// price -book_mast : book_price

let command = " SELECT book_name, aut_name, cate_descrip, pub_name, book_price \
FROM book_mast \
JOIN author ON book_mast.aut_id = author.aut_id \
JOIN category ON book_mast.cate_id = category.cate_id \
JOIN publisher ON book_mast.pub_id= publisher.pub_id "


app.get('/detailed', (req, res) => {
	let category = req.query.category;
	let publisher = req.query.publisher;
	let priceLowerThan = req.query.plt;
	let priceGreaterThan = req.query.pgt;

	conn.query(command, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		if (category === undefined && publisher === undefined &&
			priceLowerThan === undefined && priceGreaterThan === undefined) {
			console.log('no filter')
			res.render('detailed', { rows });
			return
		}

		let filtered = [];
		for (let i = 0; i < rows.length; i++) {
			if (rows[i].cate_descrip === category ||
				rows[i].pub_name === publisher ||
				rows[i].book_price <= priceLowerThan ||
				rows[i].book_price > priceGreaterThan) {
				filtered.push(rows[i]);
			}
		}
		console.log(filtered);
		rows = filtered;
		res.render('detailed', { rows });
	});
});

app.listen(3000);
console.log('The server is running on PORT 3000');