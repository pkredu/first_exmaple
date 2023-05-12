var url = require('url');

var adr = 'http://localhost:8080/index.html?year=2020&month=feb';

var urladdress = url.parse(adr,false,true)

console.log(urladdress.host);
console.log(urladdress.pathname);
console.log(urladdress.query);
