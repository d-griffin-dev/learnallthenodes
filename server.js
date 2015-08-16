var http = require('http'),
    handler = function(req, res) {
        if (req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        } else if (req.url === '/marketing') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('This is the marketing page.\n');
        } else if (req.url === '/uploads') {
            if (req.method === 'POST') {
                var upload = "";

                req.on('data', function(chunk){
                  upload += chunk;
                  console.log('chunk: ', chunk);
                });

                req.on('end', function(){
                  console.log('Handling an upload of length ', upload.length);
                  res.writeHead(200, {'Content-Type': 'text/plain'});
                  res.end('Handling the upload\n');
                });

            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<html><head><title>Uploads</title></head><body>' +
                        '<form action="/uploads" method="POST" enctype="multipart/form-data">' +
                        '<input type="file" name="the_file"><input type="submit" value="Upload">' +
                        '</form></body></html>\n');
            }
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Page not found\n');
        }
    },
    server = http.createServer(handler);

server.listen(1337);

console.log('Server running at http://0.0.0.0:1337');
