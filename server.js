/**
 * Created by Dhara on 3/3/16.
 */


// var fs = require('fs');
// var http = require('http');
// var server = http.createServer(function (request, response) {
//     console.log('REQUEST ' + request.method + ' ' + request.url);
//     fs.readFile(request.url.substring(1,request.url.length),function(error,contents) {
//         console.log('ERROR? ' + error);
//         if (contents != undefined)
//             console.log('CONTENTS ' + contents.toString());
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(contents);
//     });
// }).listen(1337, 'localhost');


var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + "/public"));
// app.use('/views', express.static(__dirname + '/public/views'));
app.get('/', function(req,res){
    res.sendfile(__dirname  + '/public/views/index.html');
});

app.get("/listConcerts", function (req, res) {
    fs.readFile( __dirname +  "/public/sample.json", 'utf8', function(err,data) {
        if (err) {
        console.log (err);
        } 
        else {
        console.log (data);
        res.send(data);
        }
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Connection Established to port " + port);
});