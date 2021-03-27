var http = require("http");
var fs = require("fs");
http.createServer(function(request, reponse) {
  reponse.writeHead("200", { "Content-Type": "text/html" });
  var url = request.url;
  if (url == "/") {
    fs.readFile("index.html", function(error, data) {
      if (error == null) {
        reponse.write(data);
        reponse.end();
      } else {
        reponse.end(error);
      }
    });
  } else if (url == "/insert") {
    fs.writeFile("test.txt", "\n ghi vao file thu xem insert", function(error) {
      if (error == null) {
        reponse.end("ghi thanh cong");
      } else {
        reponse.end(error);
      }
    });
  } else if (url == "/append") {
    fs.appendFile("test.txt", "\n ghi vao file thu xem append", function(error) {
      if (error == null) {
        reponse.end("Append thanh cong");
      } else {
        reponse.end(error);
      }
    });
  } else if (url == "/unlink") {
    fs.unlink("test.txt", function(error) {
      if (error == null) {
        reponse.end("Xoa thanh cong");
      } else {
        reponse.end(error);
      }
    });
  } else if (url == "/rename") {
    fs.rename("test.txt", "test2.txt", function(erro1r) {
      if (error == null) {
        reponse.end("Rename thanh cong");
      } else {
        reponse.end(error);
      }
    });
  } else {
    reponse.end("404 not found")
  }
}).listen(process.env.PORT || '7777');
