const express = require("express");
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProdut} = require('../controllers/product.controller')
const { check } = require('express-validator')
const auth = require("../middleware/auth");

let productRouter = express.Router();

productRouter.get("/",auth, getAllProducts)

productRouter.get("/:id",getProductById)

productRouter.post("/",[
    check('id').not().notEmpty(),
    check('name').isLength({min:5}),auth
],createProduct)

productRouter.patch("/:id",[auth],updateProduct)

productRouter.delete("/:id",auth,deleteProdut)

module.exports = productRouter;