var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var buffer = new Buffer('cats');

console.log(decoder.write(buffer.slice(0, 3))); // cat
