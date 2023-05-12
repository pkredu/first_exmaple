var buf1 = Buffer.from('1234');
var buf2 = Buffer.from('Hello');
buf2.copy(buf1,2);
console.log(buf1.toString())
console.log(buf2);

// 