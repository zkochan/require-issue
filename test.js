const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch {}
try { fs.mkdirSync('node_modules'); } catch {}
try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}

fs.symlinkSync(path.join(__dirname, 'pkg'), './node_modules/pkg', 'dir');

try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}
