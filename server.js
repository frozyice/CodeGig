const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');
db.authenticate().then(() => console.log('db OK'));

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('INDEX'));

app.listen(port, console.log(`Server started port ${port}`));