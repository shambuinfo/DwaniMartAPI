const {createCategory,
    getCategory,
    getCategoryById

  // getUserByUserEmail 
} = require("./product.service");
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

    updateCategory: (req,res) => {
        const id = req.params.id;
        deleteCategory(id,(err,results) => {
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
    }

};