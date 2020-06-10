const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items = [];

app.get('/', function(req, res) {
    var today = new Date();
    var currentDay = '';

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    currentDay = today.toLocaleDateString('en-US', options);

    res.render('list', { day: currentDay, list:items});
})

app.post('/', function(req, res) {
    items.push(req.body.newItem);
    res.redirect('/');
})

app.listen(3000, function() {
    console.log('Server started on port 3000');
})
