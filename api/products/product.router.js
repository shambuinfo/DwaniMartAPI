const { addCategory,
    getCategory,
    getCategoryById,
    updateCategory 
 } = require("./product.controller");

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
const PATH = './../dwanimart_backend/src/assets/category';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      //fs.mkdirSync(`${PATH}`, { recursive: true })
      return cb(null, `${PATH}`)
  },
  filename: (req,file,cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage
});

//const upload = multer({dest: '../../images'}) ;

//router.post("/",urlencodedParser,createUser);

//router.post("/",jsonParser,checkToken,createUser);
//router.post("/",jsonParser,createUser);
//router.get("/", checkToken,getUsers);
//router.get("/", getUsers);
//router.get("/:id", checkToken,getUserByUserId);
//router.post("/login",login);

//start of the code
router.post("/upload",upload.single('file'), function(req, res) {
//console.log('upload : ', upload)
  console.log('file request :', req.file)
  if(!req.file) {
    console.log("No File Received");
    return res.json({
      success: false,
      data: req.file
    })
  }
  if(req.file) {
    console.log("File Received");
    return res.json({
      success: true,
      data: req.file
    })
  }
  //return false;
});
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.put("/:id",updateCategory);



module.exports = router;
