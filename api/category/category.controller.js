const {createCategory,
    getCategory,
    getCategoryById,
    getAdminCategory,
    getAdminCategoryById,
    deleteCategory,
    updateCategory
} = require("./category.service");
var dateTime = require('node-datetime');


module.exports = {
    addCategory: (req,res) => {
        //const {categoryName,imagePath,status} = req.body;
        console.log("request from controller :",req.body);
        const body = req.body;
        /*const file = req.file.filename;
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log(formatted);
        body.imagePath = file;
        body.createdOn = formatted; 
        console.log("printing body :",body);
        console.log("imagePath and createdOn :",body.imagePath,body.createdOn); */
        createCategory(body,(err,results) => {
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

    getCategoryById: (req,res) => {
        const id = req.params.id;
        getCategoryById(id,(err,results) => {
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

    getCategory: (req,res) => {
        console.log("getcategory list :",req.body);
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

    getAdminCategoryById: (req,res) => {
        const id = req.params.id;
        getAdminCategoryById(id,(err,results) => {
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

    getAdminCategory: (req,res) => {
        console.log("getcategory list :",req.body);
        getAdminCategory((err,results) => {
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

    deleteCategory: (req,res) => {
        const id = req.body.id;
        console.log("request printing :",req.body);
        console.log("printing id :",id);        
        deleteCategory(id,(err,results) => {
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
    },

    updateCategory: (req,res) => {
        const id = req.body.id;
        const body = req.body;
        console.log("request printing updateCategory:",req.body);
        console.log("printing id updateCategory :",id);        
        updateCategory(body,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }    
            /*        
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "failed to update"
                });
            } */
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    }

};