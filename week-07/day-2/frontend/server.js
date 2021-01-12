'use script';

const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./assets'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
	let received = Number(req.query.input);
	let result = received * 2;
	if (isNaN(req.query.input)) {
		res.json({ "error": "Please provide an input!" });
	} else {
		res.json({ "received": received, "result": result });
	}
});

app.get('/greeter', (req, res) => {
	let name = req.query.name;
	let title = req.query.title;
	if (typeof req.query.name !== "string" && typeof req.query.title !== "string") {
		res.status(400).json({ "error": "Please provide a name and a title!" });
	} else if (typeof req.query.name !== "string" && typeof req.query.title === "string") {
		res.status(400).json({ "error": "Please provide a name!" });
	} else if (typeof req.query.name === "string" && typeof req.query.title !== "string") {
		res.status(400).json({ "error": "Please provide a title!" });
	} else {
		res.json({ "welcome_message": `Oh, hi there ${name}, my dear ${title}!` })
	}

});

app.listen(3000);