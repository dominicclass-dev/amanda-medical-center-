const https = require('https');

https.get('https://maps.app.goo.gl/e8JjX2CnucYoJqHg7', (res) => {
  console.log("Redirect URL:", res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
