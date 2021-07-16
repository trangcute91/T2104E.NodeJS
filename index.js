// console.log('Hello world');
// setInterval(function () {
//     console.log('hello');
// },2000);

var express = require("express");
var app = express(); //tao ứng dụng từ express module
var port = 5000; // tạo cổng vào(hosting)
app.listen(port,function () {
    console.log("Server is running...")
});
//  cấp quyền truy cập các file static(file tĩnh)  (css,log,jqury...)
app.use(express.static("public"));
//phân công cồng việc -bộ định tuyến
app.get("/",function (req,res) {
    res.send("xin kính chào quý khách...");
});
app.get("/ke-toan",function (req,res) {
    res.send("xin vui  lòng nạp tiền...");
});
app.get("/bt",function (req,res) {
    res.sendFile(__dirname+"/public/demoboostrap.html");
});