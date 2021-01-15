'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

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
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
		}
		res.render('templated', { rows });
	});
});

app.get('/detailed', (req, res) => {

	let command = "SELECT book_name, aut_name, cate_descrip,\
	 pub_name, book_price FROM book_mast\
	 JOIN author ON book_mast.aut_id = author.aut_id\
	 JOIN category ON book_mast.cate_id = category.cate_id\
	 JOIN publisher ON book_mast.pub_id= publisher.pub_id "
	let filterLine = [];

	function addendMaker(query, column) {
		if (query !== undefined && typeof (query) === "string") {
			let addend = ` ${column} = "${query}"`;
			filterLine.push(addend);
		} else if (query !== undefined) {
			query.forEach((elem, index) => {
				let addend = ` ${column} = "${query[index]}"`;
				filterLine.push(addend);
			})
		}
		return filterLine;
	}

	let filterNarrow = req.query.narrow;
	console.log(`Narrow: ${filterNarrow}`);

	let category = req.query.category;
	addendMaker(category, 'cate_descrip');
	let publisher = req.query.publisher;
	addendMaker(publisher, 'pub_name');

	let priceLowerThan = req.query.plt;

	if (priceLowerThan != undefined) {
		let addend = ` book_price < ${Number(priceLowerThan)}`;
		filterLine.push(addend);
	}
	let priceGreaterThan = req.query.pgt;
	if (priceGreaterThan != undefined) {
		let addend = ` book_price > ${Number(priceGreaterThan)}`;
		filterLine.push(addend);
	}
	console.log('FilterLine: ' + filterLine + '\n');
	let count = 0;
	for (let i = 0; i < filterLine.length; i++) {
		if (filterLine[i] !== undefined && count === 0) {
			command += `WHERE` + filterLine[i];
			count++;
		} else if (filterLine[i] !== undefined) {
			if (filterNarrow) {
				command += ` AND` + filterLine[i];
				continue;
			}
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