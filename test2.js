const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch (err) {}
try { fs.mkdirSync('node_modules'); } catch (err) {}
try {
  require('pkg2');
} catch (err) {
  console.log('failed requiering pkg2');
}

try { require('child_process').execSync("cp -r " + path.join(__dirname, 'pkg2') + " node_modules/pkg2"); } catch (err) {}

try {
  require('pkg2');
} catch (err) {
  console.log('failed requiering pkg2');
}
