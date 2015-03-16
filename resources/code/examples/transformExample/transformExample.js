var Readable = require('stream').Readable;
var Writable = require('stream').Writable;
var Transform = require('stream').Transform;

var util = require('util');

var RStream = function (options){
  Readable.call(this, options)
}


var WStream = function (options){
  Writable.call(this, options)
}

var TStream = function (options){
  Transform.call(this, options)
}

util.inherits(RStream, Readable);
util.inherits(WStream, Writable);
util.inherits(TStream, Transform);

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

TStream.prototype._transform = function(chunk, encoding, callback) {
  console.log('transform : ' + chunk.toUpperCase());
  this.push(chunk.toUpperCase());
  callback();
};

WStream.prototype._write = function(chunk, encoding, callback) {
  console.log("saving: " + chunk);
  callback()
};

var rStream = new RStream({objectMode: true});
var wStream = new WStream({objectMode: true});
var tStream = new TStream({objectMode: true});

rStream.pipe(tStream).pipe(wStream);