const fs = require('fs');
const path = require('path');

function find(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (file === '.gemini') return fullPath;
      if (fs.statSync(fullPath).isDirectory() && !fullPath.includes('node_modules')) {
        const res = find(fullPath);
        if (res) return res;
      }
    }
  } catch (e) {}
  return null;
}

console.log(find('/'));
