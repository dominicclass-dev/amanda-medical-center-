const https = require('https');

const url = 'https://www.google.com/maps/place/Cosmoderm+Clinic+l+%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA+%D9%83%D9%88%D8%B2%D9%85%D9%88%D8%AF%D9%8A%D8%B1%D9%85%E2%80%AD/@21.5793444,39.1417556,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3d1f888888889:0x8888888888888888!8m2!3d21.5793444!4d39.1417556!16s%2Fg%2F11wtf5bf_6?hl=en';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const fs = require('fs');
    fs.writeFileSync('maps_html.txt', data);
    console.log('Saved to maps_html.txt');
  });
}).on('error', (e) => {
  console.error(e);
});
