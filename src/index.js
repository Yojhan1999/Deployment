const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    next();
});

app.use(require('./routes/admin'));
app.use(require('./routes/auth'));
app.use(require('./routes/usuario'));
app.use(require('./routes/flutter'));

app.listen(PORT, () => {
    console.log('Localhost://' + PORT);
});