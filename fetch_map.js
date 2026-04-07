const https = require('https');

https.get('https://maps.app.goo.gl/UnYxuRpaHZD8ZEJw7', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Location:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
