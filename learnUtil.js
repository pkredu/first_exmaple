var util = require('util');

var message = `Hello I am %s , and i am celebrating my %dth B'day`;
var result = util.format(message,'John',8);

console.log(result)