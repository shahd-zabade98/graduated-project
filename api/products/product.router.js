const { productSearch, insertProduct , productFetch, editProduct} = require ("./product.controller");

const router2 = require ("express").Router();

router2.get("/productSearch/:product_label", productSearch);
router2.post("/insertProduct",insertProduct);
router2.get("/productFetch" , productFetch);
router2.post("/editProduct", editProduct);
module.exports = router2;


