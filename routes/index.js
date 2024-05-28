/** @format */

const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");
const VariantController = require("../controllers/variant");
const UserController = require("../controllers/user");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

//Routes for create user
router.post("/register", UserController.create);

//Routes for login
router.post("/login", UserController.login);

//Routes for authentication
router.use(authentication);

//Routes for product
router.post("/products", ProductController.create);
router.get("/products", ProductController.readAll);
router.get("/products/:id", ProductController.readOne);
router.put("/products/:id", authorization, ProductController.update);
router.delete("/products/:id", authorization, ProductController.delete);

//Routes for variant
router.post("/variants", VariantController.create);
router.get("/variants", VariantController.readAll);
router.get("/variants/:id", VariantController.readOne);
router.put("/variants/:id", authorization, VariantController.update);
router.delete("/variants/:id", authorization, VariantController.delete);

module.exports = router;
