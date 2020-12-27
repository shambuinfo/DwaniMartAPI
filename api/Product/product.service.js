const { query } = require("express");
const pool = require("../../config/database");
const { updateProduct } = require("./product.controller");

module.exports = {
    createproduct: (data, callBack) => {
        pool.query(
            `INSERT INTO product(productName,productSKU,categoryId,subCategoryId,productPrice,sellingPrice,productShortDesc,
             productLongDesc,metaTitle,metaDesc,productImage,productTag,status) values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
                data.productTag,
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
            `select p.id, productName as title, productSKU, p.categoryId, c.categoryName as type, c.categoryName as brand, c.categoryName as category, subCategoryId, subcategoryName,  productPrice as price,
            sellingPrice, productShortDesc, productLongDesc as description, metaTitle, metaDesc, productImage as images, productTag as tags,
            p.status, p.createdOn from product p JOIN category c on c.id = p.categoryId JOIN subcategory sc on sc.id = p.subcategoryId`,
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
            `select p.id, productName as title, productSKU, p.categoryId, c.categoryName as type, c.categoryName as brand, c.categoryName as category, subCategoryId, subcategoryName,  productPrice as price,
            sellingPrice, productShortDesc, productLongDesc as description, metaTitle, metaDesc, productImage as images, productTag as tags,
            p.status, p.createdOn from product p JOIN category c on c.id = p.categoryId JOIN subcategory sc on sc.id = p.subcategoryId where p.id=?`,
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
            sellingPrice=?,productShortDesc=?,productLongDesc=?,metaTitle=?,metaDesc=?,productImage=?,productTag=?,
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
                data.productTag,
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