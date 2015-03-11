var Readable = require('stream').Readable,
var util = require('util');

var ReadableStream = function (options) {
  Readable.call(this, options)
}

util.inherits(ReadableStream, Readable);
ReadableStream.prototype._read = function(){}

var stream = new ReadableStream();

