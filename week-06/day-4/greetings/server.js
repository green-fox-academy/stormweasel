'use strict';

const { name } = require('ejs');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	let nom= '';
	if (req.query.name) {
		nom = req.query.name;
	} else {
		nom = 'Guest';
	}
	res.render('home', { name: nom });
});

app.listen(3000);