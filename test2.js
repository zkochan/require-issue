const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch (err) {}
try { fs.mkdirSync('node_modules'); } catch (err) {}
try {
  require('pkg2');
} catch (err) {
  console.log('failed requiering pkg2');
}

fs.mkdirSync(path.join(__dirname, 'node_modules/pkg2'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'pkg2/index.js'), path.join(__dirname, 'node_modules/pkg2/index.js'));
fs.copyFileSync(path.join(__dirname, 'pkg2/package.json'), path.join(__dirname, 'node_modules/pkg2/package.json'));

try {
  require('pkg2');
  console.log('works')
} catch (err) {
  console.log('failed requiering pkg2');
}
