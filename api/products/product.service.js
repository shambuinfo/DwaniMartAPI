const pool = require("../../config/database");

module.exports = {
    createCategory: (data, callBack) => {
        pool.query(
            `INSERT INTO category(categoryName,imagePath,status,createdOn) values(?,?,?,?)`,
            [   data.categoryName,
                data.imagePath,
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
            `select * from category`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getCategoryById: (id,callBack) => {
        pool.query(
            `select * from category where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    deleteCategory: (id,callBack) => {
        pool.query(
            `update category set status = 'Inactive' where id=?`,
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