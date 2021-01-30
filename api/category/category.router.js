const { addCategory,
    getCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getAdminCategory,
    getAdminCategoryById
 } = require("./category.controller");

const multer = require('multer');
const router = require("express").Router();
const path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

/*const { checkToken } =require("../../auth/token_validation");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
*/
// File upload settings  
const PATH = './uploads/category/';

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

//const upload = multer({dest: '../../images'}) ;

router.post("/", addCategory);
router.put("/",deleteCategory);
router.put("/update",updateCategory);

//router.post("/",jsonParser,checkToken,createUser);
//router.post("/",jsonParser,createUser);
//router.get("/", checkToken,getUsers);
//router.get("/", getUsers);
//router.get("/:id", checkToken,getUserByUserId);
//router.post("/login",login);

//start of the code
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
  const DESTINATION = './../dwanimart_backend/src/assets/images/category/';
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

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.get("/", getAdminCategory);
router.get("/:id", getAdminCategoryById);

//router.post("/:id",updateCategory);
module.exports = router;