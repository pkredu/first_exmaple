const fs = require('fs');
//fs.writeFileSync('file.txt','first hello world');
const readDataString = fs.readFileSync('file.txt','utf-8');
const readDataBuffer = fs.readFileSync('file.txt');
const readDataBufferCOnvertToString = fs.readFileSync('file.txt');
console.log(readData);
console.log(readDataBuffer);
console.log(readDataBufferCOnvertToString);
