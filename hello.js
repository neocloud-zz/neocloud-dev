console.log("NeoCloud Node.js Play Area");

var http = require("http");

http.createServer(function(request, response) {  
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("NeoCloud Node.js Play Area - Hello World");  
	response.end();
}).listen(process.env.PORT);



function execute(someFunction, value) {
	someFunction(value);
}

//execute(function(word){ console.log(word) }, "Hello");
