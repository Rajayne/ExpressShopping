const express = require('express');
const routes = require('./routes');
const items = require('./fakeDb');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/items', routes);

app.listen(3000, () => {
    console.log('App running on server 3000');
})

module.exports = app;