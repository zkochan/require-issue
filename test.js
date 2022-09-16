const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch (err) {}
try { fs.mkdirSync('node_modules'); } catch (err) {}
try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}

fs.mkdirSync(path.join(__dirname, 'node_modules/pkg/lib'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'pkg/lib/index.js'), path.join(__dirname, 'node_modules/pkg/lib/index.js'));
fs.copyFileSync(path.join(__dirname, 'pkg/package.json'), path.join(__dirname, 'node_modules/pkg/package.json'));

try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}
