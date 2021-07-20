// console.log('Hello world');
// setInterval(function () {
//     console.log('hello');
// },2000);

var express = require("express");
var app = express(); //tao ứng dụng từ express module
var port = process.env.PORT || 5000; // tạo cổng vào(hosting)
app.listen(port,function () {
    console.log("Server is running...")
});
//  cấp quyền truy cập các file static(file tĩnh)  (css,log,jqury...)
app.use(express.static("public"));
app.set("view engine","ejs");
var count = 0;
//phân công cồng việc -bộ định tuyến
app.get("/",function (req,res) {
    // res.send("xin kính chào quý khách...");
    res.render("home",{
        count: count
    });
});
app.get("/ke-toan",function (req,res) {
    // res.send("xin vui  lòng nạp tiền...");
    count++;
    var products = [
        {
            id:1,
            name:"Product 1",
        },
        {
            id:2,
            name:"Product 2",
        },
        {
            id:3,
            name:"Product 3",
        },
    ]
    res.render("ke-toan",{
        products:products
    });
});
app.get("/bt",function (req,res) {
    res.sendFile(__dirname+"/public/demoboostrap.html");
});
app.get("/chitiet",function (req,res) {
    var masp = req.query.id;
    var p = {};
    for (var i=0;i<products.length; i++) {
        if (products[i].id == masp) {
            p = products[i];
            break;
        }
    }
    res.render("/chitiet",{
        masp:masp,
        p: p
    });
});