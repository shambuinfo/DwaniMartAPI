const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
//const cors = require("cors");
var bodyParser = require('body-parser');
const multer = require('multer');
var jsonParser = bodyParser.json();
var fs = require('fs');
//var urlencodedParser = bodyParser.urlencoded({ extended: false }); */

app.use(bodyParser.urlencoded({ extended: false }));

// File upload settings  
const PATH = './uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
});

let upload = multer({
  storage: storage
});

const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");

//app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

app.use("/api/users",userRouter); 
app.use("/api/products",productRouter);

app.get('/newapi', function (req, res) {
  res.end('File catcher');
});

app.post('/newapi/upload', upload.single('image'), function (req, res) {
  if (!req.file) {
    console.log("No file is available!");
    return res.send({
      success: req.file
    });

  } else {
    console.log('File is available!');
    const DESTINATION = './../dwanimart_backend/src/assets/images';
    let oldPath = PATH + '/' + req.file.filename;
    let newPath = DESTINATION + '/category/' + req.file.filename;

    // fs.readFile(oldPath , function(err, data) {
    //   fs.writeFile(newPath, data, function(err) {
    //       fs.unlink(oldPath, function(){
    //           if(err) throw err;
    //         // res.send("File uploaded to: " + newPath);
    //       });
    //   }); 
    // });

    var source = fs.createReadStream(oldPath);
    var dest = fs.createWriteStream(newPath);

    source.pipe(dest);
    source.on('end', function() { /* copied */ });
    source.on('error', function(err) { /* error */ });
   // return true
  }
});

app.listen(process.env.APP_PORT,() => {
    console.log("server is up and running on PORT :",process.env.APP_PORT);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});