const http = require('http');

http.get('http://localhost:3000', (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', () => {});
  res.on('end', () => process.exit(0));
}).on('error', (err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
