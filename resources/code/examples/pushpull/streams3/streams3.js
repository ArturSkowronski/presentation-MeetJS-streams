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
  console.log('Pulled data length: %d', 16);
  console.log('Pushed data length: %d', 16);
});
 