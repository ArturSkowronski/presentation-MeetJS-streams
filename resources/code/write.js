var WSImpl = function(chunk, encoding, callback) {
  
  http.request("http://foo.bar?p=" + chunk, function(req, res){
  	callback();
  })
  
};
