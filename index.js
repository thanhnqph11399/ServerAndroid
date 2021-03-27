var http=require('http');
var url=require('url');
var cal =require('./Cal');

http.createServer(function (request,response){

  response.writeHead(200,{'Content-Type':'text/html'});
  var tong=cal.tinhTong(3,5);
  response.end('Hello everrybody say sadasdsadws------'+tong);
}).listen(8082);
