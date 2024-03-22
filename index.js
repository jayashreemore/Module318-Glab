//console.log('Hello World');
//console.log(17+45);
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// comment out 1st server and copy paste second part here -

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://:${port}/`);
// });
/////this ll show Hello World! in big size red color
//I wonder what else we can send... on browser localhost:3000 

