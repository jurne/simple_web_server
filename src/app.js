const http = require('http');
const server = http.createServer();
const url = require('url');

function set_response(response, content, status=200) {
    response.writeHead(status, {'Content-Type':'text/plain'});
    response.write(content);
}

server.on('request', (request, response) => {
    let path = url.parse(request.url).pathname;
    console.log(path);

    if (path === '/') { //is gelijk en is het type gelijk
        set_response(response, 'Hello World');
    } else if (path === '/about') {
        set_response(response, 'Made by VIVES student. ;)');
    } else {
        set_response(response, 'Error', 400);
    }

    
    response.end();
});

server.listen(3000, () => {
  console.log('Node server created at port 3000');
});