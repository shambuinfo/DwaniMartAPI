const { addBrand,
    getBrand,
    getCategory,
    deleteBrand,
    //getsubCategory,
    getsubCategoryById,
    getsubCategory,
    getBrandbyId,
    getBrandbySubCatId
 } = require("./brand.controller");


const router = require("express").Router();
var bodyParser = require('body-parser');

router.post("/", addBrand);
router.get("/",getBrand);
router.get("/:id",getBrandbyId);
router.get("/getBrandbySubCatId/:id",getBrandbySubCatId);
router.get("/getCategory", getCategory);
router.put("/",deleteBrand);
router.get("/getSubCategoriesById/:id",getsubCategoryById);
//router.get("/:id", getProductById);

module.exports = router;