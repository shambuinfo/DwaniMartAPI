const {createsubCategory,
    getCategory,
    getsubCategory,
    getsubCategoryById,
    deletesubCategory,
    updatesubCategory,
    getsubCategoryByCategoryId
} = require("./subCategory.service");
var dateTime = require('node-datetime');


module.exports = {
    addsubCategory: (req,res) => {
        //const {categoryName,imagePath,status} = req.body;
        const body = req.body;
        /*const file = req.file.filename;
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log(formatted);
        body.imagePath = file;
        body.createdOn = formatted; 
        console.log("printing body :",body);
        console.log("imagePath and createdOn :",body.imagePath,body.createdOn); */
        createsubCategory(body,(err,results) => {
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

    getsubCategoryById: (req,res) => {
        const id = req.params.id;
        getsubCategoryById(id,(err,results) => {
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

    getsubCategoryByCategoryId: (req,res) => {
        const id = req.params.id;
        getsubCategoryByCategoryId(id, (err,results) => {
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

    getsubCategory: (req,res) => {
        getsubCategory((err,results) => {
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


    deletesubCategory: (req,res) => {
        const id = req.body.id;       
        deletesubCategory(id,(err,results) => {
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

    updatesubCategory: (req,res) => {
        const id = req.body.id;
        const body = req.body;       
        updatesubCategory(body,(err,results) => {
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