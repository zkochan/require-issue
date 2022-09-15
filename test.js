const fs = require('fs');
const path = require('path');
try { require('child_process').execSync("rm -rf node_modules"); } catch (err) {}
try { fs.mkdirSync('node_modules'); } catch (err) {}
try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}

try { require('child_process').execSync("cp -r " + path.join(__dirname, 'pkg') + " node_modules/pkg"); } catch (err) {}

try {
  require('pkg');
} catch (err) {
  console.log('failed requiering pkg');
}
