const { createUser,
    getUsers,
    getUserByUserId,
    login  } = require("./user.controller");

const router = require("express").Router();
var bodyParser = require('body-parser');
const { checkToken } =require("../../auth/token_validation");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//router.post("/",urlencodedParser,createUser);

//router.post("/",jsonParser,checkToken,createUser);
router.post("/",jsonParser,createUser);
//router.get("/", checkToken,getUsers);
router.get("/", getUsers);
router.get("/:id", checkToken,getUserByUserId);
router.post("/login",login);



module.exports = router;
