var http = require("http");

var fs = require("fs");

http.createServer(function(req,res)
{

  res.writeHead(200, {"Contet-type":"text/html"});
  var data = fs.readFileSync(__dirname + "\\index.html", "utf-8");

  res.end(data);
}).listen(8888);



// // Modal


//   var modal = document.getElementById("myModal");
//   var btn = document.getElementById("cart");
//   var close = document.getElementsByClassName("close")[0];
// // tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
// // Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
// var close_footer = document.getElementsByClassName("close-footer")[0];
// var order = document.getElementsByClassName("order")[0];




