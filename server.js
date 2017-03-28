var fs = require("fs");
var http = require('http');
var port = 8080;


function requesthandler(req, res){
	console.log(req.url)
	

	if(req.url === "/"){
		fs.readFile('count.txt', function(err, data){
			if (err){
				console.log(err);
			} else {
				res.end(data)
			}
		});
		
	}
}



var server = http.createServer(requesthandler)

server.listen(port, function(){
	console.log('listening on', port)
})