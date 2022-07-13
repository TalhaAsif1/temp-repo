const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!');
    }
    if (req.url === '/about') {
        res.end('here is out short history')
    }
    res.end(`
    <h1>Oops1</h1>
    <p>We cant seem to find the page your looking for<p>
    <a href="/">back home </a>
        `)

})

//localhost server 
server.listen(5000)
