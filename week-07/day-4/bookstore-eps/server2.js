'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

function unique(arr) {
	let newList = [];

	arr.map(function (i) {
		if (!newList.includes(i)) {
			newList.push(arr[arr.lastIndexOf(i)]);
		}
	})
	return newList;
}

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


// title of book - book_mast: book_name 
// name of author - book_mast.aut_id = author.aut_id ->aut_name
// category - book_mast.cate_id = category.cate_id -> cate_descrip
// name of publisher - book_mast.pub_id= publisher.pub_id -> pub_name
// price -book_mast : book_price

app.get('/detailed', (req, res) => {

	let command = " SELECT book_name, aut_name, cate_descrip, pub_name, book_price \
	FROM book_mast \
	JOIN author ON book_mast.aut_id = author.aut_id \
	JOIN category ON book_mast.cate_id = category.cate_id \
	JOIN publisher ON book_mast.pub_id= publisher.pub_id "

	let category = req.query.category;
	let publisher = req.query.publisher;
	let priceLowerThan = req.query.plt;
	let priceGreaterThan = req.query.pgt;
	let filterNarrow = req.query.narrow;
	console.log(`Narrow: ${filterNarrow}`);

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
		let keywords = [];
		for (let i = 0; i < rows.length; i++) {
			if (category !== undefined && category.includes(rows[i].cate_descrip)) {
				filtered.push(rows[i]);
				keywords.push(rows[i].cate_descrip);
			}
			if (publisher !== undefined && publisher.includes(rows[i].pub_name)) {
				filtered.push(rows[i]);
				keywords.push(rows[i].pub_name);
			}
			if (rows[i].book_price < priceLowerThan && priceLowerThan !== undefined) {
				filtered.push(rows[i]);
			}
			if (rows[i].book_price > priceGreaterThan && priceGreaterThan !== undefined) {
				filtered.push(rows[i]);
			}
		}

		filtered = unique(filtered);

		if (filterNarrow) {
			let isProper = false;
			let propers = [];
			console.log(keywords);

			filtered.map((elem) => {
				for (let i = 0; i < keywords.length; i++) {
					if (Object.values(elem).includes(keywords[i])) {
						if (priceLowerThan !== undefined && elem.book_price < priceLowerThan ||
							priceGreaterThan !== undefined && elem.book_price > priceGreaterThan) {
							isProper = true;
						}
					} else {
						isProper = false;
						break;
					}
				};
				if (isProper) { propers.push(elem); }
			});
			console.log('propers:');
			console.log(propers);
			rows = propers;
		} else {
			console.log('filtered:');
			console.log(filtered);
			rows = filtered;
		}

		res.render('detailed', { rows });
	});
});

app.listen(3000);
console.log('The server is running on PORT 3000');