const path = require('path');
const http = require('http');
const fs = require('fs');
const parser = require('./parser.js')






const server = http.createServer((req, res) => {
    const json = parser.parseActivities('..\\..\\data\\activities.csv\\');
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(json)
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
