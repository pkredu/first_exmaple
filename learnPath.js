var path = require('path');

var  pathNew = './file.txt';
var absPath = '/Users'
console.log(path.basename(pathNew));
console.log(path.dirname(pathNew));
console.log(path.extname(pathNew));
console.log(path.isAbsolute(pathNew));
console.log(path.isAbsolute(absPath));