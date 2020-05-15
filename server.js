//const express = require('express');
//const expressHandlebars = require('express-handlebars');
const 
    express = require('express'),
    _handlebars = require('handlebars'),
    expressHandlebars = require('express-handlebars'),
    {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');
db.authenticate().then(() => console.log('db OK'));

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(_handlebars)}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.render('index', {layout: 'landing'}));
app.use('/gigs', require('./routes/gigRoute'));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server started port ${port}`));