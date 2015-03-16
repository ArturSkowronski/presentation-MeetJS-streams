// node 0.10 - Non-working mixing example
 
var Readable = require('stream').Readable;
var util = require('util');

var RStream = function (options){
  Readable.call(this, options)
}

util.inherits(RStream, Readable);

var data = [
  "First",  
  "Second", 
  "Third",
];

var curIndex = 0;

RStream.prototype._read = function() {
   if (curIndex === data.length)
    return this.push(null);
 
  var date = data[curIndex++];
  console.log('pushed: ' + date);
  this.push(date);
};


var stream = new RStream({objectMode: true});

stream.setEncoding('utf8');
 
var pulledData = '';
var pushedData = '';
 

stream.on('data', function(chunk) {
  pushedData += chunk;
});
 
stream.on('readable', function() {
  var chunk;
  while(chunk = stream.read()) {
    pulledData += chunk;
  }
});
 
 
stream.on('end', function() {
  // End of the stream has been reached and no more data can be read
  console.log('Pulled data length: %d', pulledData.length);
  console.log('Pushed data length: %d', pushedData.length);
});