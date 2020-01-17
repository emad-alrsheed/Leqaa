var express = require('express')
var cors = require('cors')
var DB = require('./db')
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(cors())
app.post('/register', (req, res) => { DB.register(req.body, (response) => { res.send(response) }) })
app.get('/login', (req, res) => { DB.login(req.query.email, req.query.password, (response) => { res.send(response) }) })


app.listen(9000)
