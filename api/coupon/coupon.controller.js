const {createCoupon,
    getCategory,
   // getsubCategory,
    getCoupon,
    //getProductById,
    deleteCoupon,
    //updateProduct
} = require("./coupon.service");
var dateTime = require('node-datetime');


module.exports = {
    addCoupon: (req,res) => {
        const body = req.body;
        createCoupon(body,(err,results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getProductById: (req,res) => {
        const id = req.params.id;
        if(!id) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getProductById(id,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getCoupon: (req,res) => {
        getCoupon((err,results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },


    getCategory: (req,res) => {
        getCategory((err,results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

     deleteCoupon: (req,res) => {
        const id = req.body.coupon_id;
        deleteCoupon(id,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            /*
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }*/
            return res.json({
                success: 1,
                message: "Soft deleted successfully"
            });
        });
    }
};