stream.on('data', function(data) {
    if (res.write(data) == false){ 
        stream.pause();
    }
});

stream.on('end', function(data) {
    res.end();
});

res.on('drain', function(data) {
    stream.resume();
});
