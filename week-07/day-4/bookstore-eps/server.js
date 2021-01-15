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

app.get('/detailed', (req, res) => {

	let command = " SELECT book_name, aut_name, cate_descrip, pub_name, book_price \
	FROM book_mast \
	JOIN author ON book_mast.aut_id = author.aut_id \
	JOIN category ON book_mast.cate_id = category.cate_id \
	JOIN publisher ON book_mast.pub_id= publisher.pub_id "
	let filterLine = [];

	let category = req.query.category;
	if (category !== undefined && typeof (category) === "string") {
		let addend = ` cate_descrip = "${category}"`;
		console.log(addend);
		filterLine.push(addend);
	} else {
		category.forEach((elem, index) => {
			let addend = ` cate_descrip = "${category[index]}"`;
			filterLine.push(addend);
		})
	}
	let publisher = req.query.publisher;
	if (publisher != undefined) {
		let addend = ` pub_name = "${publisher}"`;
		console.log(addend);
		filterLine.push(addend);
	}

	let priceLowerThan = req.query.plt;
	let priceGreaterThan = req.query.pgt;

	if (priceLowerThan != undefined) {
		let addend = ` book_price < ${Number(priceLowerThan)}`;
		console.log(addend);
		filterLine.push(addend);
	}
	if (priceGreaterThan != undefined) {
		let addend = ` book_price > ${Number(priceGreaterThan)}`;
		console.log(addend);
		filterLine.push(addend);
	}
	console.log(filterLine);
	let count = 0;
	for (let i = 0; i < filterLine.length; i++) {
		if (filterLine[i] !== undefined && count === 0) {
			command += `WHERE` + filterLine[i];
			count++;
		} else if (filterLine[i] !== undefined) {
			command += ` OR` + filterLine[i];
		}
	}
	console.log(command);
	conn.query(command, (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
			return;
		}
		res.render('detailed', { rows });
	});
});

app.listen(3000);
console.log('The server is running on PORT 3000');