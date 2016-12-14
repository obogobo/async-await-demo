const http = require('http');
const port = 3000;

let count = 0;
http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.url === '/count') {
        let delay = Math.random() * 2000;
        setTimeout(() => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ count: ++count }))
        }, delay);
    } else {
        res.end("Not found");
    }
}).listen(port, () => {
    console.log(`listening on port ${port}`);
});

