const path = require('path');
const http = require('http');
const fs = require('fs');







const server = http.createServer((req, res) => {
    var json = require('./package.json');
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify(json))
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
