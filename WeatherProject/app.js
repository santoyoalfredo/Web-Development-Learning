const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    
})

app.post('/', function(req, res) {
    const query = req.body.cityName;
    const apiKey = 'key';
    const units = 'imperial';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + units;

    https.get(url, function (response) {
        response.on('data', function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.feels_like;
            const weatherDesc = weatherData.weather[0].description;
            const weatherIcon = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png';

            res.write('<h1>The temperature in ' + query + ' is ' + temp + ' with ' + weatherDesc + '</h1>');
            res.write('<img src="' + weatherIcon + '">');
            res.send();

        })
    })
    
})


app.listen(3000, function () {
    'We\'re live!'
})
