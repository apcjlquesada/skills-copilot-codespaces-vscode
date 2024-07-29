// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// Use the fs module to read the file. If the file is read successfully, send the contents of the file to the client. If there is an error reading the file, send an error message to the client.
// Create a new file named comments.js and add the web server code. Run the file and test it in your browser.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	fs.readFile('./comments.html', (err, data) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Error reading the file');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(data);
		}
	});
});

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});