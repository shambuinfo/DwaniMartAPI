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
            `select id, categoryName as name, categoryName as title, imagePath, status from category`,
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
            `select id, categoryName as name, name as title, imagePath, status from category where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

    getAdminCategory: callBack => {
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

    getAdminCategoryById: (id,callBack) => {
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
        console.log("printing id in service js :",id);
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
    },

    updateCategory: (data,callBack) => {
        console.log("printing id in updateCategory :",data);
        pool.query(
            `update category set categoryName=?,imagePath=?,status=? where id=?`,
            [
                data.categoryName,
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