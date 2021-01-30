const {createproduct,
    getCategory,
    getsubCategory,
    getProduct,
    getProductById,
    deleteProduct,
    updateProduct,
    getSubCategoriesById,
    getAdminProduct,
    getAdminProductById
} = require("./product.service");
var dateTime = require('node-datetime');


module.exports = {
    addProduct: (req,res) => {
        const body = req.body;
        createproduct(body,(err,results) => {
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

    getSubCategoriesById: (req,res) => {
        const categoryId = req.params.id;        
        if(!categoryId) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getSubCategoriesById(categoryId,(err,results) => {
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


    getProductById: (req,res) => {        
        const id = req.params.id;
        if(!id) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getProductById(id,(err,results) => {
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

    getProduct: (req,res) => {
        getProduct((err,results) => {
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

    getAdminProductById: (req,res) => {
        const id = req.params.id;
        if(!id) {
            return res.json({
                success: 0,
                message: "Record not found"
            });
        }
        getAdminProductById(id,(err,results) => {
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

    getAdminProduct: (req,res) => {
        getAdminProduct((err,results) => {
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


    deleteProduct: (req,res) => {
        const id = req.body.id;
        deleteProduct(id,(err,results) => {
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

    updateProduct: (req,res) => {
        const id = req.body.id;
        const body = req.body;
        updateProduct(body,(err,results) => {
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