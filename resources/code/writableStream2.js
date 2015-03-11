readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});