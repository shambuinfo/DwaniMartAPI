const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const cors = require("cors");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false }); */

app.use(bodyParser.urlencoded({ extended: false }));
const userRouter = require("./api/users/user.router");
const categoryRouter = require("./api/category/category.router");
const subcategoryRouter = require("./api/subCategory/subCategory.router");
const productRouter = require("./api/Product/product.router");
const couponRouter = require("./api/coupon/coupon.router");


app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

app.use("/api/users",userRouter); 
app.use("/api/category",categoryRouter);
app.use("/api/subcategory",subcategoryRouter);
app.use("/api/product",productRouter);
app.use("/api/coupon",couponRouter);


app.listen(process.env.APP_PORT,() => {
    console.log("server is up and running on PORT :",process.env.APP_PORT);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});