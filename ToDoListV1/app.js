const express = require('express');
const bodyParser = require('body-Parser');
const date = require(__dirname + '/date.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

const items = [];
const workItems = [];

app.get('/', function(req, res) {
    const currentDay = date.getDate();
    res.render('list', { listTitle: currentDay, list: items});
})

app.get('/work', function(req, res) {
    res.render('list', { listTitle: 'Work List', list: workItems})
})

app.post('/', function(req, res) {

    console.log(req.body.list);
    if(req.body.list === 'Work List') {
        workItems.push(req.body.newItem);
        res.redirect('/work');
    }
    else {
        items.push(req.body.newItem);
        res.redirect('/');
    }
})

app.listen(3000, function() {
    console.log('Server started on port 3000');
})
