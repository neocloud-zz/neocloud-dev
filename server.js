// Example: Launching one cluster working for each CPU

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length; // Get the number of CPUs
console.log('numCPUs: ' + numCPUs);

if (numCPUs == 1) {
  // If only one CPU then must be ec2
  //process.env.PORT = 8888
  }

var PORT = process.env.PORT || 8888;

if (cluster.isMaster) {
  // Fork each worker onto its own thread
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // When the worker dies, announce its PID and death
  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
}
else {
  // If the worker is not the master process, run it as an HTTP server
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("NeoCloud node.js Test Portal\n");
  }).listen(PORT, "0.0.0.0");
}
    // We're using the special Cloud9 IDE port and hostname here;
    // you'll probably just want something like (8080, "127.0.0.1")

process.title ="gensvr001.ec2.neocloud.com";
console.log("Server %s listening at http://localhost" + (PORT === 80 ? "" : ":" + PORT) + "/", process.title);
