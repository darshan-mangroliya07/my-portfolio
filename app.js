const express = require("express");
const routes = require('./routes/index');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({ defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')))
app.use(routes);

app.listen(80);