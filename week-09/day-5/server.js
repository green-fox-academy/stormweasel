'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.static('public'));
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'touristinformation',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log('connection established with mysql');
});


app.get('/places', (req, res) => {
  let command = 'SELECT * FROM attractions;';

  conn.query(command, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'INTERNAL SERVER ERROR' });
      return;
    }
    res.status(200).json(rows);
  });
});

app.get('/budge', (req, res) => {
  let command = 'SELECT b.* FROM\
  (SELECT category, MIN(price) AS price FROM attractions GROUP BY category) a\
  INNER JOIN attractions b ON a.category = b.category AND a.price = b.price;'

  conn.query(command, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'INTERNAL SERVER ERROR' });
      return;
    }
    res.status(200).json(rows);
  });
});


app.post('/add', (req, res) => {

  let command = 'INSERT INTO attractions(attr_name, city, category,\
   price, longitude, latitude, recommended_age, duration)\
   VALUES (?,?,?,?,?,?,?,?);'

  let values = [
    req.body.name, req.body.city, req.body.category,
    req.body.price, req.body.longitude,
    req.body.latitude, req.body.age, req.body.duration
  ];

  conn.query(command, values, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'INTERNAL SERVER ERROR' });
      return;
    }
    console.log(rows);
    let response = { 'status': 'ok', 'id': `${rows.insertId}` }
    res.status(200).json(response);
  });
});

app.put('/edit', (req, res) => {
 
  let command = `UPDATE attractions\
   SET attr_name =?, city =?, category =?, price =?, longitude =?, 
   latitude =?, recommended_age =?, duration =?\
   WHERE id =?;`

  let values = [
    req.body.name, req.body.city, req.body.category,
    req.body.price, req.body.longitude,
    req.body.latitude, req.body.age, req.body.duration,
    req.body.id
  ];

  conn.query(command, values, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'INTERNAL SERVER ERROR' });
      return;
    }
    console.log(rows);
    let response = { 'status': 'ok', 'id': `${rows.insertId}` }
    res.status(200).json(response);
  });
});

app.listen(3000);
console.log('server is running on PORT: 3000');