'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.static(__dirname + '/views'));
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

let filterNarrow = "on";

function unique(arr) {
	let newList = [];
	arr.map(function (i) {
		if (!newList.includes(i)) { newList.push(arr[arr.lastIndexOf(i)]); }
	})
	return newList;
}

app.get('/', (req, res) => {
	conn.query('SELECT book_name FROM book_mast', (err, rows) => {
		if (err) {
			console.log(err.toString());
			res.status(500).json({ 'error': 'database error' });
		}
		if (filterNarrow === 'on') {
			res.render('templated', { rows });
		} else {
			res.render('templatedOff', { rows });
		}
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
	filterNarrow = req.query.narrow;
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
		console.log("filtered: ");
		console.log(filtered);

		if (filterNarrow === 'on') {
			let isProper = false;
			let propers = [];
			keywords = unique(keywords);
			console.log('Keywords:');
			console.log(keywords);

			filtered.map((elem) => {
				if (keywords.length === 0) {
					isProper = true;
				} else {
					for (let i = 0; i < keywords.length; i++) {
						if (Object.values(elem).includes(keywords[i])) {
							isProper = true;
						} else {
							isProper = false;
							break;
						}
					}
					if (elem.book_price >= priceLowerThan && priceLowerThan) { isProper = false; }
					if (elem.book_price <= priceGreaterThan && priceGreaterThan) { isProper = false; }
				};
				if (isProper) { propers.push(elem); }
			});
			console.log("propers: ");
			console.log(propers);
			rows = propers;
		} else {
			rows = filtered;
		}

		res.render('detailed', { rows });
	});
});

app.listen(3000);
console.log('The server is running on PORT 3000');