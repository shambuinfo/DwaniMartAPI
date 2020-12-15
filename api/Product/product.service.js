const { query } = require("express");
const pool = require("../../config/database");
const { updateProduct } = require("./product.controller");

module.exports = {
    createproduct: (data, callBack) => {
        pool.query(
            `INSERT INTO product(productName,productSKU,categoryId,subCategoryId,productPrice,sellingPrice,productShortDesc,
             productLongDesc,metaTitle,metaDesc,productImage,status) values(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [   data.productName,
                data.productSKU,
                data.categoryId,
                data.subCategoryId,
                data.productPrice,
                data.sellingPrice,                
                data.productShortDesc,
                data.productLongDesc,
                data.metaTitle,
                data.metaDesc,
                data.productImage,
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
            `select * from subcategory`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getProduct: callBack => {
        pool.query(
            `select * from product`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },


    getProductById: (id,callBack) => {
        pool.query(
            `select * from product where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },


    deleteProduct: (id,callBack) => {
        pool.query(
            `update product set status = 'Inactive' where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }, 

    updateProduct: (data,callBack) => {
        pool.query(                         
            `update product set productName=?,productSKU=?,categoryId=?,subCategoryId=?,productPrice=?,
            sellingPrice=?,productShortDesc=?,productLongDesc=?,metaTitle=?,metaDesc=?,productImage=?,
            status=? where id=?`,
            [
                data.productName,
                data.productSKU,
                data.categoryId,
                data.subCategoryId,
                data.productPrice,
                data.sellingPrice,
                data.productShortDesc,
                data.productLongDesc,
                data.metaTitle,
                data.metaDesc,
                data.productImage,
                data.status,                
                data.id
            ],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }   


};