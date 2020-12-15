const { addProduct,
    getCategory,
    getsubCategory,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
 } = require("./product.controller");

const multer = require('multer');
const router = require("express").Router();
const path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
 
const PATH = './uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdirSync(`${PATH}`, { recursive: true })
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
});

const upload = multer({
  storage: storage
});

router.put("/",deleteProduct);
router.put("/update",updateProduct);

router.post("/upload", upload.single('image'), function(req, res) {
  if (!req.file) {
    console.log("No file is available!");
    return res.send({
      success: req.file
    });

  } else {
    console.log('File is available!');    
    return res.send({
      success: req.file
    })
  }
});

router.post("/upload/file", function(req, res, next) {
  let request = req.body;
  if(!request.path) {
    request.path = ""
  }
  //const DESTINATION = `'./../dwanimart_backend/src/assets/images/${request.path}/'`;
  const DESTINATION = './../dwanimart_backend/src/assets/images/product/';
  //fs.mkdirSync(`${DESTINATION}`, { recursive: true })
  let oldPath = PATH + '/' + request.filename;
  let newPath = DESTINATION +  request.filename;

  fs.readFile(oldPath , function(err, data) {
    fs.writeFile(newPath, data, function(err) {
        fs.unlink(oldPath, function(){
            if(err) throw err;   
            return res.status(200).end();         
        });
    }); 
  });
});

router.post("/", addProduct);
router.get("/getCategory",getCategory);
router.get("/getsubCategory", getsubCategory);
router.get("/",getProduct);
router.get("/:id", getProductById);

module.exports = router;