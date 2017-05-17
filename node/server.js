var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var settings = require('./settings');
var qs = require('querystring');

var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;

funcion renderForm (posts, res) {
    var data = ejs.render(template, {
        posts : posts,
    })
} 
server.on('request', function (req, res) {
    if (req.method === 'POST') {
        req.data = "";
        req.on("readable", function(){
            req.data += read.read();
        });
        req.on("end", function() {
            var query = qs.parse(req.data); 
            posts.push(query.name);
            renderForm(posts, res);
        })
    } else {
        renderForm(posts, res);
    }
   
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});

server.listen(settings.port, settings.host);
console.log("server started");