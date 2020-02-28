const express = require('express')
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')
var Users = require('./user_schema')

const app = express()
const Port = 4000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.post('/login', function(req, res){
	Users.findOne({ email: req.body.email }, function (err, user) {
		if (err)
			return res.send({ status: 'ko' });
		if (!user)
			return res.send({ status: 'ko' });
		if (user.email == req.body.email && user.password == req.body.psw)
			return res.send( { status: 'ok' });
		else
			return res.send({ status: 'ko' })
		});
})

app.listen(Port, () => console.log(`Server running on port ${Port}`))
