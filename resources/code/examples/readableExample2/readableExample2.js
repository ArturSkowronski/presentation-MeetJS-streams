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

stream.on('data', function() {
	while (null !== (record = stream.read())) {
    console.log('received: ' + record);
  }
});

stream.on('end', function() {
  console.log('All consumed');
});