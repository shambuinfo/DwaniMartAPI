const pool = require("../../config/database");

module.exports = {
    createsubCategory: (data, callBack) => {
        pool.query(
            `INSERT INTO subcategory(imagePath,subcategoryName,categoryId,status,createdOn) values(?,?,?,?,?)`,
            [   data.imagePath,
                data.subcategoryName,
                data.categoryId,
                //data.categoryName,                
                data.status,
                data.createdOn                
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


    getsubCategoryById: (id,callBack) => {
        pool.query(
            `select * from subcategory where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    deletesubCategory: (id,callBack) => {
        console.log("printing id in service js :",id);
        pool.query(
            `update subcategory set status = 'Inactive' where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    updatesubCategory: (data,callBack) => {
        console.log("printing id in updateCategory :",data);
        pool.query(
            `update subcategory set subcategoryName=?,categoryId=?,imagePath=?,status=? where id=?`,
            [
                data.subcategoryName,
                data.categoryId,
                data.imagePath,
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