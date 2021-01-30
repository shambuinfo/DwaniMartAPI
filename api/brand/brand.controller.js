const {createBrand,
    getCategory,
   getsubCategory,
    getBrand,
    getsubCategoryById,
    deleteBrand,
    getBrandbyId,
    getBrandbySubCatId
    //updateProduct
} = require("./brand.service");
var dateTime = require('node-datetime');


module.exports = {
    addBrand: (req,res) => {
        const body = req.body;
        createBrand(body,(err,results) => {
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
        const categoryId = req.params.id;
        if(!categoryId) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getsubCategoryById(categoryId,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "Record not found for result"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getBrandbySubCatId: (req,res) => {
        const subcategoryId = req.params.id;
        if(!subcategoryId) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getBrandbySubCatId(subcategoryId,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "Record not found for result"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getBrandbyId: (req,res) => {
        const id = req.params.id;
        if(!id) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getBrandbyId(id,(err,results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results) 
            {
                return res.json({
                    success: 0,
                    message: "Record not found for result"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getBrand: (req,res) => {
        getBrand((err,results) => {
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

     deleteBrand: (req,res) => {
         console.log("req.body :",req.body);
        const id = req.body.id;
        console.log("deleteBrand :",id);
        deleteBrand(id,(err,results) => {
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
    }
};