const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const port = 1215;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './views');

app.use(express.static(__dirname));
app.use(express.static('public'));

server.listen(port, function(){
    console.log('[server.js] Listening on port ' + port);
});

app.get('/', function(request, response){
    response.render('index');
});

app.use(function(request, response){
    response.statusCode = 404;
    response.end("404 Error!");
});