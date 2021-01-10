const { query } = require("express");
const pool = require("../../config/database");
//const { updateProduct } = require("./coupon.controller");

module.exports = {
    createBrand: (data, callBack) => {
        pool.query(
            `INSERT INTO brand(brandName,categoryId,subcategoryId,status) values(?,?,?,?)`,
            [   data.brandName,
                data.categoryId,
                data.subcategoryId,
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

   getsubCategory: callBack => {
        pool.query(
            `select id,subcategoryName from subcategory`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }, 

    getsubCategoryById: (categoryId,callBack) => {
        pool.query(
            `select id,subcategoryName from subcategory where categoryId=?`,
            [categoryId],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getBrandbyId: (id,callBack) => {
        pool.query(
            `select * from brand where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getBrandbySubCatId: (subcategoryId,callBack) => {
        pool.query(
            `select * from brand where subcategoryId=?`,
            [subcategoryId],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getBrand: callBack => {
        pool.query(
            `select * from brand`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },


    deleteBrand: (id,callBack) => {
        pool.query(
            `update brand set status = 'Inactive' where id=?`,
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