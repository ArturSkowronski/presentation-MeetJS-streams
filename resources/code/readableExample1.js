var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('First Element \n');
rs.push('Second Element \n');
rs.push('Third Element \n');
rs.push(null);

rs.pipe(process.stdout);