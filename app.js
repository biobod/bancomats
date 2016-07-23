var path = require('path');
var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('port', 3000);
app.set('path', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'ejs');
app.use(express.static(__dirname));


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
app.use('/', bodyParser.urlencoded({
    extended: false
}));
app.route('/')
  .get(function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.render('main.html');
    res.end();
})

.post(function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.render('main.html');
    console.log(req.body.city);
    res.end();
});

app.use(function (req, res) {
    res.send(404, 'Page not found');
});

