const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set security headers
  res.setHeader('X-Frame-Options', 'SAMEORIGIN'); // Prevents embedding in iframes from other domains

  // Determine the file path to serve
  let filePath = path.join(__dirname, 'build', req.url === '/' ? 'index.html' : req.url);

  // Ensure the path is within the build directory to prevent directory traversal attacks
  if (!filePath.startsWith(path.join(__dirname, 'build'))) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('403 - Forbidden', 'utf-8');
    return;
  }

  // Determine the content type based on the file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Serve the requested file or fallback to index.html for client-side routing
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found, serve index.html to handle client-side routing
        fs.readFile(path.join(__dirname, 'build', 'index.html'), (err, indexContent) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('500 - Server Error', 'utf-8');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(indexContent, 'utf-8');
          }
        });
      } else {
        // Other server errors
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Serve the file with the correct content type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
