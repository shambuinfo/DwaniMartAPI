const { query } = require("express");
const pool = require("../../config/database");
//const { updateProduct } = require("./coupon.controller");

module.exports = {
    createCoupon: (data, callBack) => {
        pool.query(
            `INSERT INTO coupon(couponTitle,couponCode,valid_from,valid_until,quantity,
            discountPrice,discountType,category,
            min_value,max_value,status) values(?,?,?,?,?,?,?,?,?,?,?)`,
            [   data.couponTitle,
                data.couponCode,
                data.valid_from,
                data.valid_until,
                data.quantity,
                data.discountPrice,                
                data.discountType,
                data.category,
                data.min_value,
                data.max_value,                
                data.status              
            ],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    
    getCategory: callBack => {
        pool.query(
            `select id,categoryName from category`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

   /* getsubCategory: callBack => {
        pool.query(
            `select * from subcategory`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }, */

    getCoupon: callBack => {
        pool.query(
            `select * from coupon`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getCouponByCode: (couponCode,callBack) => {
        pool.query(
            `select * from coupon where couponCode=? and status = 1 limit 0,1`,
            [couponCode],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },


    deleteCoupon: (id,callBack) => {
        pool.query(
            `update coupon set status = 'Inactive' where coupon_id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
 
};