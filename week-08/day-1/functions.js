'use strict';
const mysql = require('mysql');


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

module.exports= connectToMysql;