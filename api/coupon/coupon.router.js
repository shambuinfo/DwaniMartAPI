const { addCoupon,
    getCoupon,
    getCategory,
    deleteCoupon,
    getCouponByCode
 } = require("./coupon.controller");


const router = require("express").Router();
var bodyParser = require('body-parser');

router.post("/", addCoupon);
router.get("/",getCoupon);
router.get("/getCouponCode/:couponvalue",getCouponByCode);
router.get("/getCategory", getCategory);
router.put("/",deleteCoupon);
//router.get("/",getProduct);
//router.get("/:id", getProductById);

module.exports = router;