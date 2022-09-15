const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch {}
try { fs.mkdirSync('node_modules'); } catch {}
try {
  require('pkg2');
} catch (err) {
  console.log('failed requiering pkg2');
}

fs.symlinkSync(path.join(__dirname, 'pkg2'), './node_modules/pkg2', 'dir');

try {
  require('pkg2');
} catch (err) {
  console.log('failed requiering pkg2');
}
