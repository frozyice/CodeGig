const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');
db.authenticate().then(() => console.log('db OK'));

const app = express();

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index', {layout: 'landing'}));
app.use('/gigs', require('./routes/gigRoute'));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started port ${port}`));